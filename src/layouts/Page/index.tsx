import React from 'react'
import styled from 'styled-components'
import Loader from '../../components/Loader'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Column from '../../components/Column'

const BaseContainer = styled.div`
  position: relative;
  display: flex;
  flex: auto;
  flex-direction: column;
  padding: 3.75rem 0 2rem;
  min-height: 100vh;
`

const MainContainer = styled.main`
  display: flex;
  flex: auto;
  min-width: 0%;
`

const ContentContainer = styled(Column)`
  position: relative;
  align-items: center;
  justify-content: center;
  margin: 1.25rem auto;
  padding: 1.25rem;
  width: 100%;
  max-width: 1240px;
  background-color: ${({ theme }) => theme.bg2};
  border-radius: .75rem;
  overflow: hidden;
`


interface BaseLayoutProps {
  children: React.ReactChild
}

const BaseLayout = ({ children }: BaseLayoutProps) => {

  return (
    <BaseContainer>
      <Header />
      <MainContainer>
        <ContentContainer>
          {children}
        </ContentContainer>
      </MainContainer>
      <Footer />
    </BaseContainer>
  )
}

export default BaseLayout