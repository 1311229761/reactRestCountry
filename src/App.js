import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {

const [countries, setCountries] = useState([])
const [cart, setCart] = useState([])
useEffect(()=>{
  fetch('https://restcountries.eu/rest/v2/all')
  .then(response => response.json())
  .then(data => setCountries(data))
  .catch(error=>console.log("error khaiso naki"))
}, [])
const handleAddCountry =(cou)=> {
 const newCart = [...cart , cou]
 setCart(newCart)
}

  
  return (
    <div className="App">
       <p> data loaded : {countries.length}</p>
       <p> country added : {cart.length}</p>
       <Cart cart = {cart} ></Cart>

       <h1>{
         countries.map(country =><Country country={country} key ={country.alpha2Code} handleAddCountry={handleAddCountry}></Country>)
         }</h1>
     
    </div>
  );
}

export default App;
