import PropTypes from 'prop-types'

const Header = ({title}) => {
    return (
        <header id='Header'>
            <h1>Hi!</h1>
            <h1>I'm {title}</h1>
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
                    <a href='#blog'>/blog</a>
                </li>
            </ul>
        </header>

    )
}

Header.defaultProps = {
    title: "Austin Luu"
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header
