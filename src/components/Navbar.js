const Navbar = () => {
    return (
        <nav id="navbar">
            <a href="#Header"><img className ="logo" src="./logo-large.png" alt="logo"/></a>
            <ul className = "nav-wrapper">
                <li className ="nav-item"><a href="#Header"><span>portfolio.</span></a></li>
                <li className ="nav-item"><a href="#Gallery"><span>gallery.</span></a></li>
                <li className ="nav-item"><a href="#Blog"><span></span>blog.</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
