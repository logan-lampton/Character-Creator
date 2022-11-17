import React, {useState} from 'react'
import Select from 'react-select';

function Monk(props) {

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
            <h1>Monk</h1>
            <img src="https://www.dndbeyond.com/avatars/10/5/636336417372349522.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp"/>
            <p>A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection</p>
            <p>Hit Die: d8</p>
            <p>Primary Ability: Dexterity & Wisdom</p>
            <p>Saves: Strength & Dexterity </p>
            <br></br>
            <button name="Monk" className="select-btn" onClick={(e) => handleClick(e)}>select</button>
        </div>
    </div>
    </>
    ) : "";
}

export default Monk