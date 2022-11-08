import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'

function PersonalityCharacteristics() {

    const [formData, setFormData] = useState({
        traits:'',
        ideals:'',
        bonds:'',
        flaws: ''
    })
    // add in error handlers
    // const [errors, setErrors] = useState([])
    const history = useHistory()

    //defining what the user will make the form data by typing in their info
    const {traits, ideals, bonds, flaws} = formData

    //handling creating the user variable to reflect the info
    function onSubmit(e) {
        e.preventDefault()
        const PhysicalCharacteristics = {
            traits, ideals, bonds, flaws
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
            <label>Personality Traits</label>
                <input type="text" name="traits" placeholder="enter personality traits" value={traits} onChange={handleChange} />
            <label>Ideals</label>
                <input type="text" name="ideals" placeholder="enter ideals" value={ideals} onChange={handleChange} />
            <label>Bonds</label>
                <input type="text" name="bonds" placeholder="enter bonds" value={bonds} onChange={handleChange} />
            <label>Flaws</label>
                <input type="text" name="flaws" placeholder="enter flaws" value={flaws} onChange={handleChange} />
            <input type="submit" value="Submit personality traits" />
        </form>
    )
}

export default PersonalityCharacteristics