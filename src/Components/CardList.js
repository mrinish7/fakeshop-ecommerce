import react, { useEffect, useState }  from'react'
import axios from'axios'
import './Card.css'
import Card from './Card'


const CardList = () => {

    const [item, setItem] = useState([])
    
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                console.log(res)
                setItem(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    return(
        <div className='main-container'>
            {
                item.map(item =>
                    (<Card itemList={item} key={item.id} />
                    )
                )
            }
        </div>
    )
}


export default CardList