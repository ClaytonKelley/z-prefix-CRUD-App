import {useState, useContext, useEffect} from 'react'
import {UserContext} from './UserContext'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';

const UserItems = () => {
const {userDetails} = useContext(UserContext)
const [Items, setItems] = useState([])
const [toggleItems, SetToggleItems] = useState(false)
const [newItem, setNewItem] = useState({ userId: userDetails.id, Quantity:'', ItemName:'', Description:''})
let userId = userDetails.id


  useEffect(() => {
    if (!toggleItems) {
      fetchUserItems();
    } else {
      fetchallItems();
    }
  }, [toggleItems])

const fetchUserItems = () => {
    fetch(`http://localhost:8080/Items/${userId}`)
      .then((response) => response.json())
      .then((itemdata) => setItems(itemdata))
  };

  const fetchallItems = () => {
    fetch(`http://localhost:8080/Items`)
      .then((response) => response.json())
      .then((itemdata) => setItems(itemdata))
  }

  const saveItem = (event) => {
    event.preventDefault();
    fetch(`http://localhost:8080/additem/`, {
      method: 'POST',
      body: JSON.stringify(newItem),
      headers: {
        "Content-Type": "application/json",
      }
    })
  }

  const handelItemObj =(event, fieldName) =>{
    setNewItem(prevState => ({
      ...prevState,
      [fieldName]: event.target.value
    }));
  }

console.log(newItem)

  return (
    <>
      <div className = "createitems">
        <Form className ='createitemform'>
          <Form.Group className="mb-3" controlId="ItemName">
            <Form.Label>Item Name</Form.Label>
              <Form.Control type="ItemName" placeholder="Enter your item's name" onChange={(event) => handelItemObj(event, 'ItemName')}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="Quantity">
            <Form.Label>Quantity</Form.Label>
              <Form.Control type="Quantity" placeholder="Enter your item's name" onChange={(event) => handelItemObj(event, 'Quantity')}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="Description">
            <Form.Label>Description</Form.Label>
            <Form.Control type ='Description' as="textarea" rows={4} onChange={(event) => handelItemObj(event, 'Description')} />
          </Form.Group>
          <Button variant="primary" type="button" onClick = {null}>
          Create Item
          </Button>
          {' '}
          <Button variant="primary" type="button" onClick = {null}>
          Close
          </Button>
        </Form>
      </div>

      {toggleItems ?
      <div id='all-items-box'>
        <Button variant="primary" type="button" onClick = {() => SetToggleItems(!toggleItems)}>
          See your items
          </Button>

          <Table striped bordered hover>
          <thead>
            <tr>
              <th>Quant</th>
              <th>Item Name</th>
              <th>Item Desecription</th>

            </tr>
          </thead>
          <tbody>
         {Items.map((item, index) => (
            <tr key = {item.id}>
              <td>{item.Quantity}</td>
              <td>{item.ItemName}</td>
              <td>{item.Description}</td>
            </tr>
         )
          )}
          </tbody>
          </Table>
      </div>
      :
      <div id='userItemsbox'>
        <Button variant="primary" type="button" onClick = {() => SetToggleItems(!toggleItems)}>
          See all Items
          </Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Quant</th>
              <th>Item Name</th>
              <th>Item Desecription</th>

            </tr>
          </thead>
          <tbody>
         {Items.map((item, index) => (
            <tr key = {index}>
              <td>{item.id}</td>
              <td>{item.ItemName}</td>
              <td>{item.Description}</td>
            </tr>
         )
          )}
          </tbody>
          </Table>

      </div>
      }
      </>
  );
}

export default UserItems;