import { GetStaticProps } from 'next'
import { useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import PageLayout from '../layouts/Page'

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

const HomePage = () => {
  const { t } = useTranslation('common')
  
  return (
    <PageLayout>
      <h1>{t('navbar.home')}</h1>
    </PageLayout>
  )
}

export default HomePage 
