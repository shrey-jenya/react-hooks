import React, { useEffect, useState } from 'react'

const Cards = () => {
     const [product, setProduct] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/`)
                const data = await response.json()
                setProduct(data)
                console.log(data)
            } catch (error) {
                console.error('error', error)
            }
        }
        fetchData()
    }, [])
  return (
    <div>
      <div className='parent' >
                {product.map((item) => (
                    <ul className='cards' key={item.id}>
                        <div className='img-section'>
                            <img src={item.image} alt=""  />
                        </div>
                        <h2>{(item.title).slice(0, 20)}</h2>
                        <p> ${item.price}  </p>
                    </ul>
                ))}
            </div>
    </div>
  )
}

export default Cards
