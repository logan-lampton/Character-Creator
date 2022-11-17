import React, {useState} from 'react'
import Select from 'react-select';

function HighElf(props) {

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
    const [showCantrip, setShowCantrip] = useState(false)

    return (props.trigger) ? (
    <>
    <div className="popup">
        <div className="popup-inner">
            <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
            {props.children}
            <h1>High Elf</h1>
            <img src="https://www.dndbeyond.com/avatars/9/366/636327456833931461.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp"/>
            <p>Elves are a magical people of otherworldly grace, living in the world but not entirely part of it.</p>
            <p>As a high elf, you have a keen mind and a mastery of at least the basics of magic. In many of the worlds of D&D, there are two kinds of high elves. One type (which includes the gray elves and valley elves of Greyhawk, the Silvanesti of Dragonlance, and the sun elves of the Forgotten Realms) is haughty and reclusive, believing themselves to be superior to non-elves and even other elves. The other type (including the high elves of Greyhawk, the Qualinesti of Dragonlance, and the moon elves of the Forgotten Realms) are more common and more friendly, and often encountered among humans and other races.</p>
            <p>The sun elves of Faerûn (also called gold elves or sunrise elves) have bronze skin and hair of copper, black, or golden blond. Their eyes are golden, silver, or black. Moon elves (also called silver elves or gray elves) are much paler, with alabaster skin sometimes tinged with blue. They often have hair of silver-white, black, or blue, but various shades of blond, brown, and red are not uncommon. Their eyes are blue or green and flecked with gold.</p>
            <p>Racial Traits: Darkvision, Keen Senses, Fey Ancestry, Trance, Elf Weapon Training, Cantrip</p>
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
            <button onClick={()=>setShowCantrip(!showCantrip)}><p>Cantrip</p></button>
                {
                    showCantrip?<p>
                        You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.
                    </p>:null
                }
            <br></br>
            <button name="High Elf" className="select-btn" onClick={(e) => handleClick(e)}>select</button>
        </div>
    </div>
    </>
    ) : "";
}

export default HighElf