import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Login} from '@/pages/Login'
import { Register } from "@/pages/Register"
import NavBar from "@/components/NavBar"
import ProductsList from "@/components/ProductList"
import Checkout from "@/components/Checkout"
import { Home } from "@/pages/Home";

function App () {
    return (
    <Router>
        <NavBar/>
        <Routes>
            <Route path="/" element={< Home />}/>
            <Route path="/Login" element={<Login/>} />
            <Route path="/products" element ={<ProductsList/>} />
            <Route path='/register' element={<Register />} />
            <Route path="/checkout" element={<Checkout />} />
        </Routes>
    </Router> 
    )

}
export default App