import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'

function Notes() {

    const [formData, setFormData] = useState({
        organizations:'',
        allies:'',
        enemies:'',
        backstory: '',
        other: ''
    })
    // add in error handlers
    // const [errors, setErrors] = useState([])
    const history = useHistory()

    //defining what the user will make the form data by typing in their info
    const {organizations, allies, enemies, backstory, other} = formData

    //handling creating the user variable to reflect the info
    function onSubmit(e) {
        e.preventDefault()
        const PhysicalCharacteristics = {
            organizations, allies, enemies, backstory, other
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
            <label>Organizations</label>
                <input type="text" name="organizations" placeholder="enter organizations you are a part of" value={organizations} onChange={handleChange} />
            <label>Allies</label>
                <input type="text" name="allies" placeholder="enter your allies" value={allies} onChange={handleChange} />
            <label>Enemies</label>
                <input type="text" name="enemies" placeholder="enter your enemies" value={enemies} onChange={handleChange} />
            <label>Backstory</label>
                <input type="text" name="backstory" placeholder="enter your backstory" value={backstory} onChange={handleChange} />
            <label>Other</label>
                <input type="text" name="other" placeholder="enter any other notes" value={other} onChange={handleChange} />
            <input type="submit" value="Submit notes" />
        </form>
    )
}

export default Notes