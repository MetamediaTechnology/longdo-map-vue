/* eslint-disable no-redeclare */
/* eslint-disable no-undef */
/*
 * heatmap.js Longdo Map Overlay
 *
 * Copyright (c) 2008-2016, Patrick Wied (https://www.patrick-wied.at)
 * Dual-licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and the Beerware (http://en.wikipedia.org/wiki/Beerware) license.
 */
export default {
  heatmap: function(h337) {
    "use strict";

    /**
     * class stands for HeatmapLayer
     *
     * @param {*} cfg configuraton settings see: https://www.patrick-wied.at/static/heatmapjs/docs.html#h337-register
     */
    var HeatmapOverlay = function(cfg) {
      this._initialize(cfg);
      var instance = this;
      longdo.Layer.call(this, "heatmaplayer", {
        type: longdo.LayerType.Custom,
        defer: (element, projection, tile, zoom) => {
          setTimeout(() => {
            const url = instance._getURL(projection, tile, zoom);
            element.src = url;
          }, 0);
        },
      });
    };
    HeatmapOverlay.prototype = Object.create(longdo.Layer.prototype);
    HeatmapOverlay.prototype.constructor = HeatmapOverlay;
    HeatmapOverlay.prototype._initialize = function(cfg) {
      this.cfg = cfg;
      this._data = [];
      this._max = 1;
      // this.defer = true;
      this._min = 0;
      this.Cache = [];
      this.tileNumSqrtX = this.tileNumSqrtY = 2 << 1;
      this.tileResSqrt = 256;
      this.cfg.container = document.createElement("div");
      this.cfg.container.style.cssText =
        "width:" + this.tileResSqrt + "px;height:" + this.tileResSqrt + "px";
      this.cfg.width = this.cfg.height = this.tileResSqrt;
      this._heatmap = h337.create(this.cfg);
    };
    /**
     * returns base64 encoded image URL
     *
     * @param {*} projection map projection
     * @param {*} tile requested map tile
     * @param {*} zoom zoom level
     * @returns {String} base64 encoded image scheme URL
     */
    HeatmapOverlay.prototype._getURL = function(projection, tile, zoom) {
      //The number of tiles in x/y-axis
      this.tileNumSqrtX = 2 << (zoom - 1);
      this.tileNumSqrtY =
        projection == longdo.Projections.EPSG4326
          ? this.tileNumSqrtX / 2
          : this.tileNumSqrtX;
      var len = this._data.length;
      var generatedData = { data: [], max: this._max, min: this._min };
      // If all points are outside of the tile or not
      var Alloutside = false;
      if (this._data.length == 0) {
        if (this._heatmap) this._heatmap.setData(generatedData);
        return "";
      }
      var localMax = 0,
        localMin = 0;
      while (len--) {
        var entry = this._data[len];
        //The tile including the point
        var inctile = this._getTileIncludeLatlon(entry, projection);
        var scale = 2 << (zoom - 1);
        var radiusMultiplier = this.cfg.scaleRadius ? scale : 1;
        var radius = entry.radius
          ? entry.radius * radiusMultiplier
          : (this.cfg.radius || 2) * radiusMultiplier;
        // distance between the tile & the tile including the point in tile-scale
        var distance = 1 + radius / this.tileResSqrt;
        if (
          Math.abs(inctile.u - tile.u) <= Math.ceil(distance) &&
          Math.abs(inctile.v - tile.v) <= Math.ceil(distance)
        ) {
          // each value start to count from left-top vertex
          var elon = 360 / this.tileNumSqrtX;
          var offsetlon = entry.lon + 180 - tile.u * elon;

          var elat = 180 / this.tileNumSqrtY;
          var offsetlat =
            projection == longdo.Projections.EPSG4326
              ? 90 - entry.lat - elat * tile.v
              : 90 - this._lat2y(entry.lat) / 2 - elat * tile.v;

          var x = Math.floor(offsetlon * (this.tileResSqrt / elon));
          var y = Math.floor(offsetlat * (this.tileResSqrt / elat));
          // If the point is outside of the tile, this bool is no longer false
          Alloutside =
            Alloutside ||
            x < 0 ||
            x > this.tileResSqrt ||
            y < 0 ||
            y > this.tileResSqrt;

          generatedData.data.push({
            x: x,
            y: y,
            value: entry.value,
            radius: radius,
          });
        }
        localMax = Math.max(entry.value, localMax);
        localMin = Math.min(entry.value, localMin);
      }
      // Keep the result of tile help reduce load time.
      if (this.Cache[tile.u + "-" + tile.v + "-" + tile.w]) {
        return this.Cache[tile.u + "-" + tile.v + "-" + tile.w];
      } else {
        if (this.cfg.useLocalExtrema) {
          generatedData.max = localMax;
          generatedData.min = localMin;
        }
        //If all points are outside of the tile...
        if (Alloutside) {
          generatedData.data.push({
            x: 1,
            y: 1,
            value: -Number.EPSILON,
            radius: 0,
          });
          //note: inserting dummy point to avoid rendering bug
        }
        // uncomment below if 'canvas height is 0' error occurs
        // this._heatmap._renderer.setDimensions(this.tileResSqrt, this.tileResSqrt);
        this._heatmap.setData(generatedData);
        this.Cache[
          tile.u + "-" + tile.v + "-" + tile.w
        ] = this._heatmap.getDataURL();
        return this._heatmap.getDataURL();
      }
    };
    /**
     * accepts points & values data
     *
     * @param {*} data points & values data. For syntax, see: https://www.patrick-wied.at/static/heatmapjs/docs.html#h337-register
     */
    HeatmapOverlay.prototype.setData = function(data) {
      this._max = data.max || this._max;
      this._min = data.min || this._min;
      this._data = [];
      var data = data.data,
        len = data.length;
      while (len--) {
        var entry = data[len];
        var d = { lat: entry.lat, lon: entry.lon, value: entry.value };
        if (entry.radius) d.radius = entry.radius;
        this._data.push(d);
      }
    };
    HeatmapOverlay.prototype._getTileIncludeLatlon = function(
      latlon,
      projection
    ) {
      var tx = latlon.lon + 180;
      var y =
        projection == longdo.Projections.EPSG4326
          ? 90 - latlon.lat
          : 180 - this._lat2y(latlon.lat);
      var ex = 360 / this.tileNumSqrtX;
      var ey =
        projection == longdo.Projections.EPSG4326
          ? 180 / this.tileNumSqrtY
          : 360 / this.tileNumSqrtY;
      return { u: Math.floor(tx / ex), v: Math.floor(y / ey) };
    };
    HeatmapOverlay.prototype._clearCache = function() {
      this.Cache = [];
    };

    /*
        Adapted from https://wiki.openstreetmap.org/wiki/Mercator
        */
    HeatmapOverlay.prototype._y2lat = function(y) {
      return (
        (Math.atan(Math.exp(y / (180 / Math.PI))) / (Math.PI / 4) - 1) * 90
      );
    };
    HeatmapOverlay.prototype._lat2y = function(lat) {
      return (
        Math.log(Math.tan((lat / 90 + 1) * (Math.PI / 4))) * (180 / Math.PI)
      );
    };

    return HeatmapOverlay;
  },
};
