import React, {useState} from 'react'
import Select from 'react-select';

function Gnome(props) {

    const handleClick = (e) => {
        props.handleAddRace(e)
        props.setTrigger(false)
    };

    const [showDarkvision, setShowDarkvision] = useState(false)
    const [showGnomeCunning, setShowGnomeCunning] = useState(false)
    const [showArtificersLore, setShowArtificersLore] = useState(false)
    const [showTinker, setShowTinker] = useState(false)

    return (props.trigger) ? (
    <>
    <div className="popup">
        <div className="popup-inner">
            <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
            {props.children}
            <h1>Gnome</h1>
            <img src="https://www.dndbeyond.com/avatars/9/375/636327458223897714.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp"/>
            <p>A gnome’s energy and enthusiasm for living shines through every inch of his or her tiny body.</p>
            <p>As a rock gnome, you have a natural inventiveness and hardiness beyond that of other gnomes. Most gnomes in the worlds of D&D are rock gnomes, including the tinker gnomes of the Dragonlance setting.</p>
            <p>Racial Traits: Darkvision, Gnome Cunning, Artificer’s Lore, Tinker</p>
            <button onClick={()=>setShowDarkvision(!showDarkvision)}><p>Darkvision</p></button>
                {
                    showDarkvision?<p>Accustomed to life underground, you have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You can’t discern color in darkness, only shades of gray.</p>
                    :null
                }
            <br></br>
            <button onClick={()=>setShowGnomeCunning(!showGnomeCunning)}><p>Gnome Cunning</p></button>
                {
                    showGnomeCunning?<p>
                        You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.
                    </p>:null
                }
            <br></br>
            <button onClick={()=>setShowArtificersLore(!showArtificersLore)}><p>Artificer’s Lore</p></button>
                {
                    showArtificersLore?<p>
                        Whenever you make an Intelligence (History) check related to magic items, alchemical objects, or technological devices, you can add twice your proficiency bonus, instead of any proficiency bonus you normally apply.
                    </p>:null
                }
            <br></br>
            <button onClick={()=>setShowTinker(!showTinker)}><p>Tinker</p></button>
                {
                    showTinker?<p>
                        You have proficiency with artisan’s tools (tinker’s tools). Using those tools, you can spend 1 hour and 10 gp worth of materials to construct a Tiny clockwork device (AC 5, 1 hp). The device ceases to function after 24 hours (unless you spend 1 hour repairing it to keep the device functioning), or when you use your action to dismantle it; at that time, you can reclaim the materials used to create it. You can have up to three such devices active at a time. When you create a device, choose one of the following options: Clockwork Toy. This toy is a clockwork animal, monster, or person, such as a frog, mouse, bird, dragon, or soldier. When placed on the ground, the toy moves 5 feet across the ground on each of your turns in a random direction. It makes noises as appropriate to the creature it represents. Fire Starter. The device produces a miniature flame, which you can use to light a candle, torch, or campfire. Using the device requires your action. Music Box. When opened, this music box plays a single song at a moderate volume. The box stops playing when it reaches the song’s end or when it is closed.
                    </p>:null
                }
            <br></br>
            <button name="Gnome" className="select-btn" onClick={(e) => handleClick(e)}>select</button>
        </div>
    </div>
    </>
    ) : "";
}

export default Gnome