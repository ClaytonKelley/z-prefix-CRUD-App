import {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {useCookies} from 'react-cookie'



const ItemModal = ({show, handleClose, item, fetchfunc}) => {
  const [toggleEdit, setToggleEdit] = useState(true)
  const [itemObj, setItemObj] = useState(item)
  const [cookies] = useCookies(['userId'])




useEffect(() => {
  if (show) {
    setItemObj(item)
  }
}, [show, item, toggleEdit]);

useEffect(() => {
  if (!toggleEdit) {
    setToggleEdit(true)
  }
}, [show])


const handelItemObj =(event, key) =>{
  setItemObj(prevState => ({
    ...prevState,
    [key]: event.target.value
  }));
}

const updateitem = (event) => {
  if (itemObj.userId === cookies.userId) {
    fetch(`http://localhost:8080/editItem`, {
      method: 'PATCH',
      body: JSON.stringify(itemObj),
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(() => handleClose())
    .then(() => fetchfunc())
  } else {
    console.log('user does not have permission')
  }
}

const deleteitem = (event) => {
  if (itemObj.userId === cookies.userId) {
    fetch(`http://localhost:8080/deleteItem`, {
      method: 'DELETE',
      body: JSON.stringify(itemObj),
      headers: {
        "Content-Type": "application/json",
      }
    })
    .then(() => handleClose())
    .then(() => fetchfunc())
  } else {
    console.log('user does not have permission')
  }
}



  return (
    <>
      <Modal show={show} onHide={handleClose} >
        <Modal.Header >
        <div className="d-flex justify-content-between w-100" >
          <Modal.Title >Item Details</Modal.Title>
          <div className = 'buttons'>
          {cookies.userId ? <>
          {!toggleEdit ? <>

          <Button variant="danger" onClick={deleteitem}>
            Delete
          </Button>
          </>
          : <></>}
          {' '}
          <Button variant="primary" onClick={() => setToggleEdit(!toggleEdit)}>
            Edit
          </Button>
          </>
          : <></>}
          </div>
          </div>
            </Modal.Header >
              <Modal.Body>
                {toggleEdit ?
                <Container >
                  <Row>
                  <Col xs={7}>
                    <Form.Label htmlFor="ItemName">Item Name:</Form.Label>
                    <Form.Control id = 'ItemName' value ={itemObj.ItemName} placeholder=""  disabled onChange = {(event) => handelItemObj(event, 'ItemName')} />
                  </Col>
                  <Col>
                  <Form.Label htmlFor="Quantity">Quantity:</Form.Label>
                    <Form.Control id ='Quantity' value ={itemObj.Quantity} placeholder=""  disabled onChange = {(event) => handelItemObj(event, 'Quantity')} />
                  </Col>
                </Row>
                  <br/>
                <Row>
                  <Col>
                  <Form.Label htmlFor="Description">Item Description:</Form.Label>
                  <Form.Control id ='Description' as='textarea' value ={itemObj.Description} onChange = {(event) => handelItemObj(event, 'Description')} placeholder='' style={{ height: '150px' }} disabled />
                  </Col>
                </Row>
                  </Container>
                  :
                  <Container>
                <Row>
                <Col xs={7}>
                  <Form.Label htmlFor="ItemName">Item Name:</Form.Label>
                  <Form.Control id = 'ItemName' value ={itemObj.ItemName} placeholder="" onChange = {(event) => handelItemObj(event, 'ItemName')} />
                </Col>
                <Col>
                <Form.Label htmlFor="Quantity">Quantity:</Form.Label>
                  <Form.Control id ='Quantity' value ={itemObj.Quantity} placeholder="" onChange = {(event) => handelItemObj(event, 'Quantity')} />
                </Col>
              </Row>
              <br/>
              <Row>
                <Col>
                <Form.Label htmlFor="Description">Item Description:</Form.Label>
                <Form.Control id ='Description' as='textarea' value ={itemObj.Description} onChange = {(event) => handelItemObj(event, 'Description')} placeholder='' style={{ height: '150px' }} />
                </Col>
              </Row>
                </Container>}
              </Modal.Body>
            <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {!toggleEdit ? <>
          <Button variant="primary" onClick={updateitem}>
            Save Changes
          </Button>
          </>
          :
          <></> }
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ItemModal;