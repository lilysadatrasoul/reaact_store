import {useState} from 'react'




function ProductCard({id,title,price,description,image,setQuantityT}) {
const[number,SetNumber]=useState(0)
const addToCart=()=>{

SetNumber(number+1)
setQuantityT()

}

  return (
    <div className="">
    
    <div className="card ms-5 me-5 border border-0" style={{width:"17rem", height:"40rem"}} >
     
        
            <img src={image} className="card-img-top w-100 ms-5 me-5 mt-5" style={{height:"17rem"}} alt="..."/>
            <div className="card-body  ms-5 me-5  " style={{height:"10rem"}}>
            <div className="title">{title}</div>
            <div className="price">{price}</div>
            <div className="id">{id}</div>
            </div>
            <div id="number"className="fs-3  ms-5 me-5 ">{number}</div>
            <div className="">
            <button type="button"  id="add-basket" 
            class="btn btn-primary rounded-pill  ms-5 me-5 " onClick={addToCart}>
              به سبد خرید اضافه کنید</button>
            </div>
    </div>
    </div>
  
   
  )
}

export default ProductCard