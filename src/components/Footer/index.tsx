import styled from 'styled-components'

const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0 !important;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 2rem;
  font-size: 0.75rem;
  z-index: 2;
`

const Footer = () => {
  return (
    <FooterContainer>
      &copy; 2021 FleetDAO All Rights Reserved.
    </FooterContainer>
  )
}

export default Footer
