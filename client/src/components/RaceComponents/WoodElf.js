import React, {useState} from 'react'
import Select from 'react-select';

function WoodElf(props) {

    const handleClick = (e) => {
        props.handleAddRace(e)
        props.setTrigger(false)
    }

    const [showDarkvision, setShowDarkvision] = useState(false)
    const [showKeenSenses, setShowKeenSenses] = useState(false)
    const [showFeyAncestory, setShowFeyAncestory] = useState(false)
    const [showTrance, setShowTrance] = useState(false)
    const [showAbilityScoreIncrease, setShowAbilityScoreIncrease] = useState(false)
    const [showElfWeaponTraining, setShowElfWeaponTraining] = useState(false)
    const [showFleetOfFoot, setShowFleetOfFoot] = useState(false)
    const [showMaskOfTheWild, setShowMaskOfTheWild] = useState(false)

    return (props.trigger) ? (
    <>
    <div className="popup">
        <div className="popup-inner">
            <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
            {props.children}
            <h1>Wood Elf</h1>
            <img src="https://www.dndbeyond.com/avatars/9/367/636327456923059326.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp"/>
            <p>Elves are a magical people of otherworldly grace, living in the world but not entirely part of it.</p>
            <p>As a wood elf, you have keen senses and intuition, and your fleet feet carry you quickly and stealthily through your native forests. This category includes the wild elves (grugach) of Greyhawk and the Kagonesti of Dragonlance, as well as the races called wood elves in Greyhawk and the Forgotten Realms. In Faerûn, wood elves (also called wild elves, green elves, or forest elves) are reclusive and distrusting of non-elves.</p>
            <p>Wood elves’ skin tends to be copperish in hue, sometimes with traces of green. Their hair tends toward browns and blacks, but it is occasionally blond or copper-colored. Their eyes are green, brown, or hazel.</p>
            <p>Racial Traits: Darkvision, Keen Senses, Fey Ancestry, Trance, Elf Weapon Training, Fleet of Foot, Mask of the Wild</p>
            <button onClick={()=>setShowDarkvision(!showDarkvision)}><p>Darkvision</p></button>
                {
                    showDarkvision?<p>Accustomed to twilit forests and the night sky, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.</p>
                    :null
                }
            <br></br>
            <button onClick={()=>setShowKeenSenses(!showKeenSenses)}><p>Keen Senses</p></button>
                {
                    showKeenSenses?<p>
                        You have proficiency in the Perception skill.
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
            <button onClick={()=>setShowTrance(!showTrance)}><p>Trance</p></button>
                {
                    showTrance?<p>
                        Elves don’t need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is “trance.”) While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting in this way, you gain the same benefit that a human does from 8 hours of sleep.
                    </p>:null
                }
            <br></br>
            <button onClick={()=>setShowAbilityScoreIncrease(!showAbilityScoreIncrease)}><p>Abiltiy Score Increase</p></button>
                {
                    showTrance?<p>
                        Your Intelligence score increases by 1.
                    </p>:null
                }
            <br></br>
            <button onClick={()=>setShowElfWeaponTraining(!showElfWeaponTraining)}><p>Elf Weapon Training</p></button>
                {
                    showElfWeaponTraining?<p>
                        You have proficiency with the longsword, shortsword, shortbow, and longbow.
                    </p>:null
                }
            <br></br>
            <button onClick={()=>setShowFleetOfFoot(!showFleetOfFoot)}><p>Fleet of Foot</p></button>
                {
                    showFleetOfFoot?<p>
                        Your base walking speed increases to 35 feet.
                    </p>:null
                }
            <br></br>
            <button onClick={()=>setShowMaskOfTheWild(!showMaskOfTheWild)}><p>Mask of the Wild</p></button>
                {
                    showMaskOfTheWild?<p>
                        You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.
                    </p>:null
                }
            <br></br>
            <button name="Wood Elf" className="select-btn" onClick={(e) => handleClick(e)}>select</button>
        </div>
    </div>
    </>
    ) : "";
}

export default WoodElf