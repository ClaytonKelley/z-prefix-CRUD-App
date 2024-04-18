import {useState, useContext, useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import {useCookies} from 'react-cookie'
import {ItemContext} from './ItemContext'
import ItemModal from './ItemModal'

const GuestItems = () => {
const [items, setItems] = useState([])
const [cookies] = useCookies(['userId'])
const {itemDetails, setItemDetails, showItem, setShowItem} = useContext(ItemContext)


  useEffect(() => {
      fetchallItems();
  }, [])

  const fetchallItems = () => {
    fetch(`http://localhost:8080/Items`)
      .then((response) => response.json())
      .then((itemdata) => setItems(itemdata))
  }


  const handleItemClick = (item) => {
    setItemDetails(item);
    setShowItem(true);
 };

 const handleCloseModal = () => {
    setShowItem(false);
    setItemDetails({});
 };

 const shortenText = (text, charLimit) => {
  return text.length > charLimit ? text.substring(0, charLimit) + ' ... ' : text;
 }



  return (
    <>
      <div className='PageBody'>
        <div id='all-items-box'>
            <Table striped bordered hover variant="dark">
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
                <td>{shortenText(item.Description, 100)}</td>
              </tr>
          )
            )}
            </tbody>
            </Table>
            <ItemModal show={showItem} fetchfunc={null} handleClose={handleCloseModal} item={itemDetails} />
        </div>
      </div>
    </>
  );
}

export default GuestItems;