import { createReducer } from '@reduxjs/toolkit'
import {
  updateAuthenticated,
  updateMatchesDarkMode,
  updateUserDarkMode,
} from './actions'

const currentTimestamp = () => new Date().getTime()

export interface UserState {
  authenticated: boolean
  userDarkMode: boolean | null // the user's choice for dark mode or light mode
  matchesDarkMode: boolean // whether the dark mode media query matches

  timestamp: number
}

export const initialState: UserState = {
  authenticated: false,
  userDarkMode: null,
  matchesDarkMode: false,
  timestamp: currentTimestamp()
}

export default createReducer(initialState, builder =>
  builder
    .addCase(updateAuthenticated, (state, action) => {
      state.authenticated = action.payload.authenticated
    })
    .addCase(updateUserDarkMode, (state, action) => {
      state.userDarkMode = action.payload.userDarkMode
      state.timestamp = currentTimestamp()
    })
    .addCase(updateMatchesDarkMode, (state, action) => {
      state.matchesDarkMode = action.payload.matchesDarkMode
      state.timestamp = currentTimestamp()
    })
)
