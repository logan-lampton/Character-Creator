import React, {useState} from 'react'
import Select from 'react-select';

function Bard(props) {

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
            <h1>Bard</h1>
            <img src="https://www.dndbeyond.com/avatars/10/1/636336416923635770.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp"/>
            <p>An inspiring magician whose power echoes the music of creation</p>
            <p>Hit Die: d8</p>
            <p>Primary Ability: Charisma</p>
            <p>Saves: Dexterity & Charisma </p>
            <br></br>
            <button name="Bard" className="select-btn" onClick={(e) => handleClick(e)}>select</button>
        </div>
    </div>
    </>
    ) : "";
}

export default Bard