import React, { useState } from 'react';
import {useHistory, Link} from 'react-router-dom'

function Home() {
    
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
            })
        })
        .then(response => response.json())
        // .then(newCharacter => onAddCharacter(newCharacter))
        //create and import onAddCharacter
    }
    
    
    return (
        <>
            <form onSubmit={handleAddCharacter}>
                <h1>Begin Character Creation</h1>
                <p>Let's bring your character to life with Character creator! Begin by adding your name and image (url) below.</p>
                <input type="text" name="name" placeholder="Insert name" className="form"/>
                <input type="text" name="image" placeholder="Insert image" className="form"/>
            </form>
        </>
    );
}

export default Home