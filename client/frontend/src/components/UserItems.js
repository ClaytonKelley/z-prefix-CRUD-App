import {useState, useContext, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import {useCookies} from 'react-cookie'
import {ItemContext} from './ItemContext'
import ItemModal from './ItemModal'

const UserItems = () => {
const [items, setItems] = useState([])
const [toggleItems, setToggleItems] = useState(false)
const [toggleCreate, setToggleCreate] = useState(false)
const [cookies] = useCookies(['userId'])
const {itemDetails, setItemDetails, showItem, setShowItem} = useContext(ItemContext)
const [newItem, setNewItem] = useState({ userId: cookies.userId, Quantity:'', ItemName:'', Description:''})


  useEffect(() => {
    if (!toggleItems) {
      fetchUserItems();
    } else {
      fetchallItems();
    }
  }, [toggleItems])

const fetchUserItems = () => {
    fetch(`http://localhost:8080/Items/${cookies.userId}`)
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
    .then(() => fetchUserItems())
    .then(() => setToggleItems(true))
    .then(() => setToggleCreate(false))
  }

  const handelItemObj =(event, fieldName) =>{
    setNewItem(prevState => ({
      ...prevState,
      [fieldName]: event.target.value
    }));
  }

  const handleItemClick = (item) => {
    setItemDetails(item);
    setShowItem(true);
 };

 const handleCloseModal = () => {
    setShowItem(false);
    setItemDetails({});
 };


  return (
    <>

      {toggleCreate ?
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
          <Button variant="primary" type="button" onClick = {(event) => saveItem(event)}>
          Create Item
          </Button>
          {' '}
          <Button variant="primary" type="button" onClick = {() => setToggleCreate(!toggleCreate)}>
          Close
          </Button>
        </Form>
      </div>
      :
      <>
      </>}

      {toggleItems ?
      <div id='all-items-box'>
        <Button variant="primary" type="button" onClick = {() => setToggleItems(!toggleItems)}>
          See your items
          </Button>
          {' '}
          <Button variant="primary" type="button" onClick = {() => setToggleCreate(!toggleCreate)}>
          Add an Item
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
         {items.map((item, index) => (
            <tr key = {item.id} onClick = {() => handleItemClick(item)}>
              <td>{item.Quantity}</td>
              <td>{item.ItemName}</td>
              <td>{item.Description}</td>
            </tr>
         )
          )}
          </tbody>
          </Table>
          <ItemModal show={showItem} fetchfunc={fetchUserItems} handleClose={handleCloseModal} item={itemDetails} />
      </div>
      :
      <div id='userItemsbox'>
        <Button variant="primary" type="button" onClick = {() => setToggleItems(!toggleItems)}>
          See all Items
          </Button>
          {' '}
          <Button variant="primary" type="button" onClick = {() => setToggleCreate(!toggleCreate)}>
          Add an Item
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
         {items.map((item, index) => (
            <tr key = {item.id} onClick = {() => handleItemClick(item)}>
              <td>{item.id}</td>
              <td>{item.ItemName}</td>
              <td>{item.Description}</td>
            </tr>)
          )}
          </tbody>
          </Table>
          <ItemModal show={showItem} fetchfunc={fetchUserItems} handleClose={handleCloseModal} item={itemDetails} />
      </div>

      }
      </>
  );
}

export default UserItems;