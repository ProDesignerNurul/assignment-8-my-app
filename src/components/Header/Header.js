import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='nav-menu'>
                <a href="index.html">Home</a>
                <a href="blogs.html">Blogs</a>
            </nav>
        </div>
    );
};

export default Header;