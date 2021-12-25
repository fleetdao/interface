import React from 'react'
import { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
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
import { darken, lighten, opacify, shade, tint } from 'polished'

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

  > a {
    display: flex;
    align-items: center;
    height: 100%;
  }
`
const LogoWrapper = styled.a`
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
const NavLink = styled.span<{
  active: boolean
}>`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 1rem;
  padding: 0 1.5rem;
  height: 2.75rem;
  background-color: ${({ theme, active }) => active ? (theme.darkMode ? shade(0.5, theme.bg3) : tint(0.5, theme.bg3)) : theme.bg2};
  border-radius: 5px;
  font-size: 1.1429rem;
  color: ${({ theme, active }) => active ? theme.text1 : theme.text2};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.text1};
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

const Header = () => {
  const dispatch = useDispatch()
  const router = useRouter()
  const { t } = useTranslation('common')
  const currentLanguage = useCurrentLanguage()
  const [darkMode, toggleDarkMode] = useDarkModeManager()
  const dataSource = [
    {
      pathname: '/',
      title: t('navbar.home'),
    },
    {
      pathname: '/project',
      title: t('navbar.project'),
    },
    {
      pathname: '/proposal',
      title: t('navbar.proposal'),
    }
  ]

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
        {dataSource.map((item: any, i: number) => (
          <Link
            href={item.pathname}
            key={i}
          >
            <NavLink active={router.pathname === item.pathname}>{item.title}</NavLink>
          </Link>
        ))}
      </Navbar>

      <MenuContainer>
        <LanguageToggle onClick={changeLanguage(currentLanguage)}>
          <Globe size={18} />
          <LanguageText>{currentLanguage === 'zh' ? 'English' : '简体中文'}</LanguageText>
        </LanguageToggle>

        <ThemeToggle onClick={() => toggleDarkMode()}>
          {darkMode ? <Sun size={16} /> : <Moon size={16} />}
        </ThemeToggle>
      </MenuContainer>
    </HeaderContainer>
  )
}

export default Header
