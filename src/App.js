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




        const [quantityTotal, setQuantityTotal] = useState(0)
        const setQT=()=>{
          setQuantityTotal(quantityTotal+1)
        }
 
  return (
    <div className="App" dir='rtl'>
       <Header qt={quantityTotal}/>
       <nav className="dropdown-navbar">
       <Nav/>
       </nav>
       <Slider/>
       <div className="product mt-5">محصولات</div>
       
         <div className=" d-flex flex-wrap  mb-5">
         {
           products.map( item=>
            <ProductCard id={item.id} title={item.title} price={item.price}  image={item.image} setQuantityT={setQT}/>  

           )
         }
         </div>
         <div className="product mt-5">پرفروش ترین ها</div>
         <div className="d-flex flex-wrap">
         {
           jewelry.map( item=>
            <Bestselling id={item.id} title={item.title} price={item.price} image={item.image} />  

           )
         }
         </div>
         <div className="product mt-5">کالاهای پیشنهادی </div>
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
