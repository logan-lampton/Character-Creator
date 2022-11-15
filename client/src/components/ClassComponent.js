import React, {useContext, useState} from "react";
import { CharContext } from "../App";
import Barbarian from "./ClassComponents/Barbarian";
import Bard from "./ClassComponents/Bard";
import Cleric from "./ClassComponents/Cleric";
import Druid from "./ClassComponents/Druid";
import Fighter from "./ClassComponents/Fighter";
import Monk from "./ClassComponents/Monk";
import Paladin from "./ClassComponents/Paladin";
import Ranger from "./ClassComponents/Ranger";
import Rogue from "./ClassComponents/Rogue";
import Sorcerer from "./ClassComponents/Sorcerer";
import Warlock from "./ClassComponents/Warlock";
import Wizard from "./ClassComponents/Wizard";

export default function ClassComponent() {
    const currentChar = useContext(CharContext)
    const [showBarbarianPopup, setShowBarbarianPopup] = useState(false);
    const [showBardPopup, setShowBardPopup] = useState(false);
    const [showClericPopup, setShowClericPopup] = useState(false);
    const [showDruidPopup, setShowDruidPopup] = useState(false);
    const [showFighterPopup, setShowFighterPopup] = useState(false);
    const [showMonkPopup, setShowMonkPopup] = useState(false);
    const [showPaladinPopup, setShowPaladinPopup] = useState(false)
    const [showRangerPopup, setShowRangerPopup] = useState(false);
    const [showRoguePopup, setShowRoguePopup] = useState(false);
    const [showSorcererPopup, setShowSorcererPopup] = useState(false);
    const [showWarlockPopup, setShowWarlockPopup] = useState(false);
    const [showWizardPopup, setShowWizardPopup] = useState(false);
    
    console.log("currentChar", currentChar)

    return (
        <>
        <div className='buttonList'>
            <h1>Class</h1>
            <p>Choose your class below:</p>
            <button onClick={() => setShowBarbarianPopup(true)}>Barbarian</button>
                <Barbarian trigger={showBarbarianPopup} setTrigger={setShowBarbarianPopup}></Barbarian>
            <button onClick={() => setShowBardPopup(true)}>Bard</button>
                <Bard trigger={showBardPopup} setTrigger={setShowBardPopup}></Bard>
            <button onClick={() => setShowClericPopup(true)}>Cleric</button>
                <Cleric trigger={showClericPopup} setTrigger={setShowClericPopup}></Cleric>
            <button onClick={() => setShowDruidPopup(true)}>Druid</button>
                <Druid trigger={showDruidPopup} setTrigger={setShowDruidPopup}></Druid>
            <button onClick={() => setShowFighterPopup(true)}>Fighter</button>
                <Fighter trigger={showFighterPopup} setTrigger={setShowFighterPopup}></Fighter>
            <button onClick={() => setShowMonkPopup(true)}>Monk</button>
                <Monk trigger={showMonkPopup} setTrigger={setShowMonkPopup}></Monk>
            <button onClick={() => setShowPaladinPopup(true)}>Paladin</button>
                <Paladin trigger={showPaladinPopup} setTrigger={setShowPaladinPopup}></Paladin>
            <button onClick={() => setShowRangerPopup(true)}>Ranger</button>
                <Ranger trigger={showRangerPopup} setTrigger={setShowRangerPopup}></Ranger>
            <button onClick={() => setShowRoguePopup(true)}>Rogue</button>
                <Rogue trigger={showRoguePopup} setTrigger={setShowRoguePopup}></Rogue>
            <button onClick={() => setShowSorcererPopup(true)}>Sorcerer</button>
                <Sorcerer trigger={showSorcererPopup} setTrigger={setShowSorcererPopup}></Sorcerer>
            <button onClick={() => setShowWarlockPopup(true)}>Warlock</button>
                <Warlock trigger={showWarlockPopup} setTrigger={setShowWarlockPopup}></Warlock>
            <button onClick={() => setShowWizardPopup(true)}>Wizard</button>
                <Wizard trigger={showWizardPopup} setTrigger={setShowWizardPopup}></Wizard>
        </div> 
    </> 
    );
}