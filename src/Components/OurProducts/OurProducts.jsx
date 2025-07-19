'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCart from './ProductCart'

const tabs = ['All', 'Fruits', 'Vegetables', 'Salad']
const PRODUCTS_PER_PAGE = 8

const OurProducts = () => {
    const [activeTab, setActiveTab] = useState('All')
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    const [visibleCount, setVisibleCount] = useState(PRODUCTS_PER_PAGE)

    // Fetch categories
    useEffect(() => {
        axios
            .get('https://test-2-tan-chi.vercel.app/api/v1/category')
            .then(res => {
                setCategories(res.data.data || [])
            })
            .catch(err => console.error('Category fetch error:', err))
    }, [])

    // Fetch products
    useEffect(() => {
        axios
            .get('https://code-commando.com/api/v1/products')
            .then(res => {
                setProducts(res.data.data || [])
            })
            .catch(err => console.error('Product fetch error:', err))
    }, [])


    const categoryMap = React.useMemo(() => {
        const map = {}
        categories.forEach(cat => {
            map[cat._id || cat.id] = cat.name
        })
        return map
    }, [categories])


    useEffect(() => {
        setVisibleCount(PRODUCTS_PER_PAGE)

        if (activeTab === 'All') {
            setFilteredProducts(products)
        } else {
            const filtered = products.filter(product => {
                const catName = categoryMap[product.categoryId]
                return catName && catName.toLowerCase() === activeTab.toLowerCase()
            })
            setFilteredProducts(filtered)
        }
    }, [activeTab, products, categoryMap])


    const loadMore = () => {
        setVisibleCount(prev => prev + PRODUCTS_PER_PAGE)
    }


    const productsToShow = filteredProducts.slice(0, visibleCount)

    return (
        <div className="container max-w-[1280px] mx-auto px-5 py-10">
            {/* Tabs */}
            <div className="flex justify-center flex-wrap gap-4 mb-8">
                {tabs.map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-5 py-2 rounded-full border transition-all duration-300 ${activeTab === tab
                            ? 'bg-green-600 text-white border-green-600'
                            : 'bg-white text-gray-700 border-gray-300 hover:bg-green-100'
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Product cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {productsToShow.length ? (
                    productsToShow.map(product => (
                        <ProductCart
                            key={product.id}
                            image={product.images?.[0] || ''}
                            name={product.productName}
                            price={product.price}
                            category={categoryMap[product.categoryId] || 'Unknown'}
                        />

                    ))
                ) : (
                    <p className="col-span-full text-center text-gray-500">
                        Product Not Found
                    </p>
                )}
            </div>


            {visibleCount < filteredProducts.length && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={loadMore}
                        className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                    >
                        See All Products
                    </button>
                </div>
            )}
        </div>
    )
}

export default OurProducts
