import React from 'react'
import PropTypes from 'prop-types'

const Header = () => {
    return (
        <header id='Header'>
            <div id ='landing-overlay' className = 'lt-content-column'>
                <h1>Hi!</h1>
                <div class="rotating-text">
                <h1>I’m <span class="word col1">Austin.</span><span class="word col2">a student.</span><span class="word col3">an engineer.</span><span class="word col4">an athlete.</span></h1>
                </div>
                <ul id='sub-nav'>
                    <li>
                        <a href='#about'>/about</a>
                    </li>
                    <li>
                        <a href='#projects'>/projects</a>
                    </li>
                    <li>
                        <a href='#experience'>/prev</a>
                    </li>
                    <li>
                        <a href='#footer'>/contact</a>
                    </li>
                </ul>
            </div>
        </header>
    )
}

Header.defaultProps = {
    trait: 'Austin.'
}

Header.propTypes = {
    trait: PropTypes.string
}

export default Header
