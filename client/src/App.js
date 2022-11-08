import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Abilities from './components/Abilities';
import ClassComponent from './components/ClassComponent';
import Description from './components/Description';
import Equipment from './components/Equipment';
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Race from './components/Race';
import Register from "./components/Register";
import YourCharacters from './components/YourCharacters';

function App() {
  //user useState
  const [currentUser, setCurrentUser] = useState(false)

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

  return (
    <BrowserRouter>
      <Navbar currentUser={currentUser} updateUser={updateUser}/>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Login updateUser={updateUser} />
          </Route>
          <Route exact path="/register" >
            <Register updateUser={updateUser} />
          </Route>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route exact path="/races">
            <Race/>
          </Route>
          <Route exact path="/classes">
            <ClassComponent/>
          </Route>
          <Route exact path="/ablities">
            <Abilities/>
          </Route>
          <Route exact path="/descriptions">
            <Description/>
          </Route>
          <Route exact path="/equipment">
            <Equipment/>
          </Route>
          <Route exact path="/characters">
            <YourCharacters/>
          </Route>
          <Route exact path="/users/:id">
            <h2>Hello {currentUser.name}</h2>
          </Route>
          <Route path="*">
            <h1>404 Error: Sorry we can't find your page</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;