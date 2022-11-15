import React, { useContext, useState } from 'react';
import '../App.css';
import DCharacterDetails from './DescriptionComponents/DCharacterDetails';
import PhysicalCharacteristics from './DescriptionComponents/PhysicalCharacteristics'
import PersonalityCharacteristics from './DescriptionComponents/PersonalityCharacteristics'
import Notes from './DescriptionComponents/Notes'
import { CharContext } from '../App';

export default function Description() {
    const currentChar = useContext(CharContext)

    const handleSubmit = (event) => {
        event.preventDefault()

        fetch("/descriptions", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                character_id: currentChar.id,
                background: event.target.background.value,
                alignment: event.target.alignment.value,
                faith: event.target.faith.value,
                lifestyle: event.target.lifestyle.value,
                hair: event.target.hair.value,
                skin: event.target.skin.value,
                eyes: event.target.eyes.value,
                height: event.target.height.value,
                weight: event.target.weight.value,
                age: event.target.age.value,
                personality_traits: event.target.traits.value,
                ideals: event.target.ideals.value,
                bonds: event.target.bonds.value,
                flaws: event.target.flaws.value,
                organizations: event.target.organizations.value,
                allies: event.target.allies.value,
                enemies: event.target.enemies.value,
                backstory: event.target.backstory.value,
                other: event.target.other.value,
            })
        })
    }

    return (
        <>
        <div className='wrapper'>
            <div className='intro'>
                <h1>Description</h1>
                <p>Have fun adding additional descriptors to your character like their background, flaws and bonds.</p>
                <h1>Background</h1>
                <form onSubmit={handleSubmit}>
                    <select className="background" name='background'>
                        <option>Acolyte</option>
                        <option>Charlatan</option>
                        <option>Criminal / Spy</option>
                        <option>Entertainer</option>
                        <option>Folk Hero</option>
                        <option>Gladiator</option>
                        <option>Guild Artisan / Guild Merchant</option>
                        <option>Hermit</option>
                        <option>Knight</option>
                        <option>Noble</option>
                        <option>Outlander</option>
                        <option>Pirate</option>
                        <option>Sage</option>
                        <option>Sailor</option>
                        <option>Soldier</option>
                        <option>Urchin</option>
                    </select>
                    <div className='characterDetails'>
                        <label>Alignment</label>
                        <input type="text" name="alignment" placeholder="enter alignment" />
                        <label>Faith</label>
                        <input type="text" name="faith" placeholder="enter faith" />
                        <label>Lifestyle</label>
                        <input type="text" name="lifestyle" placeholder="enter lifestyle" />
                    </div>
                    <div className='physicalCharacteristics'>
                        <label>Hair</label>
                        <input type="text" name="hair" placeholder="enter hair color" />
                        <label>Skin</label>
                        <input type="text" name="skin" placeholder="enter skin tone" />
                        <label>Eyes</label>
                        <input type="text" name="eyes" placeholder="enter eye color" />
                        <label>Height</label>
                        <input type="text" name="height" placeholder="enter height" />
                        <label>Weight in lbs</label>
                        <input type="text" name="weight" placeholder="enter weight in lbs" />
                        <label>Age in years</label>
                        <input type="number" name="age" placeholder="enter age in years as a number" />
                    </div>
                    <div className="personalityTraits">
                        <label>Personality Traits</label>
                        <input type="text" name="traits" placeholder="enter personality traits" />
                        <label>Ideals</label>
                        <input type="text" name="ideals" placeholder="enter ideals" />
                        <label>Bonds</label>
                        <input type="text" name="bonds" placeholder="enter bonds" />
                        <label>Flaws</label>
                        <input type="text" name="flaws" placeholder="enter flaws" />
                    </div>
                    <div className='notes'>
                        <label>Organizations</label>
                        <input type="text" name="organizations" placeholder="enter organizations you are a part of" />
                        <label>Allies</label>
                        <input type="text" name="allies" placeholder="enter your allies" />
                        <label>Enemies</label>
                        <input type="text" name="enemies" placeholder="enter your enemies" />
                        <label>Backstory</label>
                        <input type="text" name="backstory" placeholder="enter your backstory" />
                        <label>Other</label>
                        <input type="text" name="other" placeholder="enter any other notes" />
                    </div>
                    <input type="submit" value="Submit Description" />
                </form>
            </div>
        </div>
        </> 
    );
}