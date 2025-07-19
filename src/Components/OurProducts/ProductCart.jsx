
import React from 'react'

const ProductCart = ({ image, name, price }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 ease-in-out flex flex-col">

            <div className="overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-48 object-cover rounded-t-lg transform transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                />
            </div>


            <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                    <h3 className="text-lg font-semibold text-gray-900 truncate" title={name}>
                        {name}
                    </h3>

                    <p className="text-md text-green-600 font-bold mt-2">${price}</p>
                </div>


                <button
                    className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                    onClick={() => alert(`"${name}" added to cart!`)}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default ProductCart
