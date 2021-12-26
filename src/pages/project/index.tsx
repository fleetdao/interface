import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Client } from '@notionhq/client'
import PageLayout from '../../layouts/Page'
import { DatabaseID } from '../../constants/project'
import List from '../../components/Project/List'
import recordMap from '../../../mock/database.json'


const notion = new Client({ auth: process.env.NOTION_AUTH_SECRET })

export const getStaticProps = async ({ locale }: { locale: any }) => {

  // const databaseId = DatabaseID.PROJECT
  // const recordMap = await notion.databases.query({
  //   database_id: databaseId,
  //   sorts: [
  //     {
  //       property: 'Last edited at',
  //       direction: 'descending',
  //     }
  //   ]
  // })

  return {
    props: {
      recordMap,
      ...await serverSideTranslations(locale, ['common']),
    },
    revalidate: 10
  }
}

const ProjectPage = ({ recordMap }: any) => {
  const { t } = useTranslation('common')

  if (!recordMap) {
    return null
  }
  console.log('recordMap: ', recordMap)

  return (
    <PageLayout>
      <List dataSource={recordMap.results} />
    </PageLayout>
  )
}

export default ProjectPage
