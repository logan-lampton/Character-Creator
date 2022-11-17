import React, {useState} from 'react'
import Select from 'react-select';

function Wizard(props) {

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
            <h1>Wizard</h1>
            <img src="https://www.dndbeyond.com/avatars/10/11/636336418370446635.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp"/>
            <p>A scholarly magic-user capable of manipulating the structures of reality</p>
            <p>Hit Die: d6</p>
            <p>Primary Ability: Intelligence</p>
            <p>Saves: Intelligence & Wisdom </p>
            <br></br>
            <button name="Wizard" className="select-btn" onClick={(e) => handleClick(e)}>select</button>
        </div>
    </div>
    </>
    ) : "";
}

export default Wizard