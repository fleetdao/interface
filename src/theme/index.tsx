import React, { useMemo } from 'react'
import {
  ThemeProvider as StyledComponentsThemeProvider,
  createGlobalStyle,
  css,
  DefaultTheme
} from 'styled-components'
import { useIsDarkMode } from '../state/user/hooks'
import { Colors } from './styled'

export * from './components'

const MEDIA_WIDTHS = {
  upToExtraSmall: 500,
  upToSmall: 600,
  upToMedium: 960,
  upToLarge: 1280
}

const mediaWidthTemplates: { [width in keyof typeof MEDIA_WIDTHS]: typeof css } = Object.keys(MEDIA_WIDTHS).reduce(
  (accumulator, size) => {
    ; (accumulator as any)[size] = (a: any, b: any, c: any) => css`
      @media (max-width: ${(MEDIA_WIDTHS as any)[size]}px) {
        ${css(a, b, c)}
      }
    `
    return accumulator
  },
  {}
) as any

const white = '#FFFFFF'
const black = '#000000'

export const colors = (darkMode: boolean): Colors => {
  return {
    darkMode,
    // base
    white,
    black,

    // text
    text1: darkMode ? '#02F2E1' : '#003BDE',
    text2: darkMode ? '#08C8BB' : '#285AFF',
    text3: darkMode ? '#888888' : '#888888',
    text4: darkMode ? '#1e1f22' : '#dedede',
    text5: darkMode ? '#003BDE' : '#EEF0FF',

    // backgrounds / greys
    bg1: darkMode ? '#1F2026' : '#EEF0FF',
    bg2: darkMode ? '#2B2B3E' : '#FFFFFF',
    bg3: darkMode ? '#40444F' : '#EDEEF2',
    bg4: darkMode ? '#565A69' : '#e0e0e0',
    bg5: darkMode ? '#747a91' : '#CED0D9',

    // border
    border1: darkMode ? '#3c3ca0' : '#F3F4F7',

    //specialty colors
    modalBG: darkMode ? 'rgba(0, 0, 0, .5)' : 'rgba(0, 0, 0, .5)',
    advancedBG: darkMode ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.6)',

    //primary colors
    primary1: darkMode ? '#02F2E1' : '#003BDE',
    primary2: darkMode ? '#08C8BB' : '#285AFF',
    primary3: darkMode ? '#108883' : '#A0B4FF',
    primary4: darkMode ? '#18494B' : '#DDE6FF',
    primary5: darkMode ? '#153d6f70' : '#FDEAF1',

    // color text
    primaryText1: darkMode ? '#FFFFFF' : '#0F121A',
    primaryText2: darkMode ? '#AAAEDF' : '#6C758E',

    // secondary colors
    secondary1: darkMode ? '#2172E5' : '#ff007a',
    secondary2: darkMode ? '#17000b26' : '#003531',
    secondary3: darkMode ? '#17000b26' : '#FDEAF1',

    // other
    red1: '#FF6871',
    red2: '#F82D3A',
    green1: '#0fa728',
    yellow1: '#FFE270',
    yellow2: '#F3841E',
    gray1: '#999999',
  }
}

export const theme = (darkMode: boolean): DefaultTheme => {
  return {
    ...colors(darkMode),

    grids: {
      sm: 8,
      md: 12,
      lg: 24
    },

    //shadows
    shadow1: darkMode ? '#000' : '#2F80ED',

    // media queries
    mediaWidth: mediaWidthTemplates,

    headerHeight: '4rem',
    headerBg: darkMode ? '#2f2f99' : '#fff',

    footerHeight: '2rem',

    containerMinWidth: '1080px',
    containerMaxWidth: '1440px',

    // css snippets
    flexColumnNoWrap: css`
      display: flex;
      flex-flow: column nowrap;
    `,
    flexRowNoWrap: css`
      display: flex;
      flex-flow: row nowrap;
    `
  }
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const darkMode = useIsDarkMode()
  const themeObject = useMemo(() => theme(darkMode), [darkMode])

  return <StyledComponentsThemeProvider theme={themeObject}>{children}</StyledComponentsThemeProvider>
}

export const FixedGlobalStyle = createGlobalStyle`
  html, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    letter-spacing: -0.018em;
    font-display: fallback;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }

  button {
    user-select: none;
  }

  html {
    font-size: 16px;
    font-variant: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
`

export const ThemedGlobalStyle = createGlobalStyle`
  html {
    color: ${({ theme }) => theme.primaryText2};
    background-color: ${({ theme }) => theme.bg1};
  }

  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    font-family: SF Pro SC,SF Pro Text,SF Pro Icons,PingFang SC,Helvetica Neue,Helvetica,Arial,sans-serif;
  }

  html {
    line-height: 1.5;
    font-size: 14px;
    font-variant: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  h1,h2,h3,h4,h5,h6,p,dl,dd,dt {
    margin: 0;
    padding: 0;
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: Ubuntu;
    font-weight: 500;
  }

  a {
    cursor: pointer;
    text-decoration: none;
    user-select: none;
  }

  [data-reach-dialog-overlay] {
    background: #000000a6;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
  }

  button {
    transition: .2s background-color ease-in-out;
  }
`