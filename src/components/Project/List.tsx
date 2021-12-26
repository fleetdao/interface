import styled from 'styled-components'
import Column from '../Column'
import Row from '../Row'
import Item from './Item'

interface ListProps {
  dataSource: any[]
}

const List = ({
  dataSource,
}: ListProps) => {
  return (
    <ListContainer>
      {dataSource && dataSource.map((item: any, i: number) => item.properties.Name.title[0] && <Item dataSource={item} key={i} />)}
    </ListContainer>
  )
}

const ListContainer = styled(Column)`
  min-width: 1080px;
  
`

export default List
