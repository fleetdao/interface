import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { SupportedLanguage } from '../../constants/application'
import { AppDispatch } from '../index'
import { updateToggleLanguage } from './actions'
import { useCurrentLanguage } from './hooks'

const Updater = (): null => {
  const dispatch = useDispatch<AppDispatch>()
  const currentLanguage = useCurrentLanguage()

  useEffect(() => {
    dispatch(updateToggleLanguage(currentLanguage ? currentLanguage : SupportedLanguage.EN))
  }, [dispatch, currentLanguage])

  return null
}

export default Updater
