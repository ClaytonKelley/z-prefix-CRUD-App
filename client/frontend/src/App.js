import './App.css';
import LoginPage from './routes/LoginPage'
import ItemsPage from './routes/ItemsPage'
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path='/Items' element = {<ItemsPage/>} />
        </Routes>

    </div>
  );
}

export default App;
