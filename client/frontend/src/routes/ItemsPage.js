import UserItems from '../components/UserItems'
import GuestItems from '../components/GuestItems'
import {ItemProvider} from '../components/ItemContext'
import {useCookies} from 'react-cookie'
const ItemsPage = () => {
const [cookies] = useCookies(['userId'])

  return (
    <>
    <ItemProvider>
    <div className='pageContainer'>
      <div id='userItemsbox'>
        {cookies.userId ?
        <UserItems/>
        :
        <GuestItems/>
        }
      </div>
    </div>
    </ItemProvider>
    </>
  );
}

export default ItemsPage;

