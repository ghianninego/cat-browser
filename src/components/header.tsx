import styled from 'styled-components'
import Navbar from 'react-bootstrap/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faPaw, faCat } from '@fortawesome/free-solid-svg-icons'

const NavHeader = styled(Navbar)`
  background-color: #2c3e50;
`

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`

const Title = styled(Navbar.Brand)`
  color: white;
  font-size: 24px;

  &:hover {
    color: white;
    opacity: 0.9;
  }
`

const Icon = styled(FontAwesomeIcon)`
  color: #f4d03f;
  font-size: 18px;
  margin-left: 8px;
  margin-right: 8px;

  &:hover {
    opacity: 0.9;
  }
`

export const Header: React.FC = () => {
  return (
    <NavHeader expand='lg' fixed='top'>
      <TitleContainer>
        <Title href='/'>
          <Icon icon={faPaw} />
          <span>CAT BROWSER</span>
          <Icon icon={faCat} />
        </Title>
      </TitleContainer>
    </NavHeader>
  )
}
