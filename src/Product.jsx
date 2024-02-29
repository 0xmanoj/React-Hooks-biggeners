import React from 'react'
import ItemDiscreption from './ItemDiscreption';

const Product = ({name,discreption,price})=> {
  return (
    <div>
      <ItemDiscreption name={name} discreption={discreption}/>
      <h3>${price}</h3>
    </div>
  )
}

export default Product;
