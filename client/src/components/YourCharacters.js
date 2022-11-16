import React, { useState } from "react";
import CharacterDetails from "./CharacterDetails"
import AbilitiesDetails from "./YourCharacterDetails/AbilitiesDetails"
import CharacterClassDetails from "./YourCharacterDetails/CharacterClassDetails"
import DescriptionDetails from "./YourCharacterDetails/DescriptionDetails"
import RaceDetails from "./YourCharacterDetails/RaceDetails"

export default function YourCharacters({user, characters, onUpdateCharacter, onDeleteCharacter, abilities, onUpdateAbilities, onDeleteAbility, characterClasses, onUpdateCharacterClass, onDeleteCharacterClass, descriptions, onUpdateDescription, onDeleteDescription, races, onUpdateRace, onDeleteRace}) {
    console.log("full characters: ", characters)

    // const [toggleEditMode, setToggleEditMode] = useState(false)

    // const changeEdit = () => {
    //     setToggleEditMode(!toggleEditMode)
    // }

    // const submitForm = (formData) => {
    //     changeEdit()
    //     const updatedchar = {
    //         background: formData.background
    //     }
    //     onUpdatedCharacter(character)
    // }
    // const [charState, setCharState] = useState([])

    // function handleDeleteCharacter(character_id) {
    //     fetch(`/characters/${character_id}`, {
    //         method: "DELETE",
    //     })
    //     .then((res) => {
    //         return res.json()
    //     }).then(() => {
    //         const filteredChars = characters.filter((char) => char.character_id !== character_id);
    //         setCharState(filteredChars)
    //     })
    // }

    // function handleCharacterUpdate(event){
    //     event.preventDefault()
    //     fetch(`/characters/${character_id}`, {
    //       method: "PATCH",
    //       headers: {
    //           'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({
    //           name: event.target.name.value,
    //           image: event.target.image.value,
    //           campaign_id: event.target.campaign.value,
    //       })
    //     })
    //     .then(response => response.json())
    //     .then(updatedCharacter => {
    //       onUpdateCharacter(updatedCharacter)
    //     })
    //   }

    // const characterComponents = characters.map(character => {
    //     return(
    //       <CharacterDetails
    //         key={character.id}
    //         character={character}
    //       />
    //     )
    //   })

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
                    <br></br>
                    <div>
                        {/* <h3>Update Character Details</h3> */}
                    {/* <form onSubmit={handleCharacterUpdate}>
                        <input type="text" name="name" placeholder="Name" className="form"/>
                        <input type="integer" name="price" placeholder="Price" className="form" />
                        <input type="text" name="image" placeholder="Image" className="form" />
                        <input type="text" name="description" placeholder="description" className="form" />
                        <input type="text" name="link" placeholder="Link" className="form" />
                        <button type="submit" className="form">Update details</button>
                    </form> */}
                    </div>
                    <button onClick={() => { console.log(character); onDeleteCharacter(character.character.id) }}>Delete Character</button>
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