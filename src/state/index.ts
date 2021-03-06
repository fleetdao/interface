import { configureStore } from '@reduxjs/toolkit'

import application from './application/reducer'
import user from './user/reducer'

import { updateVersion } from './user/actions'

// const PERSISTED_KEYS: string[] = ['user', 'wallet']

const store = configureStore({
  reducer: {
    application,
    user,
  },
  // middleware: [...getDefaultMiddleware(), save({ states: PERSISTED_KEYS })],
  // preloadedState: load({ states: PERSISTED_KEYS })
})

store.dispatch(updateVersion())

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
