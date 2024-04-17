import UserItems from '../components/UserItems'
import {ItemProvider} from '../components/ItemContext'
const ItemsPage = () => {


  return (
    <>
    <ItemProvider>
    <div className='pageContainer'>
      <div id='userItemsbox'>
        <UserItems/>
      </div>
    </div>
    </ItemProvider>
    </>
  );
}

export default ItemsPage;