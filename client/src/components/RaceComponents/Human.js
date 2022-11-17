import React, {useState} from 'react'
import Select from 'react-select';

function Human(props) {

    const handleClick = (e) => {
        props.handleAddRace(e)
        props.setTrigger(false)
    }

    const [showAbilityScoreIncrease, setShowAbilityScoreIncrease] = useState(false)
    const [showLanguages, setShowLanguages] = useState(false)

    return (props.trigger) ? (
    <>
    <div className="popup">
        <div className="popup-inner">
            <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
            {props.children}
            <h1>Human</h1>
            <img src="https://www.dndbeyond.com/avatars/9/386/636327460764467148.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp"/>
            <p>Humans are the most adaptable and ambitious people among the common races. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.</p>
            <p>Racial Traits: +1 to All Ability Scores, Extra Language</p>
            <button onClick={()=>setShowAbilityScoreIncrease(!showAbilityScoreIncrease)}><p>Ability Score Increase</p></button>
                {
                    showAbilityScoreIncrease?<p>Your ability scores each increase by 1.
                    </p>
                    :null
                }
            <br></br>
            <button onClick={()=>setShowLanguages(!showLanguages)}><p>Languages</p></button>
                {
                    showLanguages?<p>
                        You can speak, read, and write Common and one extra language of your choice. Humans typically learn the languages of other peoples they deal with, including obscure dialects. They are fond of sprinkling their speech with words borrowed from other tongues: Orc curses, Elvish musical expressions, Dwarvish military phrases, and so on.
                    </p>:null
                }
            <br></br>
            <button name="Human" className="select-btn" onClick={(e) => handleClick(e)}>select</button>
        </div>
    </div>
    </>
    ) : "";
}

export default Human