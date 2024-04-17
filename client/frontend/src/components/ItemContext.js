import { createContext, useState} from 'react';
export const ItemContext = createContext();



export const ItemProvider = ({ children }) => {
  const [itemDetails, setItemDetails] = useState({})
  const [showItem, setShowItem] = useState(false);


  return (
     <ItemContext.Provider value={{
      itemDetails,
      setItemDetails,
      showItem,
      setShowItem

      }}>
       {children}
     </ItemContext.Provider>

  );
 };