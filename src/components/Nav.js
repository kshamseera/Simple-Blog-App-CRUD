import React from 'react';
import {Link} from 'react-router-dom'

const Nav = (props) => {
    const{loggedInUser, handleLogout} = props

    const divStyles={
        display: 'flex',
        justifyContent: 'space-between'
    }
    const linkStyles={
        fontSize: '1.2em',
        textDecoration: 'none',
        margin: '.5em'
    }
    const space ={
        marginRight: "1em"
    }
    return ( 
        <div style={divStyles}>
        <Link style={linkStyles} to="/">Home</Link>
        <Link style={linkStyles} to="/posts/new">Add a post</Link>
        {/* //checking if user is logged in.If "yes" display logout otherwise "Register" and "login".we can only use ternery(can't use if) */}
        {loggedInUser 
        ? (	<div >
                <span style={space}>{loggedInUser}</span>
                <Link style={linkStyles} to="/" onClick={handleLogout}>Logout</Link>
            </div>)
        : (	<div>
                <Link style={linkStyles} to="/register">Register</Link>
                <Link style={linkStyles} to="/login">Login</Link>
            </div>)
        }
        
    </div>
     );
}
 
export default Nav;