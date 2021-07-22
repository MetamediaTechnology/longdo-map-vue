/** @module Icon */
const longdo = window.longdo;
/**
 * Class for managing cluster's icon & children markers' icons
 * @export ClusterIcon
 * @class ClusterIcon
 */
export class ClusterIcon{
    /**
     *Creates an instance of ClusterIcon.
     * @param {Cluster} cluster cluster in charge of this
     * @param {ConfigHandler} config config variables
     * @param {IconLoader} iloader cluster icon carrier
     * @memberof ClusterIcon
     */
    constructor(cluster,config,iloader){
        this._cluster = cluster;
        this._config = config;
        this._iloader = iloader;
        this._center = null;
        this._map = cluster._map;
        this._sums = null;
        this._clusterMarker = new longdo.Marker({"lat":0,"lon":0},{
            "icon": this._cluster._markerCluster._iloader.getIcon(0),
            "weight": longdo.OverlayWeight.Top
        });
    }

    /**
     * show cluster icons & marker icons if needed
     * @returns {undefined}
     * @memberof ClusterIcon
     */
    show(){
        let len = this._cluster._markers.length;
        if(!this._config.swarmModeEnabled){
            const pos = this._center;
            if (this._cluster._markers.length < this._config.minClusterSize){
                const marker = this._cluster._markers[0];
                if(!marker.active()){
                    this._map.Overlays.add(marker);
                }
                return;
            }
            const zoom = this._map.zoom();
            const mz = this._config.maxZoom;
            if(mz && zoom > mz || zoom === 20){
                while(len--){
                    const marker = this._cluster._markers[len];
                    if(!marker.active()){
                        this._cluster._map.Overlays.add(marker);
                    }
                }
                return;
            }
            if(this._clusterMarker.active()){
                this._map.Overlays.move(this._clusterMarker,pos);
            }else{
                this._clusterMarker.setLocation(pos);
                this._map.Overlays.add(this._clusterMarker);
                if(this._poly){
                    this._map.Overlays.remove(this._poly);
                }
                if(this._config.drawMarkerArea){
                    this._poly = new longdo.Polygon(this._cluster._bounds.getRectVertex(),{"fillColor": "rgba(0,0,0,0.3)"});
                    this._map.Overlays.add(this._poly);
                }
            }
        }else if(this._config.swarmAlg === 1){
            //TODO
            const amounts = new Array(this._config.swarmGridLength*this._config.swarmGridLength).fill(0);
            let sum = 0;
            while(len--){
                if(sum >= this._config.swarmMarkersMaxAmountPerTile){
                    break;
                }
                const m = this._cluster._markers[len];
                const tile = this._cluster._gridids[len];
                const idx = tile.u * this._config.swarmGridLength + tile.v;
                if(amounts[idx] % this._config.swarmMarkersConstPerGrid === 0){
                    if(!m.active()){
                        this._map.Overlays.add(m);
                    }
                    sum++;
                }
                amounts[idx]++;
            }
        }else if(this._config.swarmAlg === 2){
            this._calculateMarkersDispAmount();
            let amount = 0;
            while(len--){
                if(amount > this._config.swarmMarkersMaxLimit){
                    break;
                }
                const m = this._cluster._markers[len];
                if(this.swarmAlg2Decider(amount,this._cluster._markers.length-len-1)){
                    if(!m.active()){
                        this._map.Overlays.add(m);
                    }
                    amount++;
                }
            }
            return;
        }
    }
    _calculateMarkersDispAmount(){
        const modsig = function(n,inmax,outmax){
            if(n === 0){
                return 0;
            }
            const z = n / inmax * 49 - 13;
            const result = Math.round(outmax*(1 / (1 + Math.exp(-z))));
            return result === 0 ? 1 : result;
        };
        this._maxDispAmount = modsig(this._cluster._markers.length,this._cluster._markerCluster._maxClusterSize,this._config.swarmMarkersMaxLimit);
    }
    swarmAlg2Decider(amount,num){
        if(this._config.swarmMarkersAmountAdjust){
            return this._maxDispAmount > amount;
        }
        return amount <= 5 || num % 10 === 0;
    }
    /**
     * remove cluster icon from the map
     * @memberof ClusterIcon
     * @returns {undefined}
     */
    remove(){
        this._map.Overlays.remove(this._clusterMarker);
        if(this._poly){
            this._map.Overlays.remove(this._poly);
            this._poly = null;
        }
    }
    /**
     * set position where cluster icon will be rendered
     * @param {longdo.Location} center position for cluster icon to be rendered
     * @memberof ClusterIcon
     * @returns {undefined}
     */
    setCenter(center){
        this._center = center;
    }
    /**
     * set number displaying in cluster
     * @param {number} sums numbers to change to
     * @returns {undefined}
     * @memberof ClusterIcon
     */
    setSums(sums){
        if(this._sums && sums === this._sums){return;}
        this._sums = sums;
        if(this._clusterMarker && this._clusterMarker.element()){
            this._iloader.changeNumber(this._clusterMarker.element(),this._sums);
        }
    }
}

/**
 * class for loading cluser icons & carrying them
 * @export IconLoader
 * @class IconLoader
 */
export class IconLoader{

    /**
     *Creates an instance of IconLoader.
     * @param {MarkerCluster} markercluster MarkerCluster instance
     * @param {ConfigHandler} config config variables
     * @memberof IconLoader
     */
    constructor(markercluster,config){
        this._markerCluster = markercluster;
        this._config = config;
        this._images = new Map();
        this.ready = true;
        this.useDefault = true;
        if(this._config.styles){
            this.loadStyles(this._config.styles);
        }
    }
    /**
     * load style of icons
     * @param {string} url url of icon image
     * @param {number} width width of the image
     * @param {number} height height of the image
     * @param {number} minThreshold minimum threshold of size of cluster
     * @param {Function} [callback] callback function to be called on finishing loading
     * @returns {number} index of loaded style
     * @memberof IconLoader
     */
    load(url,width,height,minThreshold,callback){
        this.ready = false;
        this.useDefault = false;
        const img = new Image(width,height);
        this._images.set(img,{"ready":false,"minThreshold":minThreshold});
        const that = this;
        img.onload = function(){
            that._images.get(img).ready = true;
            if([...that._images.values()].every(elm => elm.ready)){
                that.ready = true;
                that._markerCluster.resetViewport();
                that._markerCluster._createClusters();
            }
            if(callback){
                callback();
            }
        };
        img.src = url;
        return this._images.keys.length - 1;
    }
    /**
     * load styles config value
     * @param {Array<Object>} styles styles to be loaded
     * @memberof IconLoader
     * @returns {undefined}
     */
    loadStyles(styles){
        styles.sort((elm1,elm2) => 
        elm1.minThreshold < elm2.minThreshold ? 1 : elm1.minThreshold === elm2.minThreshold ?
         0 : -1); 
         let len = styles.length;
         const that = this;
         while(len--){
             const style = styles[len];
             this.load(style.url,style.width,style.height,style.minThreshold,len === 0 ? ()=>(that.ready = true) : null);
         }
    }
    /**
     * returns icon config object according to longdo Marker icon syntax
     * @param {number} index index number to get icon style
     * @returns {Object} icon config values object 
     * @memberof IconLoader
     */
    getIcon(index){
        const result = {"offset": { "x": 0, "y": 0}};
        if(this.useDefault || typeof index === 'undefined'){
            const elm = document.createElement("div");
            const elm2 = document.createElement('div');
            const elm3 = document.createElement('span');
            elm.appendChild(elm2);
            elm2.appendChild(elm3);
            elm.style.width = '44px';
            elm.style.height = '44px';
            elm.style.marginLeft = '-22px';
            elm.style.marginTop = '-22px';
            elm.style.overflow = 'hidden';
            elm.style.color = `${this._config.textColor}`
            elm.className = 'marker-cluster marker-cluster-small leaflet-marker-icon';
            if (this._config.customOuterClusterCSS) {
                for (const key in this._config.customOuterClusterCSS) {
                    if (Object.hasOwnProperty.call(this._config.customOuterClusterCSS, key)) {
                        const styleOuterClusterObj = this._config.customOuterClusterCSS[key];
                        elm.style[key] = styleOuterClusterObj
                    }
                }
            }
            if (this._config.customInnerClusterCSS) {
                for (const key in this._config.customInnerClusterCSS) {
                    if (Object.hasOwnProperty.call(this._config.customInnerClusterCSS, key)) {
                        const styleInnerClusterObj = this._config.customInnerClusterCSS[key];
                        elm2.style[key] = styleInnerClusterObj
                    }
                }
            }
            if (this._config.customTextClusterCSS) {
                for (const key in this._config.customTextClusterCSS) {
                    if (Object.hasOwnProperty.call(this._config.customTextClusterCSS, key)) {
                        const styleTextObj = this._config.customTextClusterCSS[key];
                        elm3.style[key] = styleTextObj
                    }
                }
            }
            result.html = elm.outerHTML;
            result.size = {"width":44,"height":44};
        }else{
            const img = [...this._images.keys()][index];
            const elm = document.createElement("div");
            elm.style.width = `${img.width}px`;
            elm.style.height = `${img.height}px`;
            elm.style.marginLeft = `-${img.width/2}px`;
            elm.style.marginTop = `-${img.height/2}px`;
            elm.style.background = `url('${encodeURI(img.src)}') no-repeat center top`;
            elm.style.lineHeight = elm.style.height;
            elm.style.color = `${this._config.textColor}`;
            elm.style.fontWeight = 'bold';
            elm.style.textAlign = 'center';
            if (this._config.customTextClusterCSS) {
                for (const key in this._config.customTextClusterCSS) {
                    if (Object.hasOwnProperty.call(this._config.customTextClusterCSS, key)) {
                        const styleTextObj = this._config.customTextClusterCSS[key];
                        elm.style[key] = styleTextObj
                    }
                }
            }
            result.html = elm.outerHTML;
            result.size = {"width":img.width,"height":img.height};
        }
        return result;
    }
    /**
     * change displaying number in cluster
     * @param {HTMLElement} element element of cluster needing to be made changes
     * @param {number} num number to change to 
     * @memberof IconLoader
     * @returns {undefined}
     */
    changeNumber(element,num){
        if(this.useDefault){
            element.children[0].children[0].children[0].innerText = `${num.toLocaleString()}`;
            if(num < 10){
                element.children[0].className = 'marker-cluster marker-cluster-small';
            }else if(num < 100){
                element.children[0].className = 'marker-cluster marker-cluster-medium';
            }else{
                element.children[0].className = 'marker-cluster marker-cluster-large';
            }
        }else{
            element.children[0].innerText = `${num.toLocaleString()}`;
            const list = [...this._images.keys()];
            let len = list.length;
            while(len--){
                const img = list[len];
                if(num >= this._images.get(img).minThreshold){
                    let elm = element;
                    elm.style.width = `${img.width}px`;
                    elm.style.height = `${img.height}px`;
                    elm = elm.children[0];
                    elm.style.background = `url('${encodeURI(img.src)}') no-repeat center top`;
                    elm.style.width = `${img.width}px`;
                    elm.style.height = `${img.height}px`;
                    elm.style.lineHeight = elm.style.height;
                    break;
                }
            }
        }
    }
}
