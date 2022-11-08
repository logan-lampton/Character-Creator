import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'

function PhysicalCharacteristics() {

    const [formData, setFormData] = useState({
        hair:'',
        skin:'',
        eyes:'',
        height: '',
        weight: '',
        age: '',
        gender: '',
    })
    // add in error handlers
    // const [errors, setErrors] = useState([])
    const history = useHistory()

    //defining what the user will make the form data by typing in their info
    const {hair, skin, eyes, height, weight, age, gender} = formData

    //handling creating the user variable to reflect the info
    function onSubmit(e) {
        e.preventDefault()
        const PhysicalCharacteristics = {
            hair, skin, eyes, height, weight, age, gender
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
            <label>Hair</label>
                <input type="text" name="hair" placeholder="enter hair color" value={hair} onChange={handleChange} />
            <label>Skin</label>
                <input type="text" name="skin" placeholder="enter skin tone" value={skin} onChange={handleChange} />
            <label>Eyes</label>
                <input type="text" name="eyes" placeholder="enter eye color" value={eyes} onChange={handleChange} />
            <label>Height</label>
                <input type="text" name="height" placeholder="enter height" value={height} onChange={handleChange} />
            <label>Weight in lbs</label>
                <input type="text" name="weight" placeholder="enter weight in lbs" value={weight} onChange={handleChange} />
            <label>Age in years</label>
                <input type="number" name="age" placeholder="enter age in years as a number" value={age} onChange={handleChange} />
            <input type="submit" value="Submit physical characteristics" />
        </form>
    )
}

export default PhysicalCharacteristics