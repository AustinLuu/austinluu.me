import PropTypes from 'prop-types'

const Header = () => {
    return (
        <header id='Header'>
            <div id ='landing-overlay'>
                <h1>Hi!</h1>
                <h1>I’m</h1>
                <h1><span class="word col1">Austin.</span><span class="word col2">a student.</span><span class="word col3">an engineer.</span><span class="word col4">a power lifter.</span></h1>
                <ul id='sub-nav'>
                    <li>
                        <a href='#about'>/about</a>
                    </li>
                    <li>
                        <a href='#experience'>/prev</a>
                    </li>
                    <li>
                        <a href='#projects'>/projects</a>
                    </li>
                    <li>
                        <a href='#gallery'>/gallery</a>
                    </li>
                    <li>
                        <a href='#blog'>/blog</a>
                    </li>
                </ul>
            </div>
        </header>

    )
}

Header.defaultProps = {
    title: "Austin"
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header
