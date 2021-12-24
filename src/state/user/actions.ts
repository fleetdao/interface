import { createAction } from '@reduxjs/toolkit'

export const updateVersion = createAction<void>('updateVersion')
export const updateAuthenticated = createAction<{ authenticated: boolean }>('updateAuthenticated')
export const updateMatchesDarkMode = createAction<{ matchesDarkMode: boolean }>('updateMatchesDarkMode')
export const updateUserDarkMode = createAction<{ userDarkMode: boolean }>('updateUserDarkMode')
