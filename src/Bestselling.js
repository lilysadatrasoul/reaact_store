import React from 'react'

function Bestselling({id,title,price,image}) {
  return (
    <div className=" card w-25">
        
        <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
            <div className="title">{title}</div>
            <div className="price">{price}</div>
            <div className="id">{id}</div>
            </div>
   </div>
   
  )
}

export default Bestselling