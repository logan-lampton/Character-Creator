import React, { useState } from 'react';
import {useHistory, Link} from 'react-router-dom'

function Home({onAddCharacter}) {
    
    // function handleAddCharacter(event){
    //     event.preventDefault()
    //     fetch(`/characters/${id}/users`, {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             name: event.target.name.value,
    //             image: event.target.image.value,
    //             // campaign: event.target.campaign.value,
    //             user_id: user.id,
    //             campaign_id: event.target.campaign.value
    //         })
    //     })
    //     .then(response => response.json())
    //     .then(newCharacter => onAddCharacter(newCharacter))
    // }
    
    return (
        <>
        {/* onSubmit={handleAddCharacter} */}
            <form >
                <h1>Begin Character Creation</h1>
                <p>Let's bring your character to life with Character creator! Begin by adding your name and image (url) below.</p>
                <input type="text" name="name" placeholder="Insert name" className="form"/>
                <input type="text" name="image" placeholder="Insert image" className="form"/>
                <p>Select the campaign that you'll play in</p>
                <select>
                    <option value="campaign_id: 1">Ghosts of Saltmarsh</option>
                    <option value="campaign_id: 2">Ascent into Avernus</option>
                    <option value="campaign_id: 3">Wild Beyond the Witchlight</option>
                </select>
            </form>
        </>
    );
}

export default Home