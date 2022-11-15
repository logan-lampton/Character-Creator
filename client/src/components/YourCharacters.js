import { useState, useEffect } from "react";
import CharacterDetails from "./CharacterDetails"
import AbilitiesDetails from "./YourCharacterDetails/AbilitiesDetails"
import CharacterClassDetails from "./YourCharacterDetails/CharacterClassDetails"
import DescriptionDetails from "./YourCharacterDetails/DescriptionDetails"
import RaceDetails from "./YourCharacterDetails/RaceDetails"

export default function YourCharacters({user, characters, onUpdateCharacter, onDeleteCharacter, abilities, onUpdateAbilities, onDeleteAbility, characterClasses, onUpdateCharacterClass, onDeleteCharacterClass, descriptions, onUpdateDescription, onDeleteDescription, races, onUpdateRace, onDeleteRace}) {
    console.log("full characters: ", characters)

    // const characterComponents = characters.map(character => {
    //     return(
    //       <CharacterDetails
    //         key={character.id}
    //         character={character}
    //       />
    //     )
    //   })

    // function handleDeleteClick(){
    //     fetch(`/characters/${id}`, {
    //       method: "DELETE"
    //     })
    //     onDeleteCharacter(id);
    //   }

    // const abilitiesComponents = abilities.map(ability => {
    //     return(
    //         <AbilitiesDetails 
    //             key={ability.id}
    //             ability={ability}
    //         />
    //     )
    // })

    // const characterClassesComponents = characterClasses.map(characterClass => {
    //     return(
    //         <CharacterClassDetails 
    //             key={characterClass.id}
    //             characterClass={characterClass}
    //         />
    //     )
    // })

    // const descriptionsComponents = descriptions.map(description => {
    //     return(
    //         <DescriptionDetails 
    //             key={description.id}
    //             description={description}
    //         />
    //     )
    // })

    // const racesComponents = races.map(race => {
    //     return(
    //         <RaceDetails 
    //             key={race.id}
    //             race={race}
    //         />
    //     )
    // })

    return (
        <div className="cards">
        {characters.map((character)=>(
            <div className="individual_card">
                <div className="card">
                    <img
                        src={character.character.image}
                        alt={character.character.name}
                        className="card__image"
                    />
                </div>
                <div className="card__content">
                    <div className="card__title">
                        <h3>Name: {character.character.name}</h3>
                    </div>
                    <div className="card_details">
                        <p>Campaign: {character.character.campaign_id}</p>
                        <p>Race: {character.race.name}</p>
                        <p>Class: {character.class.name}</p>
                    </div>
                    <div className="card__title">
                        <h3>Ability Scores:</h3>
                    </div>
                    <div className="card_details">
                        <p>Strength: {character.abilities.strength}</p>
                        <p>Dexterity: {character.abilities.dexterity}</p>
                        <p>Constitution: {character.abilities.constitution}</p>
                        <p>Intelligence: {character.abilities.intelligence}</p>
                        <p>Wisdom: {character.abilities.wisdom}</p>
                        <p>Charisma: {character.abilities.charisma}</p>
                    </div>
                    <div className="card__title">
                        <h3>Description:</h3>
                    </div>
                    <div className="card_details">
                        <p>Background: {character.description.background}</p>
                        <p>Alignment: {character.description.alignment}</p>
                        <p>Faith: {character.description.faith}</p>
                        <p>Lifestyle: {character.description.lifestyle}</p>
                        <p>Hair: {character.description.hair}</p>
                        <p>Skin: {character.description.skin}</p>
                        <p>Eyes: {character.description.eyes}</p>
                        <p>Height: {character.description.height}</p>
                        <p>Weight: {character.description.weight}</p>
                        <p>Age: {character.description.age}</p>
                        <p>Personality Traits: {character.description.personality_traits}</p>
                        <p>Ideals: {character.description.ideals}</p>
                        <p>Bonds: {character.description.bonds}</p>
                        <p>Flaws: {character.description.flaws}</p>
                        <p>Organizations: {character.description.organizations}</p>
                        <p>Allies: {character.description.allies}</p>
                        <p>Enemies: {character.description.enemies}</p>
                        <p>Backstory: {character.description.backstory}</p>
                        <p>Other: {character.description.other}</p>
                    </div>
                    <button>Delete Character</button>
                </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
            </div>
        ))}
    <br></br>
    </div>
    );
}