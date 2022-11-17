import React, {useState} from 'react'
import Select from 'react-select';

function Fighter(props) {

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
            <h1>Fighter</h1>
            <img src="https://www.dndbeyond.com/avatars/10/4/636336417268495752.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp"/>
            <p>A master of martial combat, skilled with a variety of weapons and armor</p>
            <p>Hit Die: d10</p>
            <p>Primary Ability: Strength or Dexterity</p>
            <p>Saves: Strength & Constitution </p>
            <br></br>
            <button name="Fighter" className="select-btn" onClick={(e) => handleClick(e)}>select</button>
        </div>
    </div>
    </>
    ) : "";
}

export default Fighter