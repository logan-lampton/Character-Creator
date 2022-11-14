import React, { useState } from 'react';

import DragonBorn from './RaceComponents/DragonBorn';
import Dwarf from './RaceComponents/Dwarf';
import Elf from './RaceComponents/Elf';
import HalfElf from './RaceComponents/HalfElf';
import Gnome from './RaceComponents/Gnome';
import HalfOrc from './RaceComponents/HalfOrc';
import Halfling from './RaceComponents/Halfling';
import Human from './RaceComponents/Human';
import Tiefling from './RaceComponents/Tiefling';

export default function Race() {
    
    const [dragonbornPopup, setDragonbornPopup] = useState(false);
    const [dwarfPopup, setDwarfPopup] = useState(false);
    const [elfPopup, setElfPopup] = useState(false);
    const [gnomePopup, setGnomePopup] = useState(false);
    const [halfElfPopup, setHalfElfPopup] = useState(false);
    const [halfOrcPopup, setHalfOrcPopup] = useState(false);
    const [halflingPopup, setHalflingPopup] = useState(false);
    const [humanPopup, setHumanPopup] = useState(false);
    const [tieflingPopup, setTieflingPopup] = useState(false);

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
                <button onClick={() => setDragonbornPopup(true)}>Dragonborn</button>
                    <DragonBorn trigger={dragonbornPopup} setTrigger={setDragonbornPopup}></DragonBorn>
                <button onClick={() => setDwarfPopup(true)}>Dwarf</button>
                    <Dwarf trigger={dwarfPopup} setTrigger={setDwarfPopup}></Dwarf>
                <button onClick={() => setElfPopup(true)}>Elf</button>
                    <Elf trigger={elfPopup} setTrigger={setElfPopup}></Elf>
                <button onClick={() => setGnomePopup(true)}>Gnome</button>
                    <Gnome trigger={gnomePopup} setTrigger={setGnomePopup}></Gnome>
                <button onClick={() => setHalfElfPopup(true)}>Half-Elf</button>
                    <HalfElf trigger={halfElfPopup} setTrigger={setHalfElfPopup}></HalfElf>
                <button onClick={() => setHalfOrcPopup(true)}>Half-Orc</button>
                    <HalfOrc trigger={halfOrcPopup} setTrigger={setHalfOrcPopup}></HalfOrc>
                <button onClick={() => setHalflingPopup(true)}>Halfling</button>
                    <Halfling trigger={halflingPopup} setTrigger={setHalflingPopup}></Halfling>
                <button onClick={() => setHumanPopup(true)}>Human</button>
                    <Human trigger={humanPopup} setTrigger={setHumanPopup}></Human>
                <button onClick={() => setTieflingPopup(true)}>Tiefling</button>
                    <Tiefling trigger={tieflingPopup} setTrigger={setTieflingPopup}></Tiefling>
            </div> 
        </>
    );
}