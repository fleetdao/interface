import React from 'react'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { Globe, Moon, Sun } from 'react-feather'
import { useTranslation } from 'next-i18next'
import { useDarkModeManager } from '../../state/user/hooks'
import { updateToggleLanguage } from '../../state/application/actions'
import { useCurrentLanguage } from '../../state/application/hooks'
import { SupportedLanguage } from '../../constants/application'

import styled from 'styled-components'
import { ButtonOutlined, ButtonLight } from '../Button'
import Column from '../Column'
import Row from '../Row'
import logoLight from '../../assets/images/logo-light.svg'
import logoDark from '../../assets/images/logo-dark.svg'

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: ${({ theme }) => theme.headerHeight};
  z-index: 2;
  background-color: ${({ theme }) => theme.bg2};
  box-shadow: rgb(0 0 0 / 5%) 0px 2px 3px;
  transition: .2s all ease-in;

  > a {
    display: flex;
    align-items: center;
    height: 100%;
  }
`
const LogoWrapper = styled.span`
  display: flex;
  margin-left: 1rem;
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.text2};
  text-decoration: none;
  cursor: pointer;
`
const LogoIcon = styled.img`
  height: 2.25rem;
`
const LogoText = styled.span`
  margin-left: .5rem;
  color: ${({ theme }) => theme.text1};
  font-size: 22px;
  font-weight: 500;
`
const Navbar = styled(Row)`
  justify-content: center;
  text-align: center;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    display: none;
  `};
`
const NavLink = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 1.5rem;
  padding: 0 1rem;
  height: 3.75rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.text1};

  &:hover {
    color: ${({ theme }) => theme.primary2};
  }

  &:hover:after {
    background-color: ${({ theme }) => theme.primary2};
  }
`
const Searchbar = styled(Column)``

const MenuContainer = styled(Row)`
  justify-content: flex-end;
  padding: 0 1rem;
`
const WalletConnector = styled.div`
  width: 12rem;
`
const ConnectButton = styled(ButtonOutlined)`
  justify-content: space-between;
  padding: 0.5625rem 1rem;
  width: 12rem;
  font-size: 0.875rem;
  background-color: ${({ theme }) => theme.bg2};
  border-radius: 4px;
  color: ${({ theme }) => theme.text2};

  > svg {
    margin-left: .5rem;
    transition: .2s all ease-in-out;
  }

  ${({ theme }) => theme.mediaWidth.upToSmall`
    background-color: #2F2F99;
    border: 1px solid #747a91;
    color: #fff;
  `};
`
const ConnectStatus = styled.span<{
  state?: 'active' | 'inactive'
}>`
  display: inline-flex;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ theme, state }) => state === 'active' ? theme.green1 : theme.bg5};
`
const ConnectAddress = styled.div``

const LanguageToggle = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 1rem;
  padding: 0.625rem 0;
  min-width: 6rem;
  height: 2.5rem;
  color: ${({ theme }) => theme.text1};

  &:hover {
    color: ${({ theme }) => theme.text2};
  }

  ${({ theme }) => theme.mediaWidth.upToSmall`
    display: none;
  `};
`
const LanguageText = styled.span`
  justify-content: flex-end;
  margin-left: .35rem;
  min-width: 4rem;
  line-height: 100%;
`
const ThemeToggle = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: 1px solid ${({ theme }) => theme.bg5};
  border-radius: 50%;
  color: ${({ theme }) => theme.text1};

  &:hover {
    color: ${({ theme }) => theme.text2};
  }

  ${({ theme }) => theme.mediaWidth.upToSmall`
    display: none;
  `};
`

const HeaderPage = () => {
  const node = useRef<HTMLDivElement>()
  const dispatch = useDispatch()
  const router = useRouter()
  const { t } = useTranslation('common')
  const currentLanguage = useCurrentLanguage()
  const [darkMode, toggleDarkMode] = useDarkModeManager()
  const [darkHeader, setDarkHeader] = useState<boolean>(false)
  const [inHomePage, setInHomePage] = useState<boolean>(false)

  useEffect(() => {
    setInHomePage(router.pathname === '/')
  }, [inHomePage])

  // toggle dark header
  useEffect(() => {
    const onScroll = () => {
      const currentPosition = window.pageYOffset
      setDarkHeader(currentPosition > 60)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [darkHeader])

  const changeLanguage = (language: string) => () => {
    const toLanguage = language === 'zh' ? SupportedLanguage.EN : SupportedLanguage.ZH
    dispatch(updateToggleLanguage(toLanguage))
    // i18n.changeLanguage(toLanguage)
    if (typeof window !== 'undefined') {
      localStorage.setItem('FLEET_DAO_LANGUAGE', toLanguage)
    }
  }

  return (
    <HeaderContainer>
      <Link href="/">
        <LogoWrapper>
          {/* <LogoIcon src={darkMode ? logoLight : logoDark} /> */}
          <LogoText>FleetDAO</LogoText>
        </LogoWrapper>
      </Link>

      <Navbar>
        <NavLink href="/">{t('navbar.home')}</NavLink>
        <NavLink href="/project">{t('navbar.project')}</NavLink>
        <NavLink href="/proposal">{t('navbar.proposal')}</NavLink>
      </Navbar>

      <MenuContainer>
        <LanguageToggle onClick={changeLanguage(currentLanguage)} inHomePage={inHomePage}>
          <Globe size={18} />
          <LanguageText>{currentLanguage === 'zh' ? 'English' : '简体中文'}</LanguageText>
        </LanguageToggle>

        <ThemeToggle onClick={() => toggleDarkMode()} inHomePage={inHomePage}>
          {darkMode ? <Sun size={16} /> : <Moon size={16} />}
        </ThemeToggle>
      </MenuContainer>
    </HeaderContainer>
  )
}

export default HeaderPage
