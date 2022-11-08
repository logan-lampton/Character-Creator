import React, { useState } from 'react';
import '../App.css';
import DCharacterDetails from './DescriptionComponents/DCharacterDetails';
import PhysicalCharacteristics from './DescriptionComponents/PhysicalCharacteristics'
import PersonalityCharacteristics from './DescriptionComponents/PersonalityCharacteristics'
import Notes from './DescriptionComponents/Notes'

export default function Description() {
    const [characterDetails, setCharacterDetails] = useState(false)
    const [physicalDetails, setPhysicalDetails] = useState(false)
    const [personalityDetails, setPersonalityDetails] = useState(false)
    const [notes, setNotes] = useState(false)

    return (
        <>
        <div className='wrapper'>
            <div className='intro'>
                <h1>Description</h1>
                <p>Have fun adding additional descriptors to your character like their background, flaws and bonds.</p>
                <div className='title'>
                    <button onClick={()=>setCharacterDetails(!characterDetails)}><h1>Character Details</h1></button>
                </div>
                <div className="content">
                    {characterDetails? <DCharacterDetails />: null}
                </div>
                <div></div>
                <div className='title'>
                    <button onClick={()=>setPhysicalDetails(!physicalDetails)}><h1>Physical Characteristics</h1></button>
                </div>
                <div className="content">
                    {physicalDetails? <PhysicalCharacteristics />: null}
                </div>
                <div className='title'>
                    <button onClick={()=>setPersonalityDetails(!personalityDetails)}><h1>Personal Characteristics</h1></button>
                </div>
                <div className="content">
                    {personalityDetails? <PersonalityCharacteristics />: null}
                </div>
                <div className='title'>
                    <button onClick={()=>setNotes(!notes)}><h1>Notes (Optional)</h1></button>
                </div>
                <div className="content">
                    {notes? <Notes />: null}
                </div>
            </div>
        </div>
        </> 
    );
}