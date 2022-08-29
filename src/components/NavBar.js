import CartWidget from "./CartWidget";
const NavBar = () => {
    return (
        <nav className="navBar">
            <a href="#"><img src="/logo1.png" class="logo" id="logo"
                alt="" /></a>
            <ul className="navItems">
                <li> <a className="home" href="#">Home</a></li>
                <li> <a className="products" href="#">Products</a></li>
            </ul>
            <button className="login">Login</button>
            < CartWidget />
        </nav>



    )
}

export default NavBar
