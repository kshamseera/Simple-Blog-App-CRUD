import React,{useState} from 'react';

const Register = ({handleRegister, history}) => {
    //state for controlled form
    const initialFormState = {
        username: '',
        email: '',
        password: ''
    }
    const[formState, setFormState] = useState(initialFormState)
    //changeHandler
    function handleChange(event){
        const name = event.target.name
        const value = event.target.value
        setFormState({
            ...formState,
            [name]:value
        })
    }
    //submit handler
    function handleSubmit(event){
        event.preventDefault()
        handleRegister(formState, history)
    }

    return ( 
        <div>
            <form onSubmit ={handleSubmit}>
                <label> Username:</label>
                <input type ='text' value={formState.username}name= 'username'  onChange={handleChange}/> 
                <label> Email:</label>
                <input type ='email' value={formState.email} name= 'email'onChange={handleChange} /> 
                <label> Password:</label>
                <input type ='password' value={formState.password} name= 'password' onChange={handleChange} /> 
                <input type='submit' value='Register'></input>
            </form>
        </div>
     );
}
 
export default Register;