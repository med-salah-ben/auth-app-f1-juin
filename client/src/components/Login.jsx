import React , {useState} from 'react';
import { Button ,Modal , Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { loginUser } from '../JS/actions/userActions';

const Login = () => {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [email , setEmail] = useState("");
    // console.log(email)
    const [password , setPassword] = useState("");

    const handleLogin = () => dispatch(loginUser({email , password}))
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
    <Button variant="primary" onClick={handleShow}>
      Login
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' onChange={(e)=>setEmail(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>
    </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={()=>{handleLogin() ; handleClose()}}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default Login