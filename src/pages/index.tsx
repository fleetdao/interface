import { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import BaseLayout from '../layouts/Base'

export const getStaticProps = async ({ locale }: { locale: any }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

const HomePage = () => {
  const { t } = useTranslation('common')
  
  return (
    <BaseLayout>
      <h1>{t('navbar.home')}</h1>
    </BaseLayout>
  )
}

export default HomePage 
