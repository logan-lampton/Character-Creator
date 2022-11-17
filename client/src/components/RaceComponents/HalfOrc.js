import React, {useState} from 'react'
import Select from 'react-select';

function HalfOrc(props) {

    const handleClick = (e) => {
        props.handleAddRace(e)
        props.setTrigger(false)
    }

    const [showDarkvision, setShowDarkvision] = useState(false)
    const [showMenacing, setShowMenacing] = useState(false)
    const [showRelentlessEndurance, setShowRelentlessEndurance] = useState(false)
    const [showSavageAttacks, setShowSavageAttacks] = useState(false)

    return (props.trigger) ? (
    <>
    <div className="popup">
        <div className="popup-inner">
            <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
            {props.children}
            <h1>Half-Orc</h1>
            <img src="https://www.dndbeyond.com/avatars/9/385/636327460616726799.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp"/>
            <p>Some half-orcs rise to become proud leaders of orc communities. Some venture into the world to prove their worth. Many of these become adventurers, achieving greatness for their mighty deeds.</p>
            <p>Racial Traits: Darkvision, Menacing, Relentless Endurance, Savage Attacks</p>
            <button onClick={()=>setShowDarkvision(!showDarkvision)}><p>Darkvision</p></button>
                {
                    showDarkvision?<p>Thanks to your orc blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.</p>
                    :null
                }
            <br></br>
            <button onClick={()=>setShowMenacing(!showMenacing)}><p>Menacing</p></button>
                {
                    showMenacing?<p>
                        You gain proficiency in the Intimidation skill.
                    </p>:null
                }
            <br></br>
            <button onClick={()=>setShowRelentlessEndurance(!showRelentlessEndurance)}><p>Relentless Endurance</p></button>
                {
                    showRelentlessEndurance?<p>
                        When you are reduced to 0 hit points but not killed outright, you can drop to 1 hit point instead. You can’t use this feature again until you finish a long rest.
                    </p>:null
                }
            <br></br>
            <button onClick={()=>setShowSavageAttacks(!showSavageAttacks)}><p>Savage Attacks</p></button>
                {
                    showSavageAttacks?<p>
                        When you score a critical hit with a melee weapon attack, you can roll one of the weapon’s damage dice one additional time and add it to the extra damage of the critical hit.
                    </p>:null
                }
            <br></br>
            <button name="Half-Orc" className="select-btn" onClick={(e) => handleClick(e)}>select</button>
        </div>
    </div>
    </>
    ) : "";
}

export default HalfOrc