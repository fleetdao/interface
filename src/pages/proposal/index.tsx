import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import PageLayout from '../../layouts/Page'

export const getStaticProps = async ({ locale }: { locale: any }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

const ProposalPage = () => {
  const { t } = useTranslation('common')

  return (
    <PageLayout>
      <h1>{t('navbar.proposal')}</h1>
    </PageLayout>
  )
}

export default ProposalPage
