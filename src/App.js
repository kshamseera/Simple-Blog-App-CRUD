import React, { useState,useEffect } from 'react'
import{BrowserRouter,Switch, Route} from 'react-router-dom'
import blogData from './data/post_data'
import Nav from './components/Nav'
import BlogPosts from './components/BlogPosts'
import BlogPost from './components/BlogPost'
import NewBlogPost from './components/NewBlogPost'

const App = () => {
  const [blogPosts, setBlogPosts] = useState([])
  useEffect(() => {
    setBlogPosts(blogData)
  },[])

  function getPostFromId(id) {
    // console.log("id:",id)
    return blogPosts.find((post) => post._id === parseInt (id))
  }

  function addBlogPost(post) {
    setBlogPosts([...blogPosts, post])
  }

  //generating new ids for the new post
  function getNextId(){
    const ids = blogPosts.map((post) => post._id)
    return ids.sort()[ids.length-1]+1
  }

  return (
    <div >
    <BrowserRouter>
    <Nav/>
       <h1>Many Mumbling Mice</h1> 
    <Switch>
       <Route exact path ="/" render={(props) => <BlogPosts {...props} postData ={blogPosts}/>} />
       <Route exact path="/posts/new" render={(props) => 
       //here execute getNextId is exicuting here to get next id
         <NewBlogPost {...props} addBlogPost={addBlogPost} nextId ={getNextId()} />} /> 
       <Route exact path="/posts/:id" render={(props) =>
       //before rendering blogpost it will execute getPostFromId from props. id will always get through  props.match.params,that is part of Route component
         <BlogPost {...props} post={getPostFromId(props.match.params.id)}/>}/>
    </Switch>
    </BrowserRouter>
    </div>
  )
}

export default App
