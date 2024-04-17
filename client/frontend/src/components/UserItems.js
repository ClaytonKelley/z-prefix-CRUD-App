import {useState, useContext, useEffect} from 'react'
import {UserContext} from './UserContext'
import Button from 'react-bootstrap/Button';

const UserItems = () => {
const {userDetails} = useContext(UserContext)
const [Items, setItems] = useState([])

const [toggleItems, SetToggleItems] = useState(false)
let userId = userDetails.id
console.log('userdeets:', userDetails)
console.log('userId:', userId)

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

  return (
    <>
      {toggleItems ?
      <div id='all-items-box'>
        {Items.map((item, index) => <p key ={index}>{item.ItemName}</p>)}
        <Button variant="primary" type="button" onClick = {() => SetToggleItems(!toggleItems)}>
          See your items
          </Button>
      </div>
      :
      <div id='userItemsbox'>
         {Items.map((item, index) => <p key ={index}>{item.ItemName}</p>)}
         <Button variant="primary" type="button" onClick = {() => SetToggleItems(!toggleItems)}>
          See all Items
          </Button>
      </div>
      }
      </>
  );
}

export default UserItems;