import {useState, useContext, useEffect} from 'react'
import {UserContext} from '../components/UserContext'
import {userDetails} from './UserContext'

const UserItems = () => {
//const {userDetails} = useContext(userDetails)
const [userItems, setUserItems] = useState([])
const [toggleItems, SetToggleItems] = useState(false)
//let userId = userDetails.id

  useEffect(() => {
    fetchUserItems();
  }, [])

const fetchUserItems = () => {
    fetch(`http://localhost:8080/userItems/1`)
      .then((response) => response.json())
      .then((itemdata) => setUserItems(itemdata))
  };

  return (
    <>
      <div id='all-items-box'>
        {userItems.map((item, index) => <p key ={index}>{item.ItemName}</p>)}
      </div>
    ------------
      <div id='userItemsbox'>
         {userItems.map((item, index) => <p key ={index}>{item.ItemName}</p>)}
      </div>
      </>
  );
}

export default UserItems;