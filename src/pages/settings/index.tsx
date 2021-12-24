import { useRouter } from 'next/router'
import PageLayout from '../../layouts/Page'

const Settings = () => {
  const router = useRouter()

  const handleBack = () => router.push('/home')

  return (
    <PageLayout onBack={handleBack} title="设置管理">
      <h1></h1>
    </PageLayout>
  )
}

export default Settings
