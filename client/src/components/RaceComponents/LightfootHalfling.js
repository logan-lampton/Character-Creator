import React, {useState} from 'react'
import Select from 'react-select';

function LightfootHalfling(props) {

    const handleClick = (e) => {
        props.handleAddRace(e)
        props.setTrigger(false)
    }

    const [showLucky, setShowLucky] = useState(false)
    const [showBrave, setShowBrave] = useState(false)
    const [showHalflingNimbleness, setShowHalflingNimbleness] = useState(false)
    const [showNaturallyStealthy, setShowNaturallyStealthy] = useState(false)

    return (props.trigger) ? (
    <>
    <div className="popup">
        <div className="popup-inner">
            <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
            {props.children}
            <h1>Lightfoot Halfling</h1>
            <img src="https://www.dndbeyond.com/avatars/9/383/636327460327748907.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp"/>
            <p>The diminutive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offense.</p>
            <p>Lightfoots are more prone to wanderlust than other halflings, and often dwell alongside other races or take up a nomadic life. In the world of Greyhawk, these halflings are called hairfeet or tallfellows.</p>
            <p>Racial Traits: Lucky, Brave, Halfling Nimbleness, Naturally Stealthy</p>
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
            <button onClick={()=>setShowNaturallyStealthy(!showNaturallyStealthy)}><p>Stealthy</p></button>
                {
                    showNaturallyStealthy?<p>
                        You can attempt to hide even when you are obscured only by a creature that is at least one size larger than you.
                    </p>:null
                }
            <br></br>
            <button name="Lightfoot Halfling" className="select-btn" onClick={(e) => handleClick(e)}>select</button>
        </div>
    </div>
    </>
    ) : "";
}

export default LightfootHalfling