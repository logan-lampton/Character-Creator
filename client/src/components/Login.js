import React, { useState } from 'react';
import {useHistory, Link} from 'react-router-dom'

function Login({updateUser}) {
    const [formData, setFormData] = useState({
        //initial state for the form (want it blank)
        name:'',
        email:'',
        password:''
    })
    
    const [errors, setErrors] = useState([])
    const history = useHistory()

    const {name, password} = formData

    //defining the user onSubmit
    function onSubmit(e){
        e.preventDefault()
        const user = {
            name,
            password
        }

    // Logs in user
    fetch(`/login`, {
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(user)
    })
    .then(res => {
        if(res.ok){
            res.json().then(user => {
                updateUser(user)
                history.push(`/users/${user.id}`)
                window.location="/home"
            })
        }else {
            res.json().then(json => setErrors(json.errors))
        }
    })

}

    //the change to each value in the form
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    return (
        <div className="auth-form-container">
                <h1>Log in</h1>
            <form className="login-form" onSubmit={onSubmit}>
                <label>Username</label>
                <input type="text" name="name" id="username" placeholder="insert username" value={name} onChange={handleChange}/>
                <label>Password</label>
                <input type="password" name="password" id="password" placeholder="insert password" value={password} onChange={handleChange}/>
                <button type="submit">Log In</button>
            </form>
            {errors? <div>{errors}</div>:null}
            <Link to="/register">
                <button className="link-btn">Don't have an account? Register here</button>
            </Link>
        </div>
    )
}

export default Login