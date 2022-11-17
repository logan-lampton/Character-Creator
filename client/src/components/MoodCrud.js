import React, { useEffect, useState } from "react";
import MoodComponents from "./MoodComponents"

function MoonCrud({race, onUpdateRace}) {

    const {id, name} = race;
    const [races, setRaces] = useState([]);
    
    // const statuses = status.map((status) => (
    //     <MoodComponents key={user_id} value={name}
    //     />
    //   ));

    function handleUpdateRace(event) {
        fetch(`races/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: event.target.name.value
          }),
        })
        .then((response) => response.json())
        .then(updatedRace => {
            setRaces(updatedRace)
        })
    };

    function handleDeleteRace(id) {
        fetch(`races/${id}`, {
            method: "DELETE",
        })
        .catch((error) => console.log(error))
        // .then((res) => res.json())
        // .then(() => {
        //     const filteredRaces = races.filter((race) => race.id !== id);
        //     setRaces(filteredRaces)
        // })
    }


console.log("Race: ", race)

return(
    <>
        <h1>{race.name}</h1>
        <p>{race.id}</p>
{/* <h1>{character.character.name}</h1>
    <p>{character.description.faith}</p>
    <img src={character.character.image}
        alt={character.character.name}
        className="card__image"
    /> */}
    <form onSubmit={handleUpdateRace}>
        <div>
            <input type="text" name="name" placeholder="Update Race"/>
        </div>
        <button type="submit">Update Race</button>
    </form>
    <button onClick={handleDeleteRace}>Delete Character Race</button>
    </>
)

}

export default MoonCrud;