import React, { useState, useEffect } from 'react';

const EditBlogPost = ({history, post,updateBlogPost}) => {
    //styling
    const divStyles = {
        display:'grid',
        width: '100vw'
    }
    const inputStyles = {
        width: "70vw",
        margin:'.5em'
    }
    const labelStyles = {
        fontSize: '1.2em'
    }
    const textareaStyles = {
        height:'200px',
        margin: '.5em',
        width: '70vw'
    }
    //state
    const initialFormState = {
        title: "",
        category: "",
        content: ""
    }
    const[formState,setFormState] = useState(initialFormState)
    //set the values of post .
    useEffect(()=> {
        post&& setFormState({
            title: post.title,
            category: post.category,
            content:post.content
        })
    },[post])

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        setFormState({...formState, [name]:value })
    }

    function handleSubmit(event){
        event.preventDefault()
        const updatePost = {
            _id: post._id,
            title: formState.title,
            category: formState.category,
            modified_date: new Date(),
            content: formState.content
        }
        updateBlogPost(updatePost)
        history.push("/")
        // history.push(`/posts/${nextId}`)
    }

    return ( 
        <form onSubmit ={handleSubmit}>
            <div style ={divStyles}>
                <label style ={labelStyles}>Title</label>
                <input style ={inputStyles} required type = "text" name ="title" value={formState.title}placeholder ="enter title" onChange ={handleChange}></input>
            </div>
            <div style ={divStyles} >
                <label style ={labelStyles} >Category</label>
                <input style ={inputStyles} type = "text" name ="category" value = {formState.category} placeholder ="enter a category" onChange ={handleChange} ></input>
            </div>
            <div style ={divStyles} >
                <label style ={labelStyles} >Content</label>
                <textarea style ={textareaStyles} type = "text" name ="content" valu= {formState.content}placeholder ="enter content" onChange ={handleChange} ></textarea>
            </div>
                <input type ="submit" value="Update post"></input>
        </form>
     );
}
 
export default EditBlogPost;