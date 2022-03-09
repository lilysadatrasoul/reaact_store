import React from 'react'

function SuggestedGoods({id,title,price,image}) {
  return (
    <div className=" card  ms-5 me-5 border border-0 " style={{width:"17rem", height:"30rem"}}>
        
        <img src={image} className="card-img-top w-100 ms-5 me-5 mt-5"  style={{height:"17rem"}} alt="..."/>
            <div className="card-body ms-5 me-5  " style={{height:"8rem"}}>
            <div className="title">{title}</div>
            <div className="price">{price}</div>
            <div className="id">{id}</div>
            </div>
            
    </div>
  )
}

export default SuggestedGoods