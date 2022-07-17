import { useLocation } from "react-router-dom";
import Nav from "./Nav";
import './Product.css'

const Product = () => {

    const location = useLocation();
    console.log(location)

    return(
        <div className="product-container">
            <Nav />
            <div key={location.key} className='product-info-container'>
                <div className="product-image-container">
                    <img className="product-image" src={location.state.product.itemList.image} alt='product-img' />
                </div>
                <div className="product-description-container">
                    <h1 className="product-title">{location.state.product.itemList.title}</h1>
                    <h3 className="product-description">{location.state.product.itemList.description}</h3>
                    <p className="product-rating-rate">{location.state.product.itemList.rating.rate} <b>✰</b> ({location.state.product.itemList.rating.count})</p>
                    <b className="product-price">₹ {location.state.product.itemList.price}</b>
                </div>
            </div>
        </div>
    )
}


export default Product