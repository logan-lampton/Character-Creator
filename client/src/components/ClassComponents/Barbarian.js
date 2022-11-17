import React, {useState} from 'react'
import Select from 'react-select';

function Barbarian(props) {

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
            <h1>Barbarian</h1>
            <img src="https://www.dndbeyond.com/avatars/10/0/636336416778392507.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp"/>
            <p>A fierce warrior of primitive background who can enter a battle rage</p>
            <p>Hit Die: d12</p>
            <p>Primary Ability: Strength</p>
            <p>Saves: Strength & Constitution </p>
            <br></br>
            <button name="Barbarian" className="select-btn" onClick={(e) => handleClick(e)}>select</button>
        </div>
    </div>
    </>
    ) : "";
}

export default Barbarian