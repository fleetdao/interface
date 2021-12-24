import { useRouter } from 'next/router'
import PageLayout from '../../layouts/Page'

const Settings = () => {
  const router = useRouter()

  const handleBack = () => router.push('/home')

  return (
    <PageLayout>
      <h1>Settings</h1>
    </PageLayout>
  )
}

export default Settings
