import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link, useParams } from "react-router-dom";

import Abilities from './components/Abilities';
import ClassComponent from './components/ClassComponent';
import Description from './components/Description';
// import Campaign from './components/Campaign';
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Race from './components/Race';
import Register from "./components/Register";
import YourCharacters from './components/YourCharacters';
import MoodCrud from './components/MoodCrud'
import MoodComponents from './components/MoodComponents'
export const CharContext = React.createContext()

function App() {
  const storedChar = localStorage.getItem('currentChar')
  const [currentUser, setCurrentUser] = useState(false)
  const [currentChar, setCurrentChar] = useState(null)  
  const [characters, setCharacters] = useState([])
  const [abilities, setAbilities] = useState([])
  const [characterClasses, setCharacterClasses] = useState([])
  const [descriptions, setDescriptions] = useState([])
  const [races, setRaces] = useState([])
  // const [moods, setMoods] = useState([])

  console.log("currentUser", currentUser)
  console.log("currentChar", currentChar)
  // const [campaigns, setCampaigns] = useState([])
  // const params = useParams()

  useEffect(() => {
    fetch('/authorized_user')
    .then(res => {
      if(res.ok){
        res.json()
        .then(user => {
          updateUser(user)
        })
      }
    })
  },[])

  const updateUser = (user) => setCurrentUser(user)

  //characters model CRUD below
  useEffect(() => {
    fetch(`/characters`)
    .then((res) => res.json())
    .then((characters) => setCharacters(characters))
  }, [])

  function handleAddCharacter(newCharacter){
    localStorage.setItem("currentChar", JSON.stringify(newCharacter))
    setCurrentChar(newCharacter)
    const newCharacterArray = [...characters, newCharacter]
    setCharacters(newCharacterArray) //update once you add filters, if you do
  }

  function handleUpdateCharacter(updatedCharacter) {
    const updatedCharacterArray = characters.map((character) => {
      if (character.id === updatedCharacter.id) {
        return updatedCharacter;
      } else {
        return character;
      }
    });
    setCharacters(updatedCharacterArray)
  }

  // function handleDeleteCharacter(id) {
  //   const updatedCharacterArray = characters.filter((character => character.id !== id));
  //   setCharacters(updatedCharacterArray)
  // }

  function handleDeleteCharacter(character_id) {
    fetch(`/characters/${character_id}`, {
        method: "DELETE",
    })
    .then((res) => res.json())
    .then(() => {
        const filteredChars = characters.filter((char) => char.character_id !== character_id);
        setCharacters(filteredChars)
    })
  }

  function handleDeleteRace(id) {
    fetch(`/races/${id}`, {
        method: "DELETE",
    })
    .then((res) => {
        console.log(res)
        return res.json()
    }).then(() => {
        const filteredRaces = races.filter((race) => race.id !== id);
        console.log(filteredRaces)
        setRaces(filteredRaces)
    })
  }


  //end of /characters CRUD

  //abilities model CRUD below

  useEffect(() => {
    fetch(`/abilities`)
    .then((res) => res.json())
    .then((abilities) => setAbilities(abilities))
  }, [])

  function handleAddAbility(newAbility){
    const newAbilitiesArray = [...abilities, newAbility]
    setAbilities(newAbilitiesArray) //update once you add filters, if you do
  }

  function handleUpdateAbilities(updatedAbility) {
    const updatedAbilitiesArray = abilities.map((ability) => {
      if (ability.id === updatedAbility.id) {
        return updatedAbility;
      } else {
        return ability;
      }
    });
    setAbilities(updatedAbilitiesArray)
  }

  function handleDeleteAbility(id) {
    const updatedAbilitiesArray = abilities.filter((ability => ability.id !== id));
    setAbilities(updatedAbilitiesArray)
  }

  //end of /abilities CRUD


  //Character_Classes model CRUD below

  useEffect(() => {
    fetch(`/character_classes`)
    .then((res) => res.json())
    .then((characterClasses) => setCharacterClasses(characterClasses))
  }, [])

  function handleAddCharacterClass(newCharacterClass){
    const newCharacterClassArray = [...characterClasses, newCharacterClass]
    setCharacterClasses(newCharacterClassArray) //update once you add filters, if you do
  }

  function handleUpdateCharacterClass(updatedCharacterClass) {
    const updatedCharacterClassesArray = characterClasses.map((characterClass) => {
      if (characterClass.id === updatedCharacterClass.id) {
        return updatedCharacterClass;
      } else {
        return characterClass;
      }
    });
    setCharacterClasses(updatedCharacterClassesArray)
  }

  function handleDeleteCharacterClass(id) {
    const updatedCharacterClassesArray = characterClasses.filter((characterClass => characterClass.id !== id));
    setCharacterClasses(updatedCharacterClassesArray)
  }

  //end of /character_classes CRUD


  //Descriptions model CRUD below

  useEffect(() => {
    fetch(`/descriptions`)
    .then((res) => res.json())
    .then((descriptions) => setDescriptions(descriptions))
  }, [])

  function handleAddDescription(newDescription){
    const newDescriptionsArray = [...descriptions, newDescription]
    setDescriptions(newDescriptionsArray) //update once you add filters, if you do
  }

  function handleUpdateDescription(updatedDescription) {
    const updatedDescriptionsArray = descriptions.map((description) => {
      if (description.id === updatedDescription.id) {
        return updatedDescription;
      } else {
        return description;
      }
    });
    setDescriptions(updatedDescriptionsArray)
  }

  function handleDeleteDescription(id) {
    const updatedDescriptionsArray = descriptions.filter((description => description.id !== id));
    setDescriptions(updatedDescriptionsArray)
  }

  //end of /descriptions CRUD


  //Races model CRUD below

  useEffect(() => {
    fetch(`/races`)
    .then((res) => res.json())
    .then((races) => setRaces(races))
  }, [])

  function handleAddRace(newRace){
    const newRacesArray = [...races, newRace]
    setRaces(newRacesArray) //update once you add filters, if you do
  }

  function handleUpdateRace(updatedRace) {
    const updatedRacesArray = races.map((race) => {
      if (race.id === updatedRace.id) {
        return updatedRace;
      } else {
        return race;
      }
    });
    setRaces(updatedRacesArray)
  }

  // function handleDeleteRace(id) {
  //   const updatedRacesArray = races.filter((race => race.id !== id));
  //   setRaces(updatedRacesArray)
  // }

  //end of /races CRUD


  // // /campaigns CRUD below

  // useEffect(() => {
  //   fetch("/campaigns")
  //   .then((res) => res.json())
  //   .then((campaigns) => setCampaigns(campaigns))
  // }, [])

  // function handleAddCampaign(newCampaign){
  //   const newCampaignArray = [...campaigns, newCampaign]
  //   setCampaigns(newCampaignArray) //update once you add filters, if you do
  // }

  // function handleUpdateCampaign(updatedCampaign) {
  //   const updatedCampaignArray = campaigns.map((campaign) => {
  //     if (campaign.id === updatedCampaign.id) {
  //       return updatedCampaign;
  //     } else {
  //       return campaign;
  //     }
  //   });
  //   setCampaigns(updatedCampaignArray)
  // }

  // function handleDeleteCampaign(id) {
  //   const updatedCampaignArray = campaigns.filter((campaign => campaign.id !== id));
  //   setCampaigns(updatedCampaignArray)
  // }

  // // Mood CRUD
  // useEffect(() => {
  //   fetch(`/moods`, {
  //     method: "GET"
  //   })
  //   .then((res) => res.json())
  //   .then((moods) => setMoods(moods))
  // }, [])

  // function handleAddMood(newMood){
  //   const newMoodsArray = [...moods, newMood]
  //   setMoods(newMo  // function handleUpdateMood(updatedMood) {
  //   const updatedMoodsArray = moods.map((mood) => {
  //     if (mood.id === updatedMood.id) {
  //       return updatedMood;
  //     } else {
  //       return mood;
  //     }
  //   });
  //   setMoods(updatedMoodsArray)
  // }

  // function handleDeleteMood(id) {
  //   const updatedMoodsArray = moods.filter((mood => mood.id !== id));
  //   setMoods(updatedMoodsArray)
  // }odsArray) //update once you add filters, if you do
  // }


//end of Status CRUD


  return (
    <>
    <BrowserRouter>
    <Navbar currentUser={currentUser} updateUser={updateUser}/>
      <div className="App">
          <Route exact path="/">
            <Login updateUser={updateUser} />
          </Route>
          <Route exact path="/register" >
            <Register updateUser={updateUser} />
          </Route>
      {!currentUser ? <Link to="/"><h1>Please sign in or register</h1></Link> :
      <Switch>
          <Route exact path="/home">
            <Home onAddCharacter={handleAddCharacter} currentUser={currentUser} />
          </Route>
          <CharContext.Provider value={currentChar}>
            <Route exact path="/races">
              <Race onAddRace={handleAddRace} />
            </Route>
            <Route exact path="/classes">
              <ClassComponent onAddCharacterClass={handleAddCharacterClass} />
            </Route>
            <Route exact path="/ablities">
              <Abilities onAddAbility={handleAddAbility} />
            </Route>
            <Route exact path="/descriptions">
              <Description onAddDescription={handleAddDescription}/>
            </Route>
            <Route exact path="/characters">
              <YourCharacters
              user={currentUser}
              characters={characters}
              onUpdateCharacter={handleUpdateCharacter}
              onDeleteCharacter={handleDeleteCharacter}
              abilities={abilities}
              onUpdateAbilities={handleUpdateAbilities}
              onDeleteAbility={handleDeleteAbility}
              characterClasses={characterClasses}
              onUpdateCharacterClass={handleUpdateCharacterClass}
              onDeleteCharacterClass={handleDeleteCharacterClass}
              descriptions={descriptions}
              onUpdateDescription={handleUpdateDescription}
              onDeleteDescription={handleDeleteDescription}
              races={races}
              onUpdateRace={handleUpdateRace}
              onDeleteRace={handleDeleteRace}
              />
            </Route>
            <Route exact path="/mood_crud">
              <MoodCrud 
              onUpdateCharacter={handleUpdateCharacter}
              onUpdateRace={handleUpdateRace}
              onDeleteRace={handleDeleteRace}
              />
            </Route>
            <Route exact path="/moods">
              <MoodComponents
                // moods={moods}
                user={currentUser}
                onUpdateRace={handleUpdateRace}
                // // handleAddMood={handleAddMood}
                // // handleUpdateMood={handleUpdateMood}
                // // handleDeleteMood={handleDeleteMood}
              />
            </Route>
          </CharContext.Provider>
          <Route path="*">
            <h1>404 Error: Sorry we can't find your page</h1>
          </Route>
        </Switch>
      }
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;


          {/* <Route exact path="/campaigns">
            <Campaign 
            onAddCampaign={handleAddCampaign}
            user={currentUser}
            onUpdateCampaign={handleUpdateCampaign}
            onDeleteCampaign={handleDeleteCampaign}
            campaigns={campaigns}
            /> */}
          {/* </Route> */}