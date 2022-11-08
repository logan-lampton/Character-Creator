import React, { useState } from 'react';

import DragonBorn from './RaceComponents/DragonBorn';

export default function Race() {
    
    const [buttonPopup, setButtonPopup] = useState(false);

    function handleAddRace(event){
        event.preventDefault()
        fetch("/races", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: event.target.name.value,
            })
        })
        .then(response => response.json())
    //     // .then(newCharacterRace => onAddCharacterRace(newCharacterRace))
    //     //create and import onAddCharacterRace
    }
    
    return (
        <>
            <div className='buttonList'>
                <h1>Race</h1>
                <p>Choose your race below:</p>
                <button onClick={() => setButtonPopup(true)}>Dragonborn</button>
                    <DragonBorn trigger={buttonPopup} setTrigger={setButtonPopup}></DragonBorn>
                <button>Dwarf</button>
                <button>Elf</button>
                <button>Gnome</button>
                <button>Half-Elf</button>
                <button>Half-Orc</button>
                <button>Halfling</button>
                <button>Human</button>
                <button>Tiefling</button>
            </div> 
        </>
    );
}