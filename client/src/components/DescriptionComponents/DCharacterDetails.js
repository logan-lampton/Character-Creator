import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'


function DCharacterDetails() {

    const [formData, setFormData] = useState({
        alignment:'',
        faith:'',
        lifestyle:''
    })
    // add in error handlers
    // const [errors, setErrors] = useState([])
    const history = useHistory()

    //defining what the user will make the form data by typing in their info
    const {alignment, faith, lifestyle} = formData

    //handling creating the user variable to reflect the info
    function onSubmit(e) {
        e.preventDefault()
        const characterDetails = {
            alignment, 
            faith,
            lifestyle
        }

    //     //the fetch that will POST the new user to the backend
    //     // fetch('/character_details', {
    //     //     method:'POST',
    //     //     headers:{'Content-Type': 'application/json'},
    //     //     body:JSON.stringify(characterDetails)
    //     // })
    //     // .then(res => res.json())
    //     // .then(characterDetails => {
    //     //     updateCharacter(characterDetails)
    //     //     history.push(`/character_details/${character.id}`)
    //     // })
    //     // }else {
    //     //     res.json().then(json => setErrors(this.entries(json.errors)))
    //     // }
    }

    //telling the app to update the form to reflect what the user types into the physical space
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value})
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <label>Alignment</label>
                <input type="text" name="alignment" placeholder="enter alignment" value={alignment} onChange={handleChange} />
            <label>Faith</label>
                <input type="text" name="faith" placeholder="enter faith" value={faith} onChange={handleChange} />
            <label>Lifestyle</label>
                <input type="text" name="lifestyle" placeholder="enter lifestyle" value={lifestyle} onChange={handleChange} />
            <input type="submit" value="Submit character details" />
        </form>
    )
}

export default DCharacterDetails