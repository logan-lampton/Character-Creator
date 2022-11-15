import React, { useContext, useState } from 'react';
import DragonBorn from './RaceComponents/DragonBorn';
import HillDwarf from './RaceComponents/HillDwarf';
import MountainDwarf from './RaceComponents/MountainDwarf';
import HighElf from './RaceComponents/HighElf';
import WoodElf from './RaceComponents/WoodElf';
import HalfElf from './RaceComponents/HalfElf';
import Gnome from './RaceComponents/Gnome';
import HalfOrc from './RaceComponents/HalfOrc';
import LightfootHalfling from './RaceComponents/LightfootHalfling';
import StoutHalfling from './RaceComponents/StoutHalfling'
import Human from './RaceComponents/Human';
import Tiefling from './RaceComponents/Tiefling';
import { CharContext } from '../App';

export default function Race() {
    const currentChar = useContext(CharContext)
    const [dragonbornPopup, setDragonbornPopup] = useState(false);
    const [hillDwarfPopup, setHillDwarfPopup] = useState(false)
    const [mountainDwarfPopup, setMountainDwarfPopup] = useState(false)
    const [highElfPopup, setHighElfPopup] =useState(false);
    const [woodElfPopup, setWoodElfPopup] =useState(false);
    const [gnomePopup, setGnomePopup] = useState(false);
    const [halfElfPopup, setHalfElfPopup] = useState(false);
    const [halfOrcPopup, setHalfOrcPopup] = useState(false);
    const [lightfootHalflingPopup, setLightfootHalflingPopup] = useState(false);
    const [stoutHalflingPopup, setStoutHalflingPopup] = useState(false);
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
                character_id: currentChar.id,
                name: event.target.name,
            })
        })
        .then(response => response.json())
    }
    
    return (
        <>
            <div className='buttonList'>
                <h1>Race</h1>
                <p>Choose your race below:</p>
                <button onClick={() => setDragonbornPopup(true)}>Dragonborn</button>
                    <DragonBorn handleAddRace={handleAddRace} trigger={dragonbornPopup} setTrigger={setDragonbornPopup}></DragonBorn>
                <button onClick={() => setHillDwarfPopup(true)}>Hill Dwarf</button>
                    <HillDwarf handleAddRace={handleAddRace} trigger={hillDwarfPopup} setTrigger={setHillDwarfPopup}></HillDwarf>
                <button onClick={() => setMountainDwarfPopup(true)}>Mountain Dwarf</button>
                    <MountainDwarf handleAddRace={handleAddRace} trigger={mountainDwarfPopup} setTrigger={setMountainDwarfPopup}></MountainDwarf>
                <button onClick={() => setHighElfPopup(true)}>High Elf</button>
                    <HighElf handleAddRace={handleAddRace} trigger={highElfPopup} setTrigger={setHighElfPopup}></HighElf>
                <button onClick={() => setWoodElfPopup(true)}>Wood Elf</button>
                    <WoodElf handleAddRace={handleAddRace} trigger={woodElfPopup} setTrigger={setWoodElfPopup}></WoodElf>
                <button onClick={() => setGnomePopup(true)}>Gnome</button>
                    <Gnome handleAddRace={handleAddRace} trigger={gnomePopup} setTrigger={setGnomePopup}></Gnome>
                <button onClick={() => setHalfElfPopup(true)}>Half-Elf</button>
                    <HalfElf handleAddRace={handleAddRace} trigger={halfElfPopup} setTrigger={setHalfElfPopup}></HalfElf>
                <button onClick={() => setHalfOrcPopup(true)}>Half-Orc</button>
                    <HalfOrc handleAddRace={handleAddRace} trigger={halfOrcPopup} setTrigger={setHalfOrcPopup}></HalfOrc>
                <button onClick={() => setLightfootHalflingPopup(true)}>Lightfoot Halfling</button>
                    <LightfootHalfling handleAddRace={handleAddRace} trigger={lightfootHalflingPopup} setTrigger={setLightfootHalflingPopup}></LightfootHalfling>
                <button onClick={() => setStoutHalflingPopup(true)}>Stout Halfling</button>
                    <StoutHalfling handleAddRace={handleAddRace} trigger={stoutHalflingPopup} setTrigger={setStoutHalflingPopup}></StoutHalfling>
                <button onClick={() => setHumanPopup(true)}>Human</button>
                    <Human handleAddRace={handleAddRace} trigger={humanPopup} setTrigger={setHumanPopup}></Human>
                <button onClick={() => setTieflingPopup(true)}>Tiefling</button>
                    <Tiefling handleAddRace={handleAddRace} trigger={tieflingPopup} setTrigger={setTieflingPopup}></Tiefling>
            </div> 
        </>
    );
}