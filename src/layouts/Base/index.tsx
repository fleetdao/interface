import React from 'react'
import styled from 'styled-components'
import Loader from '../../components/Loader'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Column from '../../components/Column'

const MainContainer = styled.main`
  position: relative;
  display: flex;
  flex: auto;
  flex-direction: column;
  padding: 3.75rem 0 2rem;
  min-height: calc(100vh - 3.75rem - 2rem);
`

const ContentContainer = styled.section`
  display: flex;
  flex: auto;
  min-width: 0%;
`

const CardContainer = styled(Column)`
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


interface BaseProps {
  children: React.ReactChild
}

const BaseLayout = ({ children }: BaseProps) => {

  return (
    <MainContainer>
      <Header />
      <ContentContainer>
        <CardContainer>
          {children}
        </CardContainer>
      </ContentContainer>
      <Footer />
    </MainContainer>
  )
}

export default BaseLayout