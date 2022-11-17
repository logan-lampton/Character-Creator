import React, {useState} from 'react'
import Select from 'react-select';

function Warlock(props) {

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
            <h1>Warlock</h1>
            <img src="https://www.dndbeyond.com/avatars/10/12/636336422983071263.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp"/>
            <p>A wielder of magic that is derived from a bargain with an extraplanar entity</p>
            <p>Hit Die: d8</p>
            <p>Primary Ability: Charisma</p>
            <p>Saves: Wisdom & Charisma </p>
            <br></br>
            <button name="Warlock" className="select-btn" onClick={(e) => handleClick(e)}>select</button>
        </div>
    </div>
    </>
    ) : "";
}

export default Warlock