import React from 'react'
import { ArrowLeft } from 'react-feather'
import BaseLayout from '../Base'
import styled from 'styled-components'

const NavContainer = styled.div`
`

const NavBackButton = styled.a`
  display: inline-flex;
  width: 3rem;
  height: 3rem;
  transition: all .2s ease-in-out;

  &:hover {
    transform: translateX(-4px);
  }
`

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
`

interface PageProps {
  title?: React.ReactNode | string
  children: React.ReactChild
  home?: boolean
  onBack?: () => void
}

const HomeLayout = ({ title, children, home, onBack }: PageProps) => {
  return (
    <BaseLayout>
      <>
        <NavContainer>
          {!home && (
            <NavBackButton onClick={onBack}>
              <ArrowLeft size={40} />
            </NavBackButton>
          )}
        </NavContainer>
        {title && (
          <TitleContainer>
            {title}
          </TitleContainer>
        )}
        {children}
      </>
    </BaseLayout>
  )
}

export default HomeLayout