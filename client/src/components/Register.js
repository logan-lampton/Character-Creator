import React, { useState } from 'react';
import {useHistory, Link, Redirect} from 'react-router-dom'

function Register({updateUser}) {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        passwordConfirmation:''
    })
    // add in error handlers
    // const [errors, setErrors] = useState([])
    const history = useHistory()

    //defining what the user will make the form data by typing in their info
    const {name, email, password, passwordConfirmation} = formData

    //handling creating the user variable to reflect the info
    function onSubmit(e) {
        e.preventDefault()
        const user = {
            name,
            email,
            password,
            passwordConfirmation
        }

        //the fetch that will POST the new user to the backend
        fetch('/users', {
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(user => {
            updateUser(user)
            history.push(`/users/${user.id}`)
            window.location="/"
        })
        // }else {
        //     res.json().then(json => setErrors(this.entries(json.errors)))
        // }
    
    }

    //telling the app to update the form to reflect what the user types into the physical space
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value})
    }

    //what shows on the screen
    return (
        <div className="auth-form-container">
                <h1>Register</h1>
            <form className="register-form" onSubmit={onSubmit}>
                <label>Username</label>
                    <input type="text" name="name" placeholder="enter username" value={name} onChange={handleChange} />
                <label>Email</label>
                    <input type="text" name="email" placeholder="enter email" value={email} onChange={handleChange} />
                <label>Password</label>
                    <input type="password" name="password" placeholder="enter password" value={password} onChange={handleChange} />
                <label>Password Confirmation</label>
                    <input type="password" name="passwordConfirmation" placeholder="reenter password" value={passwordConfirmation} onChange={handleChange} />
                <input type="submit" value="Sign up!"/>
            </form>
            <Link to="/">
                <button className="link-btn">Already have an account? Log in here!</button>
            </Link>
        </div>
    )

}

export default Register
