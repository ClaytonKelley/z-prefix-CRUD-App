//import {useState, useContext, useEffect} from 'react'
//import {UserContext} from '../components/UserContext'
import UserItems from '../components/UserItems'

const ItemsPage = () => {


  return (
    <div className='pageContainer'>
      <div id='userItemsbox'>
        <UserItems/>
      </div>
    </div>
  );
}

export default ItemsPage;