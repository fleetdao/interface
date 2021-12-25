import React from 'react'
import { ArrowLeft } from 'react-feather'
import styled from 'styled-components'
import BaseLayout from '../Base'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Column from '../../components/Column'

const BaseContainer = styled.div`
  position: relative;
  display: flex;
  flex: auto;
  flex-direction: column;
  padding: 3.75rem 0 0;
  min-height: 100vh;
`

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
`

interface HomeLayoutProps {
  title?: React.ReactNode | string
  children: React.ReactChild
  home?: boolean
  onBack?: () => void
}

const HomeLayout = ({ title, children, home, onBack }: HomeLayoutProps) => {
  return (
    <BaseContainer>
      <Header />
      {children}
    </BaseContainer>
  )
}

export default HomeLayout