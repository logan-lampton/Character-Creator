import './App.css';
import { useState, useEffect } from "react";
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

function App() {
  //user useState
  const [currentUser, setCurrentUser] = useState(false)
  console.log("current user?: ", currentUser)

  const [characters, setCharacters] = useState([])
  console.log("characters: ", characters)
  const [abilities, setAbilities] = useState([])
  const [characterClasses, setCharacterClasses] = useState([])
  const [descriptions, setDescriptions] = useState([])
  console.log("descriptions: ", descriptions)
  const [races, setRaces] = useState([])

  // const [campaigns, setCampaigns] = useState([])
  // const params = useParams()

  useEffect(() => {
    fetch('/users')
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

  function handleDeleteCharacter(id) {
    const updatedCharacterArray = characters.filter((character => character.id !== id));
    setCharacters(updatedCharacterArray)
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
    setDescriptions(updatedRacesArray)
  }

  function handleDeleteRace(id) {
    const updatedRacesArray = races.filter((race => race.id !== id));
    setDescriptions(updatedRacesArray)
  }

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
          {/* <Route exact path="/campaigns">
            <Campaign 
            onAddCampaign={handleAddCampaign}
            user={currentUser}
            onUpdateCampaign={handleUpdateCampaign}
            onDeleteCampaign={handleDeleteCampaign}
            campaigns={campaigns}
            /> */}
          {/* </Route> */}
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
          <Route exact path="/users/:id">
            <h1>Welcome {currentUser.name}</h1>
          </Route>
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