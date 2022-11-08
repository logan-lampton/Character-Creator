import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'

function Abilities() {

    const [formData, setFormData] = useState({
        strength:'',
        dexterity:'',
        constitution:'',
        intelligence: '',
        wisdom: '',
        charisma: ''
    })
    // add in error handlers
    // const [errors, setErrors] = useState([])
    const history = useHistory()

    //defining what the user will make the form data by typing in their info
    const {strength, dexterity, constitution, intelligence, wisdom, charisma} = formData

    //handling creating the user variable to reflect the info
    function onSubmit(e) {
        e.preventDefault()
        const abilityScores = {
            strength, dexterity, constitution, intelligence, wisdom, charisma
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
        <>
        <div className='wrapper'>
            <div className='intro'>
                <h1>Ability Scores</h1>
                <p>Please select your ability scores below</p>
                <form className="form" onSubmit={onSubmit}>
                <label>Strength</label>
                    <input type="number" name="strength" placeholder="enter strength value" value={strength} onChange={handleChange} />
                <label>Dexterity</label>
                    <input type="number" name="dexterity" placeholder="enter dexterity value" value={dexterity} onChange={handleChange} />
                <label>Constitution</label>
                    <input type="number" name="constitution" placeholder="enter constitution value" value={constitution} onChange={handleChange} />
                <label>Intelligence</label>
                    <input type="number" name="intelligence" placeholder="enter intelligence value" value={intelligence} onChange={handleChange} />
                <label>Wisdom</label>
                    <input type="number" name="wisdom" placeholder="enter wisdom value" value={wisdom} onChange={handleChange} />
                <label>Charisma</label>
                    <input type="number" name="charisma" placeholder="enter charisma value" value={charisma} onChange={handleChange} />
                <input type="submit" value="Submit your ability scores" />
                </form>
            </div>
        </div>
        </>
    )
}

export default Abilities