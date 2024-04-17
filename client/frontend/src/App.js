import './App.css';
import LoginPage from './routes/LoginPage'
import ItemsPage from './routes/ItemsPage'
import { Routes, Route, useNavigate } from "react-router-dom";
import {UserProvider} from './components/UserContext'

function App() {
  return (
    <div className="App">

      <UserProvider>
        <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path='/Items' element = {<ItemsPage/>} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
