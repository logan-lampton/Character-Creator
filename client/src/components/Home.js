import React, { useState } from 'react';
import {useHistory, Link} from 'react-router-dom'

function Home({onAddCharacter, currentUser}) {
    
    function handleAddCharacter(event){
        event.preventDefault()
        fetch("/characters", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: event.target.name.value,
                image: event.target.image.value,
                user_id: currentUser,
                campaign_id: event.target.value
            })
        })
        .then(response => response.json())
        .then(newCharacter => onAddCharacter(newCharacter))
    }

    return (
        <>
            <form onSubmit={handleAddCharacter} >
                <h1>Begin Character Creation</h1>
                <p>Let's bring your character to life with Character creator! Begin by adding your name and image (url) below.</p>
                <input type="text" name="name" placeholder="Insert name" className="form"/>
                <input type="text" name="image" placeholder="Insert image" className="form"/>
                <p>Select the campaign that you'll play in</p>
                <select>
                    <option value="campaign_id">Ghosts of Saltmarsh</option>
                    <option value="campaign_id">Ascent into Avernus</option>
                    <option value="campaign_id">Wild Beyond the Witchlight</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default Home