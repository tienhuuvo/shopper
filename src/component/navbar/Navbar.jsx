import './Navbar.css'
import { Link } from 'react-router-dom'; // Thêm import của Link từ react-router-dom
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { useContext, useRef, useState } from 'react'
import { ShopContext } from '../../context/ShopContext';

const Navbar = () => {
    const [menu, setMenu] = useState('shop')
    const {getTotalCartItem} = useContext(ShopContext)
    const menuRef = useRef()

    const dropdown_toggle = () => {
        menuRef.current.classList.toggle('nav-menu-visible');
        menuRef.current.classList.toggle('open');
    };      

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <div onClick={dropdown_toggle} className='nav-dropdown'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"  className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            <ul ref={menuRef}  className="nav-menu">
                <li onClick={() => {setMenu("shop")}}><Link to='/'>Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
                <li onClick={() => {setMenu("women")}}><Link to='/womens'>Women</Link> {menu==="women"?<hr/>:<></>}</li>
                <li onClick={() => {setMenu("men")}}><Link to='/mens'>Men</Link> {menu==="men"?<hr/>:<></>}</li>
                <li onClick={() => {setMenu("kid")}}><Link to='/kids'>Kid</Link> {menu==="kid"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem('auth-token') ? <button onClick={() => {localStorage.removeItem('auth-token'); window.location.replace('/')}}>Logout</button> 
                : <Link to='/login'><button>Login</button></Link>}
                <Link to='/cart'><img src={cart_icon} alt="" /></Link> 
                <div className="nav-cart-count">{getTotalCartItem()}</div>
            </div>
        </div>
    )
}

export default Navbar;
