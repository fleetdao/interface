import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Client } from '@notionhq/client'
import BaseLayout from '../../layouts/Base'
import { DatabaseID } from '../../constants/project'

const notion = new Client({ auth: process.env.NOTION_AUTH_SECRET })

export const getStaticProps = async ({ locale }: { locale: any }) => {

  const databaseId = DatabaseID.PROJECT
  const recordMap = await notion.databases.query({
    database_id: databaseId,
    sorts: [
      {
        property: 'Last edited at',
        direction: 'descending',
      }
    ]
  })

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
  return (
    <BaseLayout>
      <div>
        <h1>Projects</h1>
        <ul>
          {recordMap && recordMap.results.map((item: any, i: number) => {
            if (item.properties.Name.title[0]) {
              return <li key={i}>
                <a href={item.url} target="_blank">
                  {item.properties.Name.title[0].text.content}
                </a>
              </li>
            }
          })}
        </ul>
      </div>
    </BaseLayout>
  )
}

export default ProjectPage
