const Navbar = () => {
    return (
        <nav id="navbar">
            <a href="#header"><img className ="logo" src="./logo-large.png" alt="logo"/></a>
            <ul className = "nav-wrapper">
                <li className ="nav-item"><a href="#header"><span>portfolio.</span></a></li>
                <li className ="nav-item"><a href="#gallery"><span>gallery.</span></a></li>
                <li className ="nav-item"><a href="#blog"><span></span>blog.</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
