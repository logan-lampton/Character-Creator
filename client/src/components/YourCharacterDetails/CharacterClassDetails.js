import React, { useEffect, useState } from 'react';

function CharacterClassDetails({characterClass, onUpdateCharacterClass, onDeleteCharacterClass}) {

    const {name, character_id} = characterClass

    return (
        <>
            <div className="card">
                <p>Class: {name}</p>
            </div>
        </>
    );

}

export default CharacterClassDetails