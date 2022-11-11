import React, { useEffect, useState } from 'react';

function RaceDetails({race, onUpdateRace, onDeleteRace}) {

    const {name, character_id} = race

    return (
        <>
            <div className="card">
                <div className="card__content">
                    <p>Name: {name}</p>
                </div>
            </div>
        </>
    );

}

export default RaceDetails