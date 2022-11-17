import React, {useState} from 'react'
import Select from 'react-select';

function Tiefling(props) {

    const handleClick = (e) => {
        props.handleAddRace(e)
        props.setTrigger(false)
    }

    const [showDarkvision, setShowDarkvision] = useState(false)
    const [showHellishResistance, setShowHellishResistance] = useState(false)
    const [showInfernalLegacy, setShowInfernalLegacy] = useState(false)


    return (props.trigger) ? (
    <>
    <div className="popup">
        <div className="popup-inner">
            <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
            {props.children}
            <h1>Tiefling</h1>
            <img src="https://www.dndbeyond.com/avatars/9/388/636327461109911160.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp"/>
            <p>To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefling.</p>
            <p>Racial Traits: Darkvision, Hellish Resistance, Infernal Legacy</p>
            <button onClick={()=>setShowDarkvision(!showDarkvision)}><p>Darkvision</p></button>
                {
                    showDarkvision?<p>Thanks to your infernal heritage, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.</p>
                    :null
                }
            <br></br>
            <button onClick={()=>setShowHellishResistance(!showHellishResistance)}><p>Hellish Resistance</p></button>
                {
                    showHellishResistance?<p>
                        You have resistance to fire damage.
                    </p>:null
                }
            <br></br>
            <button onClick={()=>setShowInfernalLegacy(!showInfernalLegacy)}><p>Infernal Legacy</p></button>
                {
                    showInfernalLegacy?<p>
                        You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.
                    </p>:null
                }
            <br></br>
            <button name="Tiefling" className="select-btn" onClick={(e) => handleClick(e)}>select</button>
        </div>
    </div>
    </>
    ) : "";
}

export default Tiefling