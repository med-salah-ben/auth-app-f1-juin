import React from 'react';
import {Navbar , Nav , Container, Button} from "react-bootstrap"
import { useSelector , useDispatch } from 'react-redux';
import Login from './Login';
import Register from './Register';
import { logoutUser } from '../JS/actions/userActions';
import { Link } from 'react-router-dom';

const AppNavbar = () => {
  const isAuth = useSelector((state)=>state.userReducer.isAuth)
  const user = useSelector((state)=>state.userReducer.user)

  const dispatch = useDispatch();
  const handleLogout = ()=>{
    dispatch(logoutUser())
  }
  return (
    <Navbar bg="primary" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="me-auto">
      <Nav.Link><Link to="/" style={{color:"white" , textDecoration:"none"}}>Home</Link></Nav.Link>
       {!isAuth ? <></> :  <Nav.Link><Link to="/dashboard" style={{color:"white" , textDecoration:"none"}}>Dashboard</Link></Nav.Link>}
        {!user ? (<></>) : <Nav.Link>{user.name}</Nav.Link>}
      </Nav>
      {!isAuth ? (<><Login />
      <Register /></>):(
        <Button onClick={handleLogout}>Logout</Button>
      )}
    </Container>
  </Navbar>
  )
}

export default AppNavbar