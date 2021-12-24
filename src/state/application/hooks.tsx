import { useSelector } from 'react-redux'
import { AppState } from '../index'
import { SupportedLanguage, StorageLanguageKey } from '../../constants/application'

export const useLoading = (): boolean => {
  return useSelector((state: AppState) => state.application.loading || false)
}

export const useCurrentLanguage = (): SupportedLanguage => {
  return useSelector((state: AppState) => state.application.language || localStorage.getItem(StorageLanguageKey) as SupportedLanguage)
}
