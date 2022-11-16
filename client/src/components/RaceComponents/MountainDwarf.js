import React, {useState} from 'react'
import Select from 'react-select';

function MountainDwarf(props) {

    const [showDarkVision, setShowDarkVision] = useState(false)
    const [showDwarvenResilience, setShowDwarvenResilience] = useState(false)
    const [showDwarvenCombatTraining, setShowDwarvenCombatTraining] = useState(false)
    const [showToolProficiency, setShowToolProficiency] = useState(false)
    const [showStonecunning, setShowStonecunning] = useState(false)
    const [showDwarvenArmorTraining, setShowDwarvenArmorTraining] = useState(false)

    const handleClick = (e) => {
        props.handleAddRace(e)
        props.setTrigger(false)
    }

    return (props.trigger) ? (
    <>
    <div className="popup">
        <div className="popup-inner">
            <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
            {props.children}
            <h1>Mountain Dwarf</h1>
            <img src="https://www.dndbeyond.com/avatars/9/364/636327456390157492.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp"/>
            <p>Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal.</p>
            <p>As a mountain dwarf, you’re strong and hardy, accustomed to a difficult life in rugged terrain. You’re probably on the tall side (for a dwarf), and tend toward lighter coloration. The shield dwarves of northern Faerûn, as well as the ruling Hylar clan and the noble Daewar clan of Dragonlance, are mountain dwarves.</p>
            <p>Racial Traits: Darkvision, Dwarven Resilience, Dwarven Combat Training, Tool Proficiency, Stonecunning, Dwarven Armor Training</p>
            <button onClick={()=>setShowDarkVision(!showDarkVision)}><p>Darkvision</p></button>
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
            <button onClick={() => setShowDwarvenArmorTraining(!showDwarvenArmorTraining)}><p>Dwarven Armor Training</p></button>
                {
                    showDwarvenArmorTraining?
                    <p>You have proficiency with light and medium armor.</p>:null
                }
            <br></br>
            <button name="Mountain Dwarf" className="select-btn" onClick={(e) => handleClick(e)}>select</button>
        </div>
    </div>
    </>
    ) : "";
}

export default MountainDwarf