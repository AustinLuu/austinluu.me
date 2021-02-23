import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div data-aos="fade-up"data-aos-duration="750"data-aos-easing="custom"data-aos-offset="100" className = 'lt-content-column copyright' >
            <img src="./static/roll.gif" alt="roll gif" style={{width: "256px"}}/>
            <br/>
                Designed and <a href="https://github.com/AustinLuu/austinluu.me" rel="noopener noreferrer" target="_blank" style={{fontWeight: "600", textDecoration:"none"}}>developed</a> with ☕️ &amp; ❤️ by Austin Luu © 2021.
            </div>
        </footer>
    )
}

export default Footer
