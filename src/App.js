import { Routes, Route } from "react-router-dom"

import Card from "./Components/Card"
import Home from "./Components/Home"
import Nav from "./Components/Nav"
import NoMatch from "./Components/NoMatch"
import Product from "./Components/Product"
import UserLogin from "./Components/UserLogin"
import UserSignUp from "./Components/UserSignUp"

const App = () => {
    return(
        <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="product-details" element={<Product />} />
            <Route path="user-login" element={<UserLogin/>} />
            <Route path="user-signup" element={<UserSignUp />} />
            <Route path="*" element={<NoMatch />} />
        </Routes>
    )
} 

export default App