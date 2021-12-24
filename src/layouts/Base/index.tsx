import Head from 'next/head'

interface BaseLayoutProps {
  children: React.ReactChild
}

const Layout = ({children }: BaseLayoutProps) => (
  <>
    <Head>
      <title>FleetDAO</title>
    </Head>
    {children}
  </>
)

export default Layout
