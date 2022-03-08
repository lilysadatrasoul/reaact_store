import React, { useState } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap-icons/font/bootstrap-icons.css"


import Header from './Header';
import Nav from './Nav';
import Slider from './Slider';
import ProductCard from './ProductCard';
import Bestselling from './Bestselling';
import SuggestedGoods from './SuggestedGoods';
// import product1 from "./assets/images/product1.jpg"
// import product2 from "./assets/images/product2.jpg"
// import product3 from "./assets/images/product3.jpg"
// import product4 from "./assets/images/product4.jpg"

function App() {
  const [products, setProducts] = useState([])
  fetch("https://fakestoreapi.com/products?limit=4 ")
        .then(res=>res.json())
        .then(data=>setProducts(data))
        .catch(error=>console.log(error))

  const [jewelry, setJewelry] = useState([])
  fetch("https://fakestoreapi.com/products/category/jewelery")
        .then(res=>res.json())
        .then(jewel=>setJewelry(jewel))

  const [suggested, setSuggested] = useState([])
  fetch("https://fakestoreapi.com/products?limit=10")   
        .then(res=>res.json())
        .then(sugg=>setSuggested(sugg)) 
 
  return (
    <div className="App" dir='rtl'>
       <Header />
       <nav className="dropdown-navbar">
       <Nav/>
       </nav>
       <Slider/>
       <div className="product">محصولات</div>
       
         <div className=" d-flex flex-wrap">
         {
           products.map( item=>
            <ProductCard id={item.id} title={item.title} price={item.price} description={item.description} image={item.image} />  

           )
         }
         </div>
         <div className="product">پرفروش ترین ها</div>
         <div className="d-flex flex-wrap">
         {
           jewelry.map( item=>
            <Bestselling id={item.id} title={item.title} price={item.price} image={item.image} />  

           )
         }
         </div>
         <div className="product">کالاهای پیشنهادی </div>
         <div className="d-flex flex-wrap">
         {
           suggested.map( item=>
            <SuggestedGoods id={item.id} title={item.title} price={item.price} image={item.image} />  

           )
         } 
      </div>
     </div>
  );
}

export default App;
