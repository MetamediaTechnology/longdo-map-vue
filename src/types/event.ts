export enum EventName {
    BeforeContextmenu = "beforeContextmenu",
    BeforeTagPopup = "beforeTagPopup",
    Click = "click",
    ConnectionError = "connectionError",
    Contextmenu = "contextmenu",
    DoubleClick = "doubleClick",
    Drag = "drag",
    DrawCreate = "drawCreate",
    DrawDelete = "drawDelete",
    Drop = "drop",
    Fullscreen = "fullscreen",
    Geolocation = "geolocation",
    GeolocationError = "geolocationError",
    GuideComplete = "guideComplete",
    GuideError = "guideError",
    Idle = "idle",
    LayerChange = "layerChange",
    Location = "location",
    Mousemove = "mousemove",
    OverlayChange = "overlayChange",
    OverlayClick = "overlayClick",
    OverlayDrag = "overlayDrag",
    OverlayDrop = "overlayDrop",
    OverlayHover = "overlayHover",
    OverlayLeave = "overlayLeave",
    OverlayLoad = "overlayLoad",
    OverlayUpdate = "overlayUpdate",
    PathAnimationEnd = "pathAnimationEnd",
    Pitch = "pitch",
    PopupClose = "popupClose",
    Ready = "ready",
    Repaint = "repaint",
    Resize = "resize",
    Rotate = "rotate",
    ToolbarChange = "toolbarChange",
    TooltipChange = "tooltipChange",
    Wheel = "wheel",
    Zoom = "zoom",
    ZoomRange = "zoomRange",
    loadTile = "loadTile",
}

export enum LocationMode {
    Pointer = "POINTER",
    Geolocation = "GEOLOCATION",
}

export interface GeoJSONGeometry {
    type: "Point" | "LineString" | "Polygon" | "MultiPoint" | "MultiLineString" | "MultiPolygon" | "GeometryCollection";
    coordinates: any;
}

export interface GeoJSONFeature {
    type: "Feature";
    geometry: GeoJSONGeometry;
    properties: {
        clickable?: boolean;
        detail?: string;
        draggable?: boolean;
        icon?: {
            url: string;
            width: number;
            height: number;
            offset: [number, number];
        };
        title?: string;
        visibleMax?: number;
        visibleMin?: number;
        visibleRange?: number;
        [key: string]: any;
    };
    object?: any;
    [key: string]: any;
}

export interface OverlaysClickEvent { 
    _geojson: GeoJSONFeature;
}