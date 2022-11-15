import React, { useEffect, useState } from 'react';

function CharacterDetails({user, character, onUpdateCharacter, onDeleteCharacter}) {

    const {name, image, campaign_id, user_id} = character

    // function userCharacterDetails(user){
        
    // }

    return (
        <>
            <div className="card">
                <img
                    src={image}
                    alt={name}
                    className="card__image"
                />
                <div className="card__content">
                    <div className="card__title">
                        <p>Name: {name}</p>
                        {/* <p>{campaign_id}</p> */}
                    </div>
                </div>
            </div>
        </>
    );

}

export default CharacterDetails