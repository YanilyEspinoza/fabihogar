import './App.css';
import Navbar from './components/header/Navbar.jsx';
import ItemListContainer from './components/main/ItemListContainer';
import ItemDetailContainer from './components/main/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/cart/Cart';
import Nosotros from './components/main/Nosotros';
import Contacto from './components/main/Contacto';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />  
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Bienvenidos a FabiHogar!!!" />}/>
        <Route path='/nosotros' element={<Nosotros />}/>
        <Route path='/category/:categoryName' element={<ItemListContainer greeting="Todas las categorías para el hogar!!!" />}/>
        <Route path='/contacto' element={<Contacto />}/>
        <Route path='/detail/:idProd' element={<ItemDetailContainer />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
