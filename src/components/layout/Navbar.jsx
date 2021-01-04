import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import NavItems from './NavItems';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light d-flex justify-content-center">
                <Link to='/' className='navbar-brand'>
                    <h3>TodoApp</h3>
                </Link>
                <NavItems />
            </nav>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
}

export default connect(mapStateToProps)(Navbar);