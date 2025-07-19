import React from 'react'

const BlogCart = ({ title, date, image, description }) => {
    return (
        <div className="card bg-base-100 w-96 shadow-md hover:shadow-lg transition-shadow duration-300">
            {/* Image */}
            <figure className="relative">
                <img
                    src={image}
                    alt="Blog Cover"
                    className="w-full h-56 object-cover"
                />
            </figure>

            {/* Card Body */}
            <div className="card-body">
                {/* Date */}
                <p className="text-sm text-gray-500">{date}</p>

                {/* Title */}
                <h2 className="card-title text-xl font-bold text-gray-800">
                    {title}
                </h2>

                {/* Short Description */}
                <p className="text-gray-600">
                    {description}
                </p>

                {/* Read More Button */}
                <div className="card-actions justify-start mt-4">
                    <button className="btn btn-sm btn-outline btn-success ">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BlogCart
