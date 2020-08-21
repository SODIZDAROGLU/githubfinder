import React from 'react';
import PropTypes from 'prop-types';


const Navbar = ({icon, title})=> {
    // default props
    


  
        return (
            <nav className='navbar bg-primary '>
                <h1>
                <i className={icon}/>{title}
                </h1>
            </nav>
        )

}
Navbar.defaultProps = {
    title : 'Github Finder',
    icon : 'fab fa-github'
};
// making sure is a string
Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    icon : PropTypes.string.isRequired
};

export default Navbar
