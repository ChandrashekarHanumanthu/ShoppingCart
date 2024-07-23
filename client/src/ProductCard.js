import React from "react"
import { Link } from "react-router-dom"
import './productcard.css'

const ProductCard = ({ id, title, image_url }) => {
    return (
        <Link to={`/product/${id}`} className="item-link">
            <div className="product-card">
                <img src={image_url} alt={title} className="image" />
                <div className="product-details">
                    <p className="product-title">{title}</p>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard
