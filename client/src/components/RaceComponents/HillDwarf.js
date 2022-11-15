import React, {useState} from 'react'
import Select from 'react-select';

function HillDwarf(props) {

    const handleClick = (e) => {
        props.handleAddRace(e)
        props.setTrigger(false)
    }

    const draconicAncestory = [
        {value: "black", label: "Black Dragon"},
        {value: "blue", label: "Blue Dragon"},
        {value: "brass", label: "Brass Dragon"},
        {value: "bronze", label: "Bronze Dragon"},
        {value: "copper", label: "Copper Dragon"},
        {value: "gold", label: "Gold Dragon"},
        {value: "green", label: "Green Dragon"},
        {value: "red", label: "Red Dragon"},
        {value: "silver", label: "Silver Dragon"},
        {value: "white", label: "White Dragon"}
    ];

    const [showDarkVision, setShowDarkVision] = useState(false)
    const [showDwarvenResilience, setShowDwarvenResilience] = useState(false)
    const [showDwarvenCombatTraining, setShowDwarvenCombatTraining] = useState(false)
    const [showToolProficiency, setShowToolProficiency] = useState(false)
    const [showStonecunning, setShowStonecunning] = useState(false)
    const [showDwarvenToughness, setShowDwarvenToughness] = useState(false)

    return (props.trigger) ? (
    <>
    <div className="popup">
        <div className="popup-inner">
            <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
            {props.children}
            <h1>Hill Dwarf</h1>
            <img src="https://www.dndbeyond.com/avatars/9/363/636327456259204263.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp"/>
            <p>Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal.</p>
            <p>As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience. The gold dwarves of Faerûn in their mighty southern kingdom are hill dwarves, as are the exiled Neidar and the debased Klar of Krynn in the Dragonlance setting.</p>
            <p>Racial Traits: Darkvision, Dwarven Resilience, Dwarven Combat Training, Tool Proficiency, Stonecunning, Dwarven Toughness</p>
            <button onClick={()=>setShowDarkVision(!showDarkVision)}><p>Dark Vision</p></button>
                {
                    showDarkVision?<p>Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.</p>
                    :null
                }
            <br></br>
            <button onClick={()=>setShowDwarvenResilience(!showDwarvenResilience)}><p>Dwarven Resilience</p></button>
                {
                    showDwarvenResilience?<p>You have advantage on saving throws against poison, and you have resistance against poison damage.
                    </p>:null
                }
            <br></br>
            <button onClick={()=>setShowDwarvenCombatTraining(!showDwarvenCombatTraining)}><p>Dwarven Combat Training</p></button>
                {
                    showDwarvenCombatTraining?<p>
                        You have proficiency with the battleaxe, handaxe, light hammer, and warhammer.
                    </p>:null
                }
            <br></br>
            <button onClick={()=>setShowToolProficiency(!showToolProficiency)}><p>Tool Proficiency</p></button>
                {
                    showToolProficiency?<p>
                        You gain proficiency with the artisan’s tools of your choice: smith’s tools, brewer’s supplies, or mason’s tools.
                    </p>:null
                }
            <br></br>
            <button onClick={()=>setShowStonecunning(!showStonecunning)}><p>Stonecunning</p></button>
                {
                    showStonecunning?<p>
                        Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.
                    </p>:null
                }
            <br></br>
            <button onClick={()=>setShowDwarvenToughness(!showDwarvenToughness)}><p>Dwarven Toughness</p></button>
                {
                    showDwarvenToughness?<p>
                        Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.
                    </p>:null
                }
            <br></br>
            <button name="Hill Dwarf" className="select-btn" onClick={(e) => handleClick(e)}>select</button>
        </div>
    </div>
    </>
    ) : "";
}

export default HillDwarf