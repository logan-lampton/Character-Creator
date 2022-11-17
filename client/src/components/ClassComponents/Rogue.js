import React, {useState} from 'react'
import Select from 'react-select';

function Rogue(props) {

    const handleClick = (e) => {
        props.handleAddClass(e)
        props.setTrigger(false)
    }

    return (props.trigger) ? (
    <>
    <div className="popup">
        <div className="popup-inner">
            <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
            {props.children}
            <h1>Rogue</h1>
            <img src="https://www.dndbeyond.com/avatars/10/8/636336417681318097.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp"/>
            <p>A scoundrel who uses stealth and trickery to overcome obstacles and enemies</p>
            <p>Hit Die: d8</p>
            <p>Primary Ability: Dexterity</p>
            <p>Saves: Dexterity & Intelligence </p>
            <br></br>
            <button name="Rogue" className="select-btn" onClick={(e) => handleClick(e)}>select</button>
        </div>
    </div>
    </>
    ) : "";
}

export default Rogue