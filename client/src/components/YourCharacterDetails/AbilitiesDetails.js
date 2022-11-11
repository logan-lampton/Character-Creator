import React, { useEffect, useState } from 'react';

function AbilitiesDetails({ability, onUpdateAbilities, onDeleteAbility}) {

    const {strength, dexterity, constitution, intelligence, wisdom, charisma, character_id} = ability

    return (
        <>
            {/* <div className="wrapper"> */}
            <div className="card">
                <div className="card__content">
                    <div className="card__title">
                        <h1>Ability Scores:</h1>
                        <p>Strength: {strength}</p>
                        <p>Dexterity: {dexterity}</p>
                        <p>Constitution: {constitution}</p>
                        <p>Intelligence: {intelligence}</p>
                        <p>Wisdom: {wisdom}</p>
                        <p>Charisma: {charisma}</p>
                        {/* <p>{campaign_id}</p> */}
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    );

}

export default AbilitiesDetails