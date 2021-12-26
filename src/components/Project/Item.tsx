import { useCallback } from 'react'
import { setLightness, shade, tint, modularScale } from 'polished'
import styled from 'styled-components'
import Column from '../Column'
import Row from '../Row'
import Type from './Type'

interface ItemProps {
  dataSource: any
}

const Item = ({
  dataSource
}: ItemProps) => {
  
  console.log('dataSource: ', dataSource);
  const onItemClick = useCallback((url: string) => {
    window.open(url)
  }, [])

  return (
    <ItemContainer onClick={() => onItemClick(dataSource.url)}>
      <ProjectInfo>
        <ProjectName>
          {dataSource.properties.Name.title[0].text.content}
        </ProjectName>
        <ProjectType>
          <Type dataSource={dataSource.properties.Type.multi_select} />
        </ProjectType>
      </ProjectInfo>

      <ProjectRisk>
        {dataSource.properties.Risk.select.name}
      </ProjectRisk>

      <ProjectChain>
        <BlockchainLogo>
          <BlockchainImg src={`/static/chain/${dataSource.properties.Blockchain.select.name.toLowerCase()}.svg`} />
        </BlockchainLogo>
      </ProjectChain>

      <ProjectUser>
      </ProjectUser>

      <ProjectLink>
      </ProjectLink>
    </ItemContainer>
  )
}
const ItemContainer = styled(Row)`
  margin-top: 1.25rem;
  padding: 1rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.bg2};
  transition: .2s all ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.darkMode ? tint(.05, theme.bg2) : shade(.02, theme.bg2)};
    ${modularScale(1.02)};
  }
`
const ProjectInfo = styled.div`
  flex: 3;
`
const ProjectName = styled.h2`
  flex: 3;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primaryText1};
`
const ProjectType = styled.div`
  margin-top: .65rem;
  flex: 1;
`
const ProjectRisk = styled.div`
  flex: 1;
  padding: 2px 5px;
  font-size: 1.1429rem;
`
const ProjectChain = styled.div`
  flex: 1;
`
const BlockchainLogo = styled.span`
  display: flex;
  padding: 5px;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.bg1};
`
const BlockchainImg = styled.img`
  width: 100%;
  height: 100%;
`
const ProjectUser = styled.div`
  flex: 1;
`
const ProjectLink = styled.div`
  flex: 1;
`


export default Item
