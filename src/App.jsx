import React, {useState} from "react";

import './App.css'
import Header from './components/header/header';
import CardUser from './components/CardUser/CardUser';
import NavBar from "./components/NavBar/NavBar";
import itemListContainer from "./components/itemListContainer/itemListContainer"

    
const App = () => {
  // [el nombre de mi variable/ la funcion que me permite mutar esa variable]
  //usestate (el valor inicial de el nombre de mi variable)
  const [number, setNumber] = useState(3)
  return (
   <div>
    <Header/>
    <NavBar/>
    <itemListContainer/>
    <div className='UserSection'>
      <CardUser
       name= "Flat White"
       description="Bebida a base de espresso que contiene leche cremada."
       img="https://media.istockphoto.com/id/891706644/es/foto/domingo-por-la-ma%C3%B1ana-blanca-plana.jpg?s=612x612&w=0&k=20&c=xuJHXbgGaMXE7l-VKalk0hICjKEsg9bxu13_ZdZvO6c="
      />
      <CardUser
       name= "Americano"
       description="bebida a base de espresso, rebajada con agua caliente."
       img="https://www.cnabrasil.org.br/storage/arquivos/cafe_cna.jpg"
      />
      <CardUser
       name= "Latte"
       description="Bebida de café de origen italiano hecha con espresso y leche al vapor."
       img="https://www.nespresso.com/ncp/res/uploads/recipes/nespresso-recipes-Latte-Macchiato.jpg"
      />
    </div>
    <div className="CounterSection">
      <p>{number} variedades de café</p>
    </div>
   </div>
    
  );
}

export default App
