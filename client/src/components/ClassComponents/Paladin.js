import React, {useState} from 'react'
import Select from 'react-select';

function Paladin(props) {

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
            <h1>Paladin</h1>
            <img src="https://www.dndbeyond.com/avatars/10/6/636336417477714942.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp"/>
            <p>A holy warrior bound to a sacred oath</p>
            <p>Hit Die: d10</p>
            <p>Primary Ability: Strength & Charisma</p>
            <p>Saves: Wisdom & Charisma </p>
            <br></br>
            <button name="Paladin" className="select-btn" onClick={(e) => handleClick(e)}>select</button>
        </div>
    </div>
    </>
    ) : "";
}

export default Paladin