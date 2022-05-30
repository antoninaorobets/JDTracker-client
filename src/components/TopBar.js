import React from 'react'
import {
  Navbar,
  Container
} from 'react-bootstrap'

const TopBar = ({user}) => (

    <Navbar className='dark' >
  <Container>
    <Navbar.Brand href="#home"  style={{"color": "white"}}>Application Tracker</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Navbar.Text  style={{"color": "white"}}>
        Signed in as: {user.name}
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
)

export default TopBar