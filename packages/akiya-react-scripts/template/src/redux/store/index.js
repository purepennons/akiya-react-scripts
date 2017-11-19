import devStore from './configureStore.dev.js'
import prodStore from './configureStore.prod.js'

let store = null

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
  store = prodStore
} else {
  store = devStore
}

export default store
