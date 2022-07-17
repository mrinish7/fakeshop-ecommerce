import './Nav.css'
import UserLogin from './UserLogin'
import { useNavigate } from 'react-router-dom'


const Nav = () => {

    const Login = useNavigate() 
    const Signup = useNavigate()

    return(
        <nav className="nav-main">
            <h2 className="nav-header">Fake Shop</h2>
            <div className='search-container'>
                <input className='search-bar' />
                <button className='search-icon'>🔍</button>
            </div>
            <ul className='nav-list'>
                <a onClick={() => Login('user-login')} ><li>Login</li></a>
                <a onClick={() => Signup('user-signup')} ><li>Sign-up</li></a>
            </ul>
        </nav>
    )
}


export default Nav  