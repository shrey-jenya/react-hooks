import React from 'react'
import { useParams } from 'react-router-dom'

const ProductID = () => {
    const {id} = useParams()
  return (
    <div>
      <h1>Product {id}</h1>
    </div>
  )
}

export default ProductID
