import React, {useState} from 'react'
import Select from 'react-select';

function Cleric(props) {

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
            <h1>Cleric</h1>
            <img src="https://www.dndbeyond.com/avatars/10/2/636336417054144618.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp"/>
            <p>A priestly champion who wields divine magic in service of a higher power</p>
            <p>Hit Die: d8</p>
            <p>Primary Ability: Wisdom</p>
            <p>Saves: Wisdom & Charisma </p>
            <br></br>
            <button name="Cleric" className="select-btn" onClick={(e) => handleClick(e)}>select</button>
        </div>
    </div>
    </>
    ) : "";
}

export default Cleric