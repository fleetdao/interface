import { GetStaticProps } from 'next'
import { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Parallax } from 'react-parallax'
import styled, { keyframes } from 'styled-components'
import HomeLayout from '../layouts/Home'
import Column from '../components/Column'
import Row from '../components/Row'
import { useHomeDataSource } from '../state/home/datasource'
import { AboutDatasource, RoadmapDatasource, CommunityDatasource } from '../interfaces/home'
import { darken } from 'polished'
import { GitHub, Twitter } from 'react-feather'
import { Discord } from '../components/Icon'

import { useDarkModeManager } from '../state/user/hooks'

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'home']),
  },
})

const HomePage = () => {
  const { t } = useTranslation('home')
  const [darkMode, toggleDarkMode] = useDarkModeManager()
  const { aboutDataSource, roadmapDataSource, communityDatasource } = useHomeDataSource()
  const onGoVoxels = useCallback(() => {
    window.open('https://www.cryptovoxels.com/play?coords=SW@1063E,390S,0.5U')
  }, [])
  const renderCommunityIcon = (name: string) => {
    if (name === 'github') {
      return <GitHub size={16} />
    } else if (name === 'discord') {
      return <Discord fill={darkMode ? '#08C8BB' : '#285AFF'} />
    } else if (name === 'twitter') {
      return <Twitter size={16} />
    }
  }

  return (
    <HomeLayout>
      <>
        <FullScreenContainer>
          <BannerParallax
            blur={{ min: -50, max: 80 }}
            bgImage={'/static/hero@1x.png'}
            bgImageAlt="the FleetDAO"
          >
            <BannerContent>
              <Text1>{t('slogan.build')}</Text1>
              <Text2>{t('slogan.fleet')}</Text2>
              <Text3>{t('slogan.info')}</Text3>
            </BannerContent>
          </BannerParallax>
        </FullScreenContainer>

        <AboutContainer>
          <SectionTitle>{t('about.title')}</SectionTitle>
          <AboutContent>
            {aboutDataSource && aboutDataSource.map((item: AboutDatasource, i: number) => (
              <AboutColumn key={i}>
                <AboutWrap>
                  <AboutImgWrap>
                    <AboutImgBg image={item.image} />
                  </AboutImgWrap>
                  <AboutText>
                    <AboutTitle>{item.title}</AboutTitle>
                    <AboutDesc>{item.info}</AboutDesc>
                  </AboutText>
                </AboutWrap>
              </AboutColumn>
            ))}
          </AboutContent>
        </AboutContainer>

        <RoadmapContainer>
          <RoadmapParallax
            blur={{ min: -40, max: 80 }}
            bgImage={'/static/roadmap@1x.png'}
            bgImageAlt="the FleetDAO"
          >
            <SectionTitle>{t('roadmap.title')}</SectionTitle>
            <RoadmapContent>
              <RoadmapList>
                {roadmapDataSource && roadmapDataSource.map((item: RoadmapDatasource, i: number) => (
                  <RoadmapItem key={i} style={{ top: item.top }} complete={item.complete}>
                    {item.complete &&
                      <RoadmapSail viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
                        <path d="M128 768h768a21.333333 21.333333 0 0 1 17.066667 34.133333l-89.6 119.466667a42.666667 42.666667 0 0 1-34.133334 17.066667h-554.666666a42.666667 42.666667 0 0 1-34.133334-17.066667l-89.6-119.466667A21.333333 21.333333 0 0 1 128 768zM640 103.466667V640a42.666667 42.666667 0 0 1-42.666667 42.666667H172.373333a21.333333 21.333333 0 0 1-16.64-34.645334L602.026667 90.154667a21.333333 21.333333 0 0 1 37.973333 13.312z" p-id="2757" />
                      </RoadmapSail>
                    }
                    <RoadmapItemYear>{item.year}</RoadmapItemYear>
                    <RoadmapItemMonth>{item.month}</RoadmapItemMonth>
                    <RoadmapItemText>{item.info}</RoadmapItemText>
                  </RoadmapItem>
                ))}
              </RoadmapList>
            </RoadmapContent>
          </RoadmapParallax>
        </RoadmapContainer>

        <VoxelsContainer>
          <SectionTitle>{t('voxels.title')}</SectionTitle>
          <VoxelsContent>
            <VoxelsLineVertical width="60px" height="2px" left="-1px" bottom="-1px" />
            <VoxelsLineVertical width="60px" height="2px" top="-1px" right="-1px" />
            <VoxelsLineHorizontal width="2px" height="60px" top="-1px" right="-1px" />
            <VoxelsLineHorizontal width="2px" height="60px" left="-1px" bottom="-1px" />
            <VoxelsImage src='/static/voxels@2x.jpg' onClick={onGoVoxels} />
          </VoxelsContent>
        </VoxelsContainer>

        <FooterContainer>
          <SiteContent>
            <SiteLogo src={darkMode ? '/static/logo-light.svg' : '/static/logo-dark.svg'}></SiteLogo>
            <SiteName>FleetDAO</SiteName>
          </SiteContent>
          <CommunityContent>
            {communityDatasource && communityDatasource.map((item: CommunityDatasource, i: number) => (
              <CommunityItem href={item.link} target='_blank' key={i}>
                {renderCommunityIcon(item.name)}
                {item.title}
              </CommunityItem>
            ))}
          </CommunityContent>
        </FooterContainer>
      </>
    </HomeLayout>
  )
}

const movingX = keyframes`
  from {
    width: 0;
  }
  to {
    width: 40px;
  }
`
const movingY = keyframes`
  from {
    height: 0;
  }
  to {
    height: 40px;
  }
`
const FullScreenContainer = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.bg1};
  min-height: ${({ theme }) => `calc(100vh - ${theme.headerHeight})`};
`
const ContentContainer = styled(Column)`
  margin: 0 auto;
  min-width: ${({ theme }) => theme.containerMinWidth};
  max-width: ${({ theme }) => theme.containerMaxWidth};
`
const SectionTitle = styled.h2`
  position: relative;
  margin: 3rem auto;
  line-height: 5rem;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text1};

  &:after {
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -3.5rem;
    width: 7rem;
    height: 2px;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.primary1};
    content: '';
  }

  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 24px;
  `};
`
const BannerParallax = styled(Parallax)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ theme }) => `calc(100vh - ${theme.headerHeight})`};
  background-color: ${({ theme }) => theme.bg1};
`
const BannerContent = styled(ContentContainer)`
  position: relative;
  z-index: 3;
  text-align: center;
`
const Text1 = styled.p`
  margin-bottom: 5px;
  font-size: 1.25rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text3};

  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 16px;
  `};
`
const Text2 = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text1};

  ${({ theme }) => theme.mediaWidth.upToSmall`
    font-size: 30px;
  `};
`
const Text3 = styled.p`
  margin-top: 10px;
  font-size: 1.25rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text3};
`
const AboutContainer = styled(FullScreenContainer)`
  min-height: 50vh;
`
const AboutContent = styled(ContentContainer)`
  flex-direction: row;

  ${({ theme }) => theme.mediaWidth.upToSmall`
  `};
`
const AboutColumn = styled(Column)`
  flex: 1;
  box-sizing: border-box;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin-bottom: 1rem;
  `};
`
const AboutWrap = styled.div`
  transform: translateY(0);
  transition: .15s all ease-in-out;
`
const AboutImgWrap = styled.div`
  flex: none;
  overflow: hidden;
  height: calc(356px - 3.75rem);
  border: 2px solid ${({ theme }) => theme.bg5};

  ${({ theme }) => theme.mediaWidth.upToSmall``};
`
const AboutImgBg = styled.div<{
  image: string
}>`
  width: 100%;
  height: 100%;
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-image: url(${({ image }) => image});
  transition: .15s all ease-in-out;

  ${AboutWrap}:hover & {
    transform: scale(1.03);
  }
`
const AboutText = styled.div<{
  language?: string
}>`
  position: relative;
  padding: 1rem;
  flex: 1;
  min-height: ${({ language }) => language === 'zh' ? '8rem' : '10rem'};
  border: 1px solid ${({ theme }) => theme.bg5};
  background-position: right bottom;
  background-size: 25%;
  background-repeat: no-repeat;

  @media screen and (max-width: 1280px) {
    min-height: ${({ language }) => language === 'zh' ? '9rem' : '13.5rem'};
  }

  ${({ theme }) => theme.mediaWidth.upToSmall`
    min-height: 6rem;
  `};

  ${AboutWrap}:hover & {

    &:before,
    &:after {
      background-color: ${({ theme }) => theme.primary2};
    }

    &:before {
      animation: .25s ${movingY} linear;
    }

    &:after {
      animation: .25s ${movingX} linear;
    }
  }

  &:before,
  &:after {
    position: absolute;
    left: -1px;
    bottom: -1px;
    content: '';
    background-color: ${({ theme }) => theme.primary3};
  }

  &:before {
    width: 2px;
    height: 40px;
  }
  &:after {
    width: 40px;
    height: 2px;
  }
`
const AboutTitle = styled.h3`
  margin: 0 0 .5rem;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text1};

  @media screen and (max-width: 1280px) {
    font-size: 16px;
  }
`
const AboutDesc = styled.p`
  margin: 0;
  min-height: 9rem;
  line-height: 1.8;
  font-size: 1rem;
  color: ${({ theme }) => theme.text3};
`

const RoadmapContainer = styled(FullScreenContainer)`
  margin-top: 3rem;
  min-height: 50vh;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin-bottom: 0;
    height: auto;
  `};
`
const RoadmapParallax = styled(Parallax)`
  display: flex;
  justify-content: center;
  height: 50vh;
  background-color: ${({ theme }) => theme.bg1};
`
const RoadmapContent = styled(ContentContainer)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const RoadmapList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: ${({ theme }) => theme.containerMaxWidth};

  ${({ theme }) => theme.mediaWidth.upToSmall`
    flex-direction: column;
  `};
`
const RoadmapItemYear = styled.div`
  position: absolute;
  left: 1.5rem;
  top: 1.5rem;
  padding: 5px;
  width: 40px;
  height: 50px;
  line-height: 20px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.bg5};
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.text3};
  word-wrap: break-word;
`
const RoadmapItemMonth = styled.h2`
  position: absolute;
  left: 5.5rem;
  top: 2rem;
  height: 40px;
  line-height: 40px;
  font-size: 2.25rem;
  font-weight: 700;
`
const RoadmapItemText = styled.div`
  margin-top: 1rem;
  line-height: 25px;
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text1};
`
const RoadmapItem = styled.div<{
  complete?: boolean
}>`
  position: relative;
  flex: 1;
  margin: 0 1.5rem;
  padding: 5rem 1.5rem 1.5rem;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: ${({ theme, complete }) => complete ? theme.bg3 : (theme.darkMode ? theme.bg2 : 'rgba(255, 255, 255, .3)')};
  transform: scale(1);
  transition: .15s all ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  ${({ theme }) => theme.mediaWidth.upToSmall`
    top: 0 !important;
    margin-bottom: 1rem;
    width: 100%;
  `};
`
const RoadmapSail = styled.svg<{ size?: string; stroke?: string }>`
  position: absolute;
  top: -32px;
  left: 26px;
  path {
    fill: ${({ theme }) => theme.text1};
  }

  ${RoadmapItem}:hover & {
    animation: .25s ${movingX} linear;
  }
`

const VoxelsContainer = styled(FullScreenContainer)`
  min-height: 50vh;

  &:before {
    margin-top: 6px;
  }

  &:after {
    margin-top: -7px;
  }
`
const VoxelsContent = styled(Column)`
  position: relative;
  margin: 0 auto 3rem;
  border: 1px solid ${({ theme }) => theme.bg5};
  width: 50%;
  height: auto;
  overflow: hidden;

  ${({ theme }) => theme.mediaWidth.upToSmall`
    width: 90%;
  `};

  &:before,
  &:after {
    position: absolute;
    content: '';
    background-color: ${({ theme }) => theme.primary3};
  }
`
const VoxelsLineBase = styled.span<{
  top?: string
  right?: string
  bottom?: string
  left?: string
  width?: string
  height?: string
  direction?: string
}>`
  position: absolute;
  background-color: ${({ theme }) => theme.primary3};
  top: ${({ top }) => top && top};
  right: ${({ right }) => right && right};
  bottom: ${({ bottom }) => bottom && bottom};
  left: ${({ left }) => left && left};
  z-index: 2;
  width: ${({ width }) => width && width};
  height: ${({ height }) => height && height};
  transition: .25s all ease-in-out;
  content: '';

  ${VoxelsContent}:hover & {
    background-color: ${({ theme }) => theme.primary2};
  }
`
const VoxelsLineVertical = styled(VoxelsLineBase)`
  ${VoxelsContent}:hover & {
    animation: ${movingX} .25s linear;
  }
`
const VoxelsLineHorizontal = styled(VoxelsLineBase)`
  ${VoxelsContent}:hover & {
    animation: ${movingY} .25s linear;
  }
`
const VoxelsImage = styled.img`
  position: relative;
  margin: 6px;
  z-index: 1;
  cursor: pointer;
  transition: .15s all ease-in-out;

  ${VoxelsContent}:hover & {
    transform: scale(1.03);
  }
`

const FooterContainer = styled(Row)`
  min-height: 6.5rem;
  background-color: ${({ theme }) => darken(.05, theme.bg1)};
`
const SiteContent = styled(Row)`
  flex: 1;
  justify-content: center;
  opacity: .5;
`
const SiteLogo = styled.img`
  width: 2rem;
  height: 2rem;
`
const SiteName = styled.h3`
  margin-left: .5rem;
  font-size: 1.5rem;
`
const CommunityContent = styled(Row)`
  flex: 1;
`
const CommunityItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
  padding: 1rem;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.text2};

  &:hover {
    color: ${({ theme }) => theme.text1};
  }

  > svg {
    margin-right: .5rem;
  }
`

export default HomePage 
