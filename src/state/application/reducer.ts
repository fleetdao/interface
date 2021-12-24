import { createReducer } from '@reduxjs/toolkit'
import { updateToggleLanguage } from './actions'
import { SupportedLanguage, StorageLanguageKey } from '../../constants/application'

export interface ApplicationState {
  language: SupportedLanguage
  loading: boolean
}

export const initialState: ApplicationState = {
  language: typeof window !== 'undefined' ? localStorage.getItem(StorageLanguageKey) as SupportedLanguage : SupportedLanguage.EN,
  loading: false,
}

export default createReducer(initialState, builder =>
  builder
    .addCase(updateToggleLanguage, (state, { payload }) => {
      state.language = payload
    })
)
