/**
 * class for carrying config/option values
 * @export ConfigHandler
 * @class ConfigHandler
 */
export default class {
    constructor(options){
        this.maxZoom = options.maxZoom || null;
        this.minClusterSize = options.minClusterSize || 2;
        this.textColor = options.textColor || 'black';
        this.customOuterClusterCSS = options.customOuterClusterCSS || {};
        this.customInnerClusterCSS = options.customInnerClusterCSS || {};
        this.customTextClusterCSS = options.customTextClusterCSS || {};
        this.gridSize = options.gridSize || 120;
        this.clusterRadius = options.clusterRadius || this.gridSize;
        this.averageCenter = options.averageCenter;
        this.drawMarkerArea = options.drawMarkerArea;
        this.swarmModeEnabled = options.swarmModeEnabled;
        this.swarmAlg = options.swarmAlg ? parseInt(options.swarmAlg,10) : null;
        this.styles = options.styles || null;
        this.swarmGridLength = options.swarmGridLength ? parseInt(options.swarmGridLength,10) : null;
        this.swarmMarkersMaxLimit = options.swarmMarkersMaxLimit ? parseInt(options.swarmMarkersMaxLimit,10) : null;
        this.swarmMarkersAmountAdjust = options.swarmMarkersAmountAdjust;
        this.swarmMarkersMaxAmountPerTile = options.swarmMarkersMaxAmountPerTile ? parseInt(options.swarmMarkersMaxAmountPerTile,10) : null;
        this.swarmMarkersConstPerGrid = options.swarmMarkersConstPerGrid ? parseInt(options.swarmMarkersConstPerGrid,10) : null;
    }
}