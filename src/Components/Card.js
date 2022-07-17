import { useNavigate } from 'react-router-dom'

const Card = ({itemList}) => {

    const navigate = useNavigate()

    return(
        <div className='card-container' key={itemList.id}>
            <div className='card-img-container'>
                <img src={itemList.image} className='card-image' />
            </div>
            <div className='product-description'>
                <div className='card-title-container'> 
                   <h3 className='card-title'>{itemList.title}</h3>
                </div>
                    <div className='card-rating-container'>
                        <span className='card-rating'>{itemList.rating.rate} <b>✰</b></span>
                        <span>({itemList.rating.count})</span>
                    </div>
                        <div className='card-price-container'>
                            <b className='card-price'>₹ {itemList.price}</b>
                        </div>
                            <div className='btn-details-container'>
                                <button className='btn-details' onClick={() => navigate('product-details', {state: {product : {itemList}} })}>View Details</button>
                            </div>
                    </div>
        </div>
    )
}

export default Card