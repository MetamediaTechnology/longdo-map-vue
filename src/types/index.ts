export * from "./map";

// Base types
export interface Location {
  lat: number
  lon: number
}

// Component props
export interface MapProps {
  options?: Record<string, any>
}

export interface MarkerProps {
  location: Location
  options?: Record<string, any>
}

export interface GeometryProps {
  location: Location | (Location | null)[]
  options?: Record<string, any>
}

export interface CircleProps extends GeometryProps {
  radius: number
}

export interface RectangleProps extends GeometryProps {
  size: { width: number; height: number } | Location
}

// Plugin types
export interface LongdoMapVueOptions {
  apiKey?: string | null
  src?: string | null
  debug?: boolean
  loaded?: ((longdo: any) => void) | null
}

// Global declarations
declare global {
  interface Window {
    longdo: any
  }
}
