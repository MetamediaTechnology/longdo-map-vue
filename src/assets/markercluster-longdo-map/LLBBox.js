const longdo = window.longdo;
/**
 * class for carrying bound information
 * @export LLBBox
 * @class LLBBox
 */
export class LLBBox{
    /**
     *Creates an instance of LLBBox.
     * @param {Array<longdo.Location>} locations array of locations to create bound
     * @memberof LLBBox
     */
    constructor(locations){
        this._projection = longdo.Projections.EPSG3857;
        this._locationList = locations.slice();
        this._originalLocationList = this._locationList.slice();
        if(locations.length > 0){
            this._bounds = longdo.Util.locationBound(this._locationList);
        }
    }

    /**
     * generate the instance set up bound
     * @static
     * @param {longdo.Bound} bound bound to be set up
     * @returns {LLBBox} instance of this class
     * @memberof LLBBox
     */
    static generateFrom(bound){
        return new LLBBox(
            [
                {"lon":bound.minLon,"lat":bound.minLat},
                {'lon':bound.maxLon,'lat':bound.maxLat}]);
    }
    /**
     * generate the instance set up rect bound from 1 or 2 vertex
     * @static
     * @param {longdo.Location} loc1 1st vertex
     * @param {longdo.Location} [loc2] 2nd vertex, if not provided, it will be as the same as loc1
     * @returns {LLBBox} instance of this class
     * @memberof LLBBox
     */
    static generateRect(loc1,loc2){
        if(!loc2){
            loc2 = loc1;
        }
        return new LLBBox([loc1,loc2]);
    }

    /**
     * returns bound
     * @returns {longdo.Bound} bound
     * @memberof LLBBox
     */
    getBounds(){
        return {'minLon':this._bounds.minLon,
                'minLat':this._bounds.minLat,
                'maxLon':this._bounds.maxLon,
                'maxLat':this._bounds.maxLat};
    }
    /**
     * returns Left-Top of the bound
     * @returns {longdo.Location} left-top vertex of the bound
     * @memberof LLBBox
     */
    LT(){
        return {"lon": this._bounds.minLon, "lat": this._bounds.maxLat};
    }
    /**
     * returns Right-Top of the bound
     * @returns {londgo.Location} right-top vertex of the bound
     * @memberof LLBBox
     */
    RT(){
        return {"lon": this._bounds.maxLon, "lat": this._bounds.maxLat}; 
    }
    /**
     * returns Left-Bottom of the bound
     * @returns {longdo.Location} left-bottom vertex of the bound
     * @memberof LLBBox
     */
    LB(){
        return {"lon": this._bounds.minLon, "lat": this._bounds.minLat};
    }
    /**
     * returns right-bottom of the bound
     * @returns {longdo.Locaton} right-bottom vertex of the bound
     * @memberof LLBBox
     */
    RB(){
        return {"lon": this._bounds.maxLon, "lat": this._bounds.minLat};
    }
    getMinimumBounds(){
        const b = longdo.Util.locationBound(this._originalLocationList);
        return b;
    }

    /**
     * add location to bound and extend bound in order to include added location
     * @param {longdo.Location} location location to be added
     * @memberof LLBBox
     * @returns {undefined}
     */
    add(location){
        this._locationList.push(location);
        this._originalLocationList.push(location);
        this._bounds = longdo.Util.locationBound(this._locationList);
    }
    /**
     * remove location from the bound
     * @param {longdo.Location} location location to be removed
     * @memberof LLBBox
     * @returns {undefined}
     */
    remove(location){
        this._locationList = this._locationList.filter((e) => e !== location);
        this._originalLocationList = this._originalLocationList.filter((e) => e !== location);
        this._bounds = this.empty() ? null: longdo.Util.locationBound(this._locationList);
    }

    /**
     * return whether including no locations or not
     * @returns {boolean} return true if containing no location
     * @memberof LLBBox
     */
    empty(){return this._locationList.length === 0;}

    /**
     * returns array of locations included itself
     * @returns {Array<longdo.Location>} array of locations included in itself
     * @memberof LLBBox
     */
    getLocations(){
        return this._locationList.slice();
    }
    /**
     * returns whether given location is within its bound
     * @param {longdo.Location} loc location to be checked
     * @returns {boolaen} returns true if location is in bound
     * @memberof LLBBox
     */
    isLocInBounds(loc){
        const result = longdo.Util.contains(loc,this.getRectVertex());
        return result === null ? true : result;
    }
    /**
     * extend bound size
     * @param {number} diff size to extends
     * @returns {LLBBox} itself
     * @memberof LLBBox
     */
    extendSize(diff){
        const b = this._bounds;
        const maxy = this._projection.latToNorm(b.maxLat) + diff;
        const miny = this._projection.latToNorm(b.minLat) - diff;
        this._locationList.push({"lon":b.minLon - diff,"lat": this._projection.normToLat(miny)});
        this._locationList.push({"lon":b.minLon - diff,"lat": this._projection.normToLat(maxy)});
        this._locationList.push({"lon":b.minLon + diff,"lat": this._projection.normToLat(miny)});
        this._locationList.push({"lon":b.maxLon + diff,"lat": this._projection.normToLat(maxy)});
        this._bounds = longdo.Util.locationBound(this._locationList);
        return this;
    }
    /**
     * returns array of vertex by order of drawing rect
     * @returns {Array<longdo.Location>} array of vertex locations
     * @memberof LLBBox
     */
    getRectVertex(){
        return [{"lon":this._bounds.minLon,"lat":this._bounds.minLat},
        {"lon":this._bounds.minLon,"lat":this._bounds.maxLat},
        {"lon":this._bounds.maxLon,"lat":this._bounds.maxLat},
        {"lon":this._bounds.maxLon,"lat":this._bounds.minLat}];
    }

    /**
     * draw polygon to show bound
     * @param {longdo.Map} map map for polygon to show
     * @memberof LLBBox
     * @returns {undefined}
     */
    drawArea(map){
        this._poly = new longdo.Polygon(this.getRectVertex());
        map.Overlays.add(this._poly);
    }
    /**
     * remove polygon from map
     * @param {longdo.Map} map map where the polygon will be removed
     * @memberof LLBBox
     * @returns {undefined}
     */
    removeArea(map){
        if(this._poly && this._poly.active()){
            map.Overlays.remove(this._poly);
            delete this._poly;
        }
    }

    /**
     * returns relative coordinates in given N x N grid
     * @param {longdo.Location} loc location to be checked
     * @param {number} n size of width,height of the grid
     * @returns {longdo.Tile} coordinates(Tile)
     * @memberof LLBBox
     */
    getNxNGridCord(loc,n){
        if(!this.isLocInBounds(loc)){
            return null;
        }
        const xlen = (this._bounds.maxLon - this._bounds.minLon) / n;
        const ylen = (this._lat2y(this._bounds.maxLat) - this._lat2y(this._bounds.minLat)) / n;
        let lonoffset = loc.lon - this._bounds.minLon;
        const yoffset = -this._lat2y(loc.lat) + this._lat2y(this._bounds.maxLat);
        const xid = Math.floor(lonoffset / xlen), yid = Math.floor(yoffset / ylen);
        return {"u": xid,"v": yid};
    }

    /*
    Adapted from https://wiki.openstreetmap.org/wiki/Mercator
    */
    /**
     * convert y pixel coordinate into latitude
     * @param {number} y pixel coordinate
     * @returns {number} latitude
     * @memberof LLBBox
     */
    _y2lat(y) { return (Math.atan(Math.exp(y / (180 / Math.PI))) / (Math.PI / 4) - 1) * 90; }
    /**
     * convert latitude into y pixel coordinate
     * @param {number} lat latitude
     * @returns {number} y pixel coordinate
     * @memberof LLBBox
     */
    _lat2y(lat) { return Math.log(Math.tan((lat / 90 + 1) * (Math.PI / 4) )) * (180 / Math.PI); }
}

export class LLCircle{
    constructor(center,radius){
        this.center = center;
        this.sqrad = radius * radius;
    }
}