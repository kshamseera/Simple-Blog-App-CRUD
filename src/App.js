import React, { useState,useEffect } from 'react'
import{BrowserRouter,Switch, Route} from 'react-router-dom'
import blogData from './data/post_data'
import Nav from './components/Nav'
import BlogPosts from './components/BlogPosts'
import BlogPost from './components/BlogPost'
import NewBlogPost from './components/NewBlogPost'
import EditBlogPost from './components/EditBlogPost'
import Register from './components/Register'
import Login from './components/Login'

const App = () => {
  const[loggedInUser, setLoggedInUser] = useState(null)
  const [blogPosts, setBlogPosts] = useState([])
  

  useEffect(() => {
    setBlogPosts(blogData)
  },[])

  useEffect(()=>{
    //check local storage for a logged in user
    const user = getUserFromLocalStorage();
    user && setLoggedInUser(user)
  },[])

  //once user logged in it stores data in local storage
  function setUserInLocalStorage(user) {
    user ? localStorage.setItem("loggedInUser", user)
    : localStorage.removeItem("loggedInUser")
  }

  // taking the data from local storage
  function getUserFromLocalStorage(){
    return localStorage.getItem("loggedInUser")
  }

  function getPostFromId(id) {
    // console.log("id:",id)
    return blogPosts.find((post) => post._id === parseInt (id))
  }

  //Register user (here set the redirection to home after register done.)
  function handleRegister(user, history){
    setLoggedInUser(user.username)
    history.push("/")
  }
  //login user
  function handleLogin(user,history){
    setLoggedInUser(user.username)
    setUserInLocalStorage(user.username)
    history.push("/")
  }

  //logout user
  function handleLogout(){
    setLoggedInUser(null)
    //clear data from localstorage
    setUserInLocalStorage(null)
  }

  //generating new ids for the new post
  function getNextId(){
    const ids = blogPosts.map((post) => post._id)
    return ids.sort()[ids.length-1]+1
  }

  // add new post
  function addBlogPost(post) {
    setBlogPosts([...blogPosts, post])
  }

  //delete a post
  function deleteBlogPost(id){
    //generate a new array that includes the post with the id to delete
    const otherBlogPosts = blogPosts.filter((post) =>  post._id !== parseInt(id))
    setBlogPosts(otherBlogPosts);
  }
//update post
  function updateBlogPost(updatedPost){
    //remove the post with and add new post with the same id
    const otherBlogPosts = blogPosts.filter((post) =>  post._id !== parseInt(updatedPost._id))
    setBlogPosts([...otherBlogPosts, updatedPost])
 }

  return (

    <div >
    <BrowserRouter>
    <Nav loggedInUser={loggedInUser} handleLogout={handleLogout}/>
       <h1>Many Mumbling Mice</h1> 
    <Switch>
       <Route exact path ="/" render={(props) => <BlogPosts {...props} postData ={blogPosts}/>} />
       <Route exact path="/posts/new" render={(props) => 
       //here execute getNextId is exicuting here to get next id
         <NewBlogPost {...props} addBlogPost={addBlogPost} nextId ={getNextId()} />} /> 
       <Route exact path="/posts/:id" render={(props) =>
       //before rendering blogpost it will execute getPostFromId from props. id will always get through  props.match.params,that is part of Route component
         <BlogPost {...props} post={getPostFromId(props.match.params.id)} showControls deleteBlogPost={deleteBlogPost} />}/>
         <Route exact path ="/posts/edit/:id" render={(props) => 
         <EditBlogPost {...props} post={getPostFromId(props.match.params.id)} updateBlogPost={updateBlogPost}/> }/>
         <Route exact path ="/register" render={(props)=> <Register {...props} handleRegister={handleRegister} />} />
         <Route exact path="/login" render={(props) => <Login {...props} handleLogin={handleLogin} />} />
    </Switch>
    </BrowserRouter>
    </div>
  )
}

export default App
