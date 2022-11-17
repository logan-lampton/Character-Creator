import React, {useState} from 'react'
import Select from 'react-select';

function HalfElf(props) {

    const handleClick = (e) => {
        props.handleAddRace(e)
        props.setTrigger(false)
    }

    const [showAbilityScoreIncrease, setShowAbilityScoreIncrease] = useState(false)
    const [showDarkvision, setShowDarkvision] = useState(false)
    const [showFeyAncestory, setShowFeyAncestory] = useState(false)
    const [showSkillVersatility, setShowSkillVersatility] = useState(false)
    const [showLanguages, setShowLanguages] = useState(false)

    return (props.trigger) ? (
    <>
    <div className="popup">
        <div className="popup-inner">
            <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
            {props.children}
            <h1>Half-Elf</h1>
            <img src="https://www.dndbeyond.com/avatars/9/381/636327459940259125.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp"/>
            <p>Half-elves combine what some say are the best qualities of their elf and human parents.</p>
            <p>Racial Traits: Darkvision, Fey Ancestry, Skill Versatility</p>
            <button onClick={()=>setShowAbilityScoreIncrease(!showAbilityScoreIncrease)}><p>Abiltiy Score Increase</p></button>
                {
                    showAbilityScoreIncrease?<p>Your Charisma score increases by 2, and two other ability scores of your choice increase by 1.</p>
                    :null
                }
            <br></br>
            <button onClick={()=>setShowDarkvision(!showDarkvision)}><p>Darkvision</p></button>
                {
                    showDarkvision?<p>
                        Thanks to your elf blood, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.
                    </p>:null
                }
            <br></br>
            <button onClick={()=>setShowFeyAncestory(!showFeyAncestory)}><p>Fey Ancestory</p></button>
                {
                    showFeyAncestory?<p>
                        You have advantage on saving throws against being charmed, and magic can’t put you to sleep.
                    </p>:null
                }
            <br></br>
            <button onClick={()=>setShowSkillVersatility(!showSkillVersatility)}><p>Skill Versatility</p></button>
                {
                    showSkillVersatility?<p>
                        You have advantage on saving throws against being charmed, and magic can’t put you to sleep.
                    </p>:null
                }
            <br></br>
            <button onClick={()=>setShowLanguages(!showLanguages)}><p>Languages</p></button>
                {
                    showLanguages?<p>
                        You can speak, read, and write Common, Elvish, and one extra language of your choice.
                    </p>:null
                }
            <br></br>
            <button name="Half-Elf" className="select-btn" onClick={(e) => handleClick(e)}>select</button>
        </div>
    </div>
    </>
    ) : "";
}

export default HalfElf