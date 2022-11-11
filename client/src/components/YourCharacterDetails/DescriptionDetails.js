import React, { useEffect, useState } from 'react';

function DescriptionDetails({description, onUpdateDescription, onDeleteDescription}) {

    const {background, alignment, faith, lifestyle, hair, skin, eyes, height, weight, age, personality_traits, ideals, bonds, flaws, organizations, allies, enemies, backstory, other, character_id} = description

    return (
        <>
            <div className="card">
                <div className="card__content">
                    <p>Background: {background}</p>
                    <p>Alignment: {alignment}</p>
                    <p>Faith: {faith}</p> 
                    <p>Lifestyle: {lifestyle}</p> 
                    <p>Hair: {hair}</p> 
                    <p>Skin: {skin}</p>
                    <p>Eyes: {eyes}</p>
                    <p>Height: {height}</p>
                    <p>Weight: {weight}</p>
                    <p>Age: {age}</p>
                    <p>Personality Traits: {personality_traits}</p>
                    <p>Ideals: {ideals}</p>
                    <p>Bonds: {bonds}</p>
                    <p>Flaws: {flaws}</p>
                    <p>Organizations: {organizations}</p>
                    <p>Allies: {allies}</p>
                    <p>Enemies: {enemies}</p>
                    <p>Backstory: {backstory}</p>
                    <p>Other:{other}</p>
                </div>
            </div>
        </>
    );

}

export default DescriptionDetails