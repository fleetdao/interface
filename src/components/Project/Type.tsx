import { setLightness } from 'polished'
import styled from 'styled-components'

interface TypeProps {
  dataSource: any[]
}

const Type = ({
  dataSource
}: TypeProps) => {
  return (
    <TypeContainer>
      {dataSource && dataSource.map((item: any, i: number) => <TypeItem color={item.color} key={i}>{item.name}</TypeItem> )}
    </TypeContainer>
  )
}

export default Type

const TypeContainer = styled.div``
const TypeItem = styled.span<{
  color: string
}>`
  margin-right: 1rem;
  padding: 0 .5rem;
  border: 1px solid ${({ color }) => setLightness(.5, color)};
  border-radius: 4px;
  font-size: 1rem;
`
