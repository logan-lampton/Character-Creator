import React, { useState, useEffect } from "react"
import MoodCrud from "./MoodCrud"

function MoodComponents({user, onUpdateRace}) {
    const [races, setRaces] = useState([]);
   
    const {id} = user

    useEffect(() => {
        fetch(`/races`)
          .then((r) => r.json())
          .then((races) => {setRaces(races)});
      }, []);
 
    // function handleUpdateCharacter(event) {
    //     event.preventDefault()
    //     fetch(`characters/${id}`, {
    //       method: "PATCH",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({
    //         name: event.target.character.character.name.value,
    //         image: event.target.character.character.image.value
    //       }),
    //     })
    //     .then((response) => response.json())
    //     .then(updatedCharacter => {
    //         onUpdateCharacter(updatedCharacter)
    //     })
    // };

    // const options = answers.map((answer, index) => (
    //     <option key={index} value={index}>
    //       {answer}
    //     </option>
    //   ));
    console.log("Races in MoodComponents: ", races)
   
    const raceMap = races.map((race) => (
        <MoodCrud
            key={race.id}
            race={race}
            onUpdateRace={onUpdateRace}
        />
    ))

    return(
        <>
        <h1>Updating Races:</h1>
        <ul>{raceMap}</ul>
        </>
    )
}

export default MoodComponents