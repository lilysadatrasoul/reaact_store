import {useState} from 'react'




function ProductCard({id,title,price,description,image}) {
const[number,SetNumber]=useState(10)
const addToCart=()=>{

SetNumber(number+10)

}

  return (
    
    <div className="card w-25 ">
     
        
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body ">
            <div className="title">{title}</div>
            <div className="price">{price}</div>
            <div className="id">{id}</div>
            <div className="description">{description}</div>
            </div>
            <div id="number"className="fs-3">{number}</div>
            <button type="button" id="add-basket" 
            class="btn btn-primary" onClick={addToCart}>
              به سبد خرید اضافه کنید</button>
    </div>
  
   
  )
}

export default ProductCard