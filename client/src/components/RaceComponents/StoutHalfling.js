import React, {useState} from 'react'
import Select from 'react-select';

function StoutHalfling(props) {

    const handleClick = (e) => {
        props.handleAddRace(e)
        props.setTrigger(false)
    }

    const [showLucky, setShowLucky] = useState(false)
    const [showBrave, setShowBrave] = useState(false)
    const [showHalflingNimbleness, setShowHalflingNimbleness] = useState(false)
    const [showStoutResilience, setShowStoutResilience] = useState(false)


    return (props.trigger) ? (
    <>
    <div className="popup">
        <div className="popup-inner">
            <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
            {props.children}
            <h1>Stout Halfling</h1>
            <img src="https://www.dndbeyond.com/avatars/9/384/636327460414027388.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp"/>
            <p>The diminutive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offense.</p>
            <p>As a stout halfling, you’re hardier than average and have some resistance to poison. Some say that stouts have dwarven blood. In the Forgotten Realms, these halflings are called stronghearts, and they’re most common in the south.</p>
            <p>Racial Traits: Lucky, Brave, Halfling Nimbleness, Stout Resilience</p>
            <button onClick={()=>setShowLucky(!showLucky)}><p>Lucky</p></button>
                {
                    showLucky?<p>
                        When you roll a 1 on the d20 for an attack roll, ability check, or saving throw, you can reroll the die and must use the new roll.
                        </p>
                    :null
                }
            <br></br>
            <button onClick={()=>setShowBrave(!showBrave)}><p>Brave</p></button>
                {
                    showBrave?<p>
                        You have advantage on saving throws against being frightened.
                    </p>:null
                }
            <br></br>
            <button onClick={()=>setShowHalflingNimbleness(!showHalflingNimbleness)}><p>Halfling Nimbleness</p></button>
                {
                    showHalflingNimbleness?<p>
                        You can move through the space of any creature that is of a size larger than yours.
                    </p>:null
                }
            <br></br>
            <button onClick={()=>setShowStoutResilience(!showStoutResilience)}><p>Stout Resilience</p></button>
                {
                    showStoutResilience?<p>
                        You have advantage on saving throws against poison, and you have resistance against poison damage.
                    </p>:null
                }
            <br></br>
            <button name="Stout Halfling" className="select-btn" onClick={(e) => handleClick(e)}>select</button>
        </div>
    </div>
    </>
    ) : "";
}

export default StoutHalfling