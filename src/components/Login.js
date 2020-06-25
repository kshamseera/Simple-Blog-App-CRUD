import React,{useState} from 'react'

export default function Login(props) {

	const {handleLogin, history} = props
	// form state
	const initialFormState = {
		username: '',
		password: ''
	}
	const [formState, setFormState] = useState(initialFormState)

    //handle change
	function handleChange(event) {
		const name = event.target.name
		const value = event.target.value

		setFormState({
			...formState,
			[name]:value
		})
	}
    //handle submit
	function handleSubmit(event) {
		event.preventDefault()
		handleLogin(formState, history)
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label>Username</label>
				<input type='text' name='username' value={formState.username} onChange={handleChange}></input>
				<label>Password</label>
				<input type='password' name='password' value={formState.password} onChange={handleChange}></input>
				<input type='submit' value='Login'></input>
			</form>	
		</div>
	)
}