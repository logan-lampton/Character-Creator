import { useState, useEffect } from "react";
import CharacterDetails from "./YourCharacterDetails/CharacterDetails"
import AbilitiesDetails from "./YourCharacterDetails/AbilitiesDetails"
import CharacterClassDetails from "./YourCharacterDetails/CharacterClassDetails"
import DescriptionDetails from "./YourCharacterDetails/DescriptionDetails"
import RaceDetails from "./YourCharacterDetails/RaceDetails"

export default function YourCharacters({user, characters, onUpdateCharacter, onDeleteCharacter, abilities, onUpdateAbilities, onDeleteAbility, characterClasses, onUpdateCharacterClass, onDeleteCharacterClass, descriptions, onUpdateDescription, onDeleteDescription, races, onUpdateRace, onDeleteRace}) {
    console.log("characters: ", characters)
    const characterComponents = characters.map(character => {
        return(
          <CharacterDetails
            key={character.id}
            character={character}
          />
        )
      })

    const abilitiesComponents = abilities.map(ability => {
        return(
            <AbilitiesDetails 
                key={ability.id}
                ability={ability}
            />
        )
    })

    const characterClassesComponents = characterClasses.map(characterClass => {
        return(
            <CharacterClassDetails 
                key={characterClass.id}
                characterClass={characterClass}
            />
        )
    })

    const descriptionsComponents = descriptions.map(description => {
        return(
            <DescriptionDetails 
                key={description.id}
                description={description}
            />
        )
    })

    const racesComponents = races.map(race => {
        return(
            <RaceDetails 
                key={race.id}
                race={race}
            />
        )
    })

    return (
        <>
            <div className="cards">
            {characterComponents}
            {racesComponents}
            {characterClassesComponents}
            {abilitiesComponents}          
            {descriptionsComponents}
            </div>
        </>
    );
}