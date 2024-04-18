import {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {useNavigate} from "react-router-dom";
import {useCookies} from 'react-cookie'



const ItemModal = ({show, handleClose, item, fetchfunc}) => {
  const [toggleEdit, setToggleEdit] = useState(true)
  const [itemObj, setItemObj] = useState(item)
  const [cookies] = useCookies(['userId'])
  const navigate = useNavigate();



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


const handelItemObj =(event, fieldName) =>{
  setItemObj(prevState => ({
    ...prevState,
    [fieldName]: event.target.value
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
        <div className="d-flex justify-content-between w-100">
          <Modal.Title>Item Details</Modal.Title>
          <div className = 'buttons'>
          <Button variant="primary" onClick={() => setToggleEdit(!toggleEdit)}>
            Edit
          </Button>
          {!toggleEdit ? <>
          {' '}
          <Button variant="danger" onClick={deleteitem}>
            Delete
          </Button>
          </>
          : <></>}
          </div>
          </div>
            </Modal.Header>
              <Modal.Body>
                {toggleEdit ?
                <Container>
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



      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={4} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
}

export default ItemModal;