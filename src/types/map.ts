import { EventName, LocationMode } from "./event";

/**
 * @interface Map
 * @description
 * Interface for interacting with the Longdo Map instance.
 * Provides methods and properties for controlling map view, overlays, events, layers, tags, UI, language, and more.
 */
export interface Map {
  /**
   * @property zoom
   * @description
   * Zooms the map to a specified level or zooms in/out based on the boolean value.
   * If zoomLevel is a number, it sets the zoom level directly.
   * If zoomLevel is true, it zooms in by one level.
   * If zoomLevel is false, it zooms out by one level.
   * If zoomLevel is not provided, it defaults to zooming in by one level.
   * @param zoomLevel - The zoom level to set, or a boolean indicating zoom in/out.
   * @param zoomIn - A boolean indicating whether to zoom in (true) or out (false).
   * If zoomLevel is not provided, it defaults to zooming in.
   * @example
   * ```ts
   * map.zoom(5);
   * map.zoom(true,true); // Zooms in by one level
   * map.zoom(false,true); // Zooms out by one level
   * ```
   * @returns {void|number} Returns the current zoom level if called without arguments, otherwise void.
   */
  zoom: (zoomLevel?: number | boolean, zoomIn?: boolean) => void | number;

  /**
   * @property zoomRange
   * @description
   * Sets or gets the zoom range of the map.
   * If called with an argument, sets the min and max zoom levels.
   * If called without arguments, returns the current zoom range.
   * @param range - An object with min and max zoom levels.
   * @returns {void|{ min: number; max: number }} Returns the current zoom range if called without arguments, otherwise void.
   */
  zoomRange: (range?: {
    min: number;
    max: number;
  }) => void | { min: number; max: number };

  /**
   * @property location
   * @description
   * Sets or gets the map's location.
   * If called with a location, sets the map's location to the specified longitude and latitude.
   * If animate is `true`, it animates the transition to the new location.
   * If animate is `false` or not provided, it sets the location immediately without animation.
   * If called without arguments, returns the current location.
   * @param location - An object containing longitude (lon) and latitude (lat), or a LocationMode.
   * @param animate - A boolean indicating whether to animate the transition.
   * @returns {void|{ lon: number; lat: number }} Returns the current location if called without arguments, otherwise void.
   */
  location: (
    location?: { lon: number; lat: number } | LocationMode,
    animate?: boolean
  ) => void | { lon: number; lat: number };

  /**
   * @property bound
   * @description
   * Sets or gets the map's bounding box.
   * If called with a bounds object, sets the map's visible area to the specified bounds.
   * If called without arguments, returns the current bounds.
   * @param bounds - An object containing minLon, minLat, maxLon, and maxLat.
   * @returns {void|{ minLon: number; minLat: number; maxLon: number; maxLat: number }} Returns the current bounds if called without arguments, otherwise void.
   * @example
   * ```ts
   * map.bound({
   *   minLon: 100, minLat: 13,
   *   maxLon: 101, maxLat: 14
   * });
   * ```
   */
  bound: (bounds?: {
    minLon: number;
    minLat: number;
    maxLon: number;
    maxLat: number;
  }) => void | {
    minLon: number;
    minLat: number;
    maxLon: number;
    maxLat: number;
  };

  /**
   * @property resize
   * @description
   * Resizes the map to fit the current container size.
   * This method is useful when the map's container size changes, such as during window resizing.
   * It recalculates the map's dimensions and updates the view accordingly.
   * @example
   * ```ts
   * map.resize();
   * ```
   */
  resize: () => void;

  /**
   * @property Route
   * @description
   * Provides methods to manage routes on the map.
   * - `add(route: any)`: Adds a route to the map.
   * - `remove(route: any)`: Removes a route from the map.
   * - `clear()`: Clears all routes from the map.
   * @example
   * ```ts
   * map.Route.add(route);
   * map.Route.remove(route);
   * map.Route.clear();
   * ```
   */
  Route: {
    /**
     * @property add
     * @description Adds a route to the map.
     * @param route - The route object to add.
     */
    add: (route: any) => void;

    /**
     * @property remove
     * @description Removes a route from the map.
     * @param route - The route object to remove.
     */
    remove: (route: any) => void;

    /**
     * @property clear
     * @description Clears all routes from the map.
     */
    clear: () => void;

    /**
     *
     * @property mode
     * @description
     * Sets or gets the route mode.
     * If called with a mode, sets the route mode to the specified value.
     * If called without arguments, returns the current route mode.
     * @param mode - The route mode to set (e.g., "car", "walk", etc.).
     * @returns {void|string} Returns the current route mode if called without arguments, otherwise void.
     * @example
     * ```ts
     * map.Route.mode("car");
     * ```
     */
    mode: (mode?: string) => void | string;

    /**
     * @property list
     * @description
     * Lists all routes currently on the map.
     * @returns {any[]} An array of route objects currently on the map.
     */
    list: () => any[];

    /**
     * @property size
     * @description
     * Returns the number of routes currently on the map.
     * @returns {number} The number of routes.
     */
    size: () => number;

    /**
     * 
     * @property distance
     * @description
     * Calculates the total distance of all routes currently on the map.
     * @returns {number} The total distance in meters.
     * @example
     * ```ts
     * const totalDistance = map.Route.distance();
     * ```  
     */
    distance: () => number;

    /**
     * @property search
     * @description Performs a search operation related to routes on the map.
     * This method can be used to find routes based on specific criteria or parameters.
     * Before using this method, ensure added Map.Route.add(route) two points.
     * @example
     * ```ts
     * map.Route.search();
     * ```
     */
    search: () => void;
  };

  /**
   * @property Rotate
   * @description
   * Provides methods to manage the map's rotation.
   * - `rotate(angle: number, animate?: boolean)`: Rotates the map to the specified angle.
   * @example
   * ```ts
   * map.rotate(45, true);
   * ```
   */
  rotate: (angle: number, animate?: boolean) => void;

  /**
   * @property Pitch
   * @description
   * Provides methods to manage the map's pitch.
   * - `pitch(angle: number, animate?: boolean)`: Sets the map's pitch to the specified angle.
   * @example
   * ```ts
   * map.pitch(30, true);
   * ```
   */
  pitch: (angle: number, animate?: boolean) => void;

  /**
   *
   * @property Search
   * @description
   * Provides methods to perform search operations on the map.
   * @example
   * ```ts
   * map.Search();
   */
  Search: () => void;

  /**
   * @property Overlays
   * @description
   * Provides methods to manage overlays on the map.
   * - `add(overlay: any)`: Adds an overlay to the map.
   * - `remove(overlay: any)`: Removes an overlay from the map.
   * - `clear()`: Clears all overlays from the map.
   * @example
   * ```ts
   * map.Overlays.add(marker);
   * map.Overlays.remove(marker);
   * map.Overlays.clear();
   * ```
   */
  Overlays: {
    /**
     * @property add
     * @description Adds an overlay to the map.
     * @param overlay - The overlay object to add.
     */
    add: (overlay: any) => void;

    /**
     * @property remove
     * @description Removes an overlay from the map.
     * @param overlay - The overlay object to remove.
     */
    remove: (overlay: any) => void;

    /**
     * @property load
     * @description Loads predefined overlays and adds them to the map.
     * @param mode - Predefined overlays mode.
     */
    load: (mode: any) => void;

    /**
     * @property unload
     * @description Removes predefined overlays from the map.
     * @param mode - Predefined overlays mode.
     */
    unload: (mode: any) => void;

    /**
     * @property clear
     * @description Removes all overlays from the map.
     */
    clear: () => void;

    /**
     * @property list
     * @description Lists all overlays on the map.
     * @returns {any[]} List of overlays.
     */
    list: () => any[];

    /**
     * @property size
     * @description Returns the number of overlays on the map.
     * @returns {number} Size.
     */
    size: () => number;

    /**
     * @property drop
     * @description Adds a marker to the map with drop animation.
     * @param overlay - Marker overlay.
     */
    drop: (overlay: any) => void;

    /**
     * @property bounce
     * @description Shows bounce animation of a marker.
     * @param overlay - Marker overlay.
     */
    bounce: (overlay: any) => void;

    /**
     * @property lastOpenPopup
     * @description Gets the last open popup.
     * @returns {any} Last open popup.
     */
    lastOpenPopup: () => any;

    /**
     * @property pathAnimation
     * @description Moves marker along the line.
     * @param marker - The marker to move.
     * @param path - Motion path (Polyline).
     * @param speed - Speed (optional, default: 2^-zoom).
     */
    pathAnimation: (marker: any, path: any, speed?: number) => void;
  };

  /**
   * @property Event
   * @description
   * Provides methods to bind events to the map.
   * - `bind(eventName: EventName | string, callback: (event: any) => void)`: Binds an event to the map.
   * The `eventName` can be a predefined event name or a custom string.
   * The `callback` function is called when the event occurs.
   * @example
   * ```ts
   * map.Event.bind(EventName.Click, (event) => {
   *   console.log('Map clicked at:', event.location);
   * });
   * ```
   */
  Event: {
    /**
     * @property bind
     * @description Binds an event to the map.
     * @param eventName - The event name to bind.
     * @param callback - The callback function to execute when the event occurs.
     */
    bind: (
      eventName: EventName | string,
      callback: (event: any) => void
    ) => void;
  };

  /**
   * @property Layers
   * @description
   * Provides methods to manage map layers.
   * - `setBase(layer: string)`: Sets the base layer of the map.
   * - `add(layer: string)`: Adds a layer to the map.
   * - `remove(layer: string)`: Removes a layer from the map.
   * @example
   * ```ts
   * map.Layers.setBase('baseLayerName');
   * map.Layers.add('additionalLayerName');
   * map.Layers.remove('layerToRemove');
   * ```
   */
  Layers: {
    /**
     * @property setBase
     * @description Sets the base layer of the map.
     * @param layer - The name of the base layer.
     */
    setBase: (layer: string | object | any) => void;
    /**
     * @property add
     * @description Adds a layer to the map.
     * @param layer - The name of the layer to add.
     */
    add: (layer: string | object | any) => void;
    /**
     *
     * @property insert
     * @description Inserts a layer at a specific index in the map's layer stack.
     * @param layer - The name of the layer to insert.
     * @param index - The index at which to insert the layer.
     * @example
     * ```ts
     * map.Layers.insert(1,layer1); // Inserts 'layerName' at index 2
     *
     */
    insert: (index: number, layer: string | object | any) => void;
    /**
     * @property remove
     * @description Removes a layer from the map.
     * @param layer - The name of the layer to remove.
     */
    remove: (layer: string | object | any) => void;
    /**
     * @property clear
     * @description Clears all layers from the map. Clear layer is not effective for a base layer.
     * This method removes all layers, including the base layer.
     */
    clear: () => void;
  };

  /**
   * @property Tags
   * @description
   * Provides methods to manage tags on the map.
   * - `add(tagName: string)`: Adds a tag to the map.
   * - `remove(tagName: string)`: Removes a tag from the map.
   * @example
   * ```ts
   * map.Tags.add('hotel');
   * map.Tags.remove('hotel');
   * ```
   */
  Tags: {
    /**
     * @function add
     * @description Adds a tag to the map.
     * @param tagName - The name of the tag to add.
     */
    add: (tagName: string) => void;
    /**
     * @function remove
     * @description Removes a tag from the map.
     * @param tagName - The name of the tag to remove.
     */
    remove: (tagName: string) => void;
  };

  /**
   * @property Ui
   * @description
   * Provides methods to control the visibility of various UI components on the map.
   */
  Ui: {
    /**
     * @property DPad
     * @description
     * Controls the visibility of the DPad on the map.
     * - `visible(show: boolean)`: Shows or hides the DPad.
     * @example
     * ```ts
     * map.Ui.DPad.visible(true); // Show DPad
     * map.Ui.DPad.visible(false); // Hide DPad
     * ```
     */
    DPad: {
      /**
       * @function visible
       * @description Shows or hides the DPad.
       * @param show - Whether to show (true) or hide (false) the DPad.
       */
      visible: (show: boolean) => void;
    };
    /**
     * @property Zoombar
     * @description
     * Controls the visibility of the Zoombar on the map.
     * - `visible(show: boolean)`: Shows or hides the Zoombar.
     * @example
     * ```ts
     * map.Ui.Zoombar.visible(true); // Show Zoombar
     * map.Ui.Zoombar.visible(false); // Hide Zoombar
     * ```
     */
    Zoombar: {
      /**
       * @function visible
       * @description Shows or hides the Zoombar.
       * @param show - Whether to show (true) or hide (false) the Zoombar.
       */
      visible: (show: boolean) => void;
    };
    /**
     * @property Geolocation
     * @description
     * Controls the visibility of the Geolocation button on the map.
     * - `visible(show: boolean)`: Shows or hides the Geolocation button.
     * @example
     * ```ts
     * map.Ui.Geolocation.visible(true); // Show Geolocation button
     * map.Ui.Geolocation.visible(false); // Hide Geolocation button
     * ```
     */
    Geolocation: {
      /**
       * @function visible
       * @description Shows or hides the Geolocation button.
       * @param show - Whether to show (true) or hide (false) the Geolocation button.
       */
      visible: (show: boolean) => void;
    };
    /**
     * @property Terrain
     * @description
     * Controls the visibility of the Terrain layer on the map.
     * - `visible(show: boolean)`: Shows or hides the Terrain layer.
     * @example
     * ```ts
     * map.Ui.Terrain.visible(true); // Show Terrain layer
     * map.Ui.Terrain.visible(false); // Hide Terrain layer
     * ```
     */
    Terrain: {
      /**
       * @function visible
       * @description Shows or hides the Terrain layer.
       * @param show - Whether to show (true) or hide (false) the Terrain layer.
       */
      visible: (show: boolean) => void;
    };
    /**
     * @property LayerSelector
     * @description Controls the visibility of the Layer Selector UI.
     */
    LayerSelector: {
      /**
       * @function visible
       * @description Shows or hides the Layer Selector.
       * @param show - Whether to show (true) or hide (false) the Layer Selector.
       */
      visible: (show: boolean) => void;
    };
    /**
     * @property Crosshair
     * @description Controls the visibility of the Crosshair UI.
     */
    Crosshair: {
      /**
       * @function visible
       * @description Shows or hides the Crosshair.
       * @param show - Whether to show (true) or hide (false) the Crosshair.
       */
      visible: (show: boolean) => void;
    };
    /**
     * @property Scale
     * @description Controls the visibility of the Scale UI.
     */
    Scale: {
      /**
       * @function visible
       * @description Shows or hides the Scale.
       * @param show - Whether to show (true) or hide (false) the Scale.
       */
      visible: (show: boolean) => void;
    };
    /**
     * @property ContextMenu
     * @description Controls the visibility of the Context Menu UI.
     */
    ContextMenu: {
      /**
       * @function visible
       * @description Shows or hides the Context Menu.
       * @param show - Whether to show (true) or hide (false) the Context Menu.
       */
      visible: (show: boolean) => void;
    };
    /**
     * @property FullScreen
     * @description Controls the visibility of the FullScreen UI.
     */
    FullScreen: {
      /**
       * @function visible
       * @description Shows or hides the FullScreen UI.
       * @param show - Whether to show (true) or hide (false) the FullScreen UI.
       */
      visible: (show: boolean) => void;
    };
  };

  /**
   * @function language
   * @description
   * Gets or sets the map's language.
   * - `language()`: Returns the current language code as a string.
   * - `language(lang: string)`: Sets the map's language to the specified code.
   * @param lang - The language code to set (optional).
   * @returns {void|string} Returns the current language code if called without arguments, otherwise void.
   * @example
   * ```ts
   * map.language(); // get current language
   * map.language("en"); // set language to English
   * ```
   */
  language: (lang?: string) => void | string;

  /**
   * @property lastview
   * @description
   * Indicates whether the map is in the last view state.
   * If `true`, it means the map is displaying the last viewed location and zoom level.
   * If `false`, it means the map is not in the last view state.
   * @default false
   */
  lastview?: boolean;

  /**
   * @property Renderer
   * @description
   * Provides access to the map's renderer for advanced customizations.
   */
  Renderer?: {
    [key: string]: any;
  };
}