import { createAction } from '@reduxjs/toolkit'
import { SupportedLanguage } from '../../constants/application'

export const updateToggleLanguage = createAction<SupportedLanguage>('updateToggleLanguage')


