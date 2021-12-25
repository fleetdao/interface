import { useTranslation } from 'next-i18next'
import { AboutDatasource, RoadmapDatasource, CommunityDatasource } from '../../interfaces/home'

const aboutDataSource = (t: any): AboutDatasource[] => [
  {
    image: '/static/about-decentralized@2x.png',
    title: t('about.section1.title'),
    info: t('about.section1.info'),
  },
  {
    image: '/static/about-security@2x.png',
    title: t('about.section2.title'),
    info: t('about.section2.info'),
  },
  {
    image: '/static/about-whale@2x.png',
    title: t('about.section3.title'),
    info: t('about.section3.info'),
  },
  {
    image: '/static/about-fund@2x.png',
    title: t('about.section4.title'),
    info: t('about.section4.info'),
  }
]

const roadmapDataSource = (t: any): RoadmapDatasource[] => [
  {
    year: '2021',
    month: t('roadmap.section1.month'),
    info: t('roadmap.section1.info'),
    top: -200,
    complete: true,
  },
  {
    year: '2021',
    month: t('roadmap.section2.month'),
    info: t('roadmap.section2.info'),
    top: -140,
  },
  {
    year: '2022',
    month: t('roadmap.section3.month'),
    info: t('roadmap.section3.info'),
    top: -100,
  },
  {
    year: '2022',
    month: t('roadmap.section4.month'),
    info: t('roadmap.section4.info'),
    top: -140,
  },
  {
    year: '2022',
    month: t('roadmap.section5.month'),
    info: t('roadmap.section5.info'),
    top: -80,
  },
]

const communityDatasource = (): CommunityDatasource[] => [
  {
    name: 'discord',
    title: 'Discord',
    link: 'https://discord.com/invite/Jj5b5dwNZb',
  },
  {
    name: 'twitter',
    title: 'Twitter',
    link: 'https://twitter.com/fleetdao',
  },
  {
    name: 'github',
    title: 'Github',
    link: 'https://github.com/fleetdao/interface',
  }
]

export const useHomeDataSource = () => {
  const { t } = useTranslation('home')
  return {
    aboutDataSource: aboutDataSource(t),
    roadmapDataSource: roadmapDataSource(t),
    communityDatasource: communityDatasource(),
  }
}
