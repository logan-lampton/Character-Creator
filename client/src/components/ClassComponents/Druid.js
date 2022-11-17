import React, {useState} from 'react'
import Select from 'react-select';

function Druid(props) {


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
            <h1>Druid</h1>
            <img src="https://www.dndbeyond.com/avatars/10/3/636336417152216156.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp"/>
            <p>A priest of the Old Faith, wielding the powers of nature and adopting animal forms</p>
            <p>Hit Die: d8</p>
            <p>Primary Ability: Wisdom</p>
            <p>Saves: Intelligence & Wisdom </p>
            <br></br>
            <button name="Druid" className="select-btn" onClick={(e) => handleClick(e)}>select</button>
        </div>
    </div>
    </>
    ) : "";
}

export default Druid