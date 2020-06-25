import React from 'react'
import moment from 'moment'
import {Link} from 'react-router-dom'

const BlogPost = ({post}) => {

    //checking , if there is no post it will return null.Otherwise will get an error
    if(!post) return (<p>We do not have a post with that id</p>)

    const linkStyles = {
        textDecoration: "none",
        color:'black'
    }

    const{title, modified_date, category, content} = post
    return (
        <div>
        <Link style={linkStyles} to = {`/posts/${post._id}`}>
            <h2>{title}</h2>
        </Link>
            <p>{moment(modified_date).fromNow()}</p>
            <p>{category}</p>
            <p>{content}</p>
        </div>
     );
}
 
export default BlogPost 