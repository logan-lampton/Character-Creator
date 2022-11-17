import React, {useState} from 'react'
import Select from 'react-select';

function Ranger(props) {

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
            <h1>Ranger</h1>
            <img src="https://www.dndbeyond.com/avatars/10/7/636336417569697438.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp"/>
            <p>A warrior who combats threats on the edges of civilization</p>
            <p>Hit Die: d10</p>
            <p>Primary Ability: Dexterity & Wisdom</p>
            <p>Saves: Strength & Dexterity </p>
            <br></br>
            <button name="Ranger" className="select-btn" onClick={(e) => handleClick(e)}>select</button>
        </div>
    </div>
    </>
    ) : "";
}

export default Ranger