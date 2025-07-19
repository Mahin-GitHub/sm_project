import React from 'react'
import BlogCart from './BlogCart'

const OurBlog = () => {
    return (
        <section className="container mx-auto px-4 py-12">
            <div className="text-center max-w-2xl mx-auto mb-10">
                <p className="text-green-600 font-semibold">Our Blog</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800 dark:text-white">Fresh Harvest Blog</h2>
                <p className="text-gray-600 dark:text-gray-300">
                    Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration.
                </p>
            </div>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <BlogCart
                    title="Top 10 Summer Vegetables"
                    date="July 10, 2025"
                    image="/assets/images/blog-1.png"
                    description="Discover the best vegetables to enjoy this summer season for a healthy lifestyle."
                />
                <BlogCart
                    title="Top 10 Summer Vegetables"
                    date="July 10, 2025"
                    image="/assets/images/blog-2.png"
                    description="Discover the best vegetables to enjoy this summer season for a healthy lifestyle."
                />
                <BlogCart
                    title="Top 10 Summer Vegetables"
                    date="July 10, 2025"
                    image="/assets/images/blog-3.png"
                    description="Discover the best vegetables to enjoy this summer season for a healthy lifestyle."
                />

            </div>
        </section>
    )
}

export default OurBlog
