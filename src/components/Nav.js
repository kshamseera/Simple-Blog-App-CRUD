import React from 'react';
import {Link} from 'react-router-dom'

const Nav = () => {

    const divStyles={
        display: 'flex',
        justifyContent: 'row'
    }
    const linkStyles={
        fontSize: '1.2em',
        textDecoration: 'none',
        margin: '.5em'
    }

    return ( 
        <div style ={divStyles}>
            <Link style ={linkStyles} to = "/">Home</Link>
            <Link style ={linkStyles} to = "/posts/new">Add post</Link>
        </div>
     );
}
 
export default Nav;