import React, {useState} from 'react'
import Select from 'react-select';

function Sorcerer(props) {

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
            <h1>Sorcerer</h1>
            <img src="https://www.dndbeyond.com/avatars/10/9/636336417773983369.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp"/>
            <p>A spellcaster who draws on inherent magic from a gift or bloodline</p>
            <p>Hit Die: d6</p>
            <p>Primary Ability: Charisma</p>
            <p>Saves: Constitution & Charisma</p>
            <br></br>
            <button name="Sorcerer" className="select-btn" onClick={(e) => handleClick(e)}>select</button>
        </div>
    </div>
    </>
    ) : "";
}

export default Sorcerer