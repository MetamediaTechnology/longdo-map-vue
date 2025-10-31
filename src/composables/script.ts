import { ref, readonly } from 'vue'
import type { LongdoMapVueOptions } from '../types'

const LONGDO_MAP_SRC = 'https://api.longdo.com/map3/'

type LongdoMapScriptStatus = 'pending' | 'success' | 'error'

// Global state
const status = ref<LongdoMapScriptStatus>('pending')
let scriptPromise: Promise<any> | null = null

export function useLongdoMap(options: LongdoMapVueOptions = {}) {
  const { apiKey = null, src = null, debug = false, loaded = null } = options

  const loadScript = (): Promise<any> => {
    // Return existing promise if already loading or loaded
    if (scriptPromise) {
      return scriptPromise
    }

    // Check if running in browser
    if (typeof window === 'undefined') {
      return Promise.reject(new Error('Longdo Map Vue: Window is not available'))
    }

    // Return existing instance if already loaded
    if (window.longdo) {
      status.value = 'success'
      return Promise.resolve(window.longdo)
    }

    const url = src || LONGDO_MAP_SRC
    const params: Record<string, string | boolean> = {}

    if (apiKey) {
      params.key = apiKey
    }
    if (debug) {
      params.debug = true
    }

    const query = new URLSearchParams(params as Record<string, string>)
    const scriptUrl = query.toString() ? `${url}?${query}` : url

    scriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script')

      script.onload = () => {
        status.value = 'success'

        if (loaded && typeof loaded === 'function') {
          loaded(window.longdo)
        }

        resolve(window.longdo)
      }

      script.onerror = (error) => {
        status.value = 'error'
        console.error('Longdo Map Vue: Failed to load script', error)
        reject(new Error('Failed to load Longdo Map script'))
      }

      script.async = true
      script.src = scriptUrl
      document.body.appendChild(script)
    })

    return scriptPromise
  }

  // Automatically load script when composable is used
  const getLongdo = loadScript()

  return {
    getLongdo,
    status: readonly(status),
  }
}