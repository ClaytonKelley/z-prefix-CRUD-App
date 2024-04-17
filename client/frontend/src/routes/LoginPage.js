import {useState, useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {UserContext} from '../components/UserContext'
import {useNavigate} from "react-router-dom";
// import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Alert from 'react-bootstrap/Alert';

const LoginPage = () => {
const [userName, setUserName] = useState('')
const [userPassword, setUserPassword] = useState('')
const {userDetails, setUserDetails} = useContext(UserContext)
const [toggleLogin, setToggleLogin] = useState(false)
const [accountCreation, setAccountCreation] = useState({FirstName: "", LastName: "", UserName: "", Password: ""})
const navigate = useNavigate();

const handleLogin = (event) => {
  event.preventDefault();
  fetch(`http://localhost:8080/login/`, {
    method: 'POST',
    body: JSON.stringify({
      username: userName,
      password: userPassword
    }),
    headers: {
      "Content-Type": "application/json",
    }
  })
  .then( (response) =>  {
    if (response.status === 200) {
      console.log('goodLogin')
      return response.json()
    } else {
      return Promise.reject({ status: response.status, message: 'Invalid Login Details' });
    }
  })
  .then((userData) => setUserDetails(userData[0]))
  .then(() => navigate('/Items'))
  .catch((error) => {
    console.error('Login failed:', error.message);
 });
};

const handleCreateAccount = (event) => {
  event.preventDefault();
  fetch(`http://localhost:8080/create-account/`, {
    method: 'POST',
    body: JSON.stringify(accountCreation),
    headers: {
      "Content-Type": "application/json",
    }
  })
  .then((res) => {
    if (res.status === 200) {
      console.log('account creation successfuly')
      setToggleLogin(!toggleLogin)
    } else {
      console.log('something went wrong')
    }
  })
}

const updateAccountCreation = (event, fieldName) => {
  setAccountCreation(prevState => ({
    ...prevState,
    [fieldName]: event.target.value
  }));
};

  console.log(accountCreation)
  return (
    <div className='PageBody'>
      {toggleLogin ?
      <div className='login-box'>
        {/* <Card style={{ width: '50rem' }} > */}
        <h1>Login</h1>
        <Form> {/*Loginform*/}
          <Form.Group className="mb-3" controlId="UserName" >
            <Form.Label>UserName</Form.Label>
            <Form.Control type="UserName" placeholder="Enter UserName" onChange={(event) => setUserName(event.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange= {(event) => setUserPassword(event.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
          </Form.Group>
          <Button variant="primary" type="submit" onClick ={(event) => handleLogin(event)}>
          Login
          </Button>{' '}
          <Button variant="secondary" type="button" onClick = {() => setToggleLogin(!toggleLogin)}>
          Create Account
          </Button>
        </Form>
       {/* </Card> */}


      </div>
      :
      <div className = 'create-account-box'>
        <h1>Create Account</h1>
        <Form> {/*Loginform*/}
          <Form.Group className="mb-3" controlId="FirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter First Name" onChange={(event) => updateAccountCreation(event, 'FirstName')} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="LastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Last Name" onChange={(event) => updateAccountCreation(event, 'LastName')} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="UserName">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter UserName" onChange={(event) => updateAccountCreation(event, 'UserName')} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(event) => updateAccountCreation(event, 'Password')}/>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={(event) => handleCreateAccount(event)}>
              Create Account
          </Button>{' '}
          <Button variant="secondary" type="button" onClick={() => setToggleLogin(!toggleLogin)}>
              Already have account
          </Button>
        </Form>
      </div>}
    </div>

  );
}

export default LoginPage;