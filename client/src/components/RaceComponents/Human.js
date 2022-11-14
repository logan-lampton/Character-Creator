import React, {useState} from 'react'
import Select from 'react-select';

function Human(props) {

    const draconicAncestory = [
        {value: "black", label: "Black Dragon"},
        {value: "blue", label: "Blue Dragon"},
        {value: "brass", label: "Brass Dragon"},
        {value: "bronze", label: "Bronze Dragon"},
        {value: "copper", label: "Copper Dragon"},
        {value: "gold", label: "Gold Dragon"},
        {value: "green", label: "Green Dragon"},
        {value: "red", label: "Red Dragon"},
        {value: "silver", label: "Silver Dragon"},
        {value: "white", label: "White Dragon"}
    ];

    const [showDraconicAncestory, setShowDraconicAncestory] = useState(false)
    const [showBreathWeapon, setShowBreathWeapon] = useState(false)
    const [showDamageResistance, setShowDamageResistance] = useState(false)


    return (props.trigger) ? (
    <>
    <div className="popup">
        <div className="popup-inner">
            <button className="close-btn" onClick={() => props.setTrigger(false)}>close</button>
            {props.children}
            <h1>Dragonborn</h1>
            <img src="https://www.dndbeyond.com/avatars/9/361/636327455772826858.jpeg?width=1000&height=1000&fit=bounds&quality=95&auto=webp"/>
            <p>Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail.</p>
            <p>Racial Traits: Draconic Ancestry, Breath Weapon, Damage Resistance</p>
            <button onClick={()=>setShowDraconicAncestory(!showDraconicAncestory)}><p>Draconic Ancestory</p></button>
                {
                    showDraconicAncestory?<p>You have draconic ancestry. Your breath weapon and damage resistance are determined by the dragon type. Choose one type of dragon from the Draconic Ancestry: Black: Acid, Blue: Lightning, Brass: Fire, Bronze: Lightning, Copper: Acid, Gold: Fire, Green: Poison, Red: Fire, Silver: Cold, White: Cold.</p>
                    :null
                }
            <br></br>
            <button onClick={()=>setShowBreathWeapon(!showBreathWeapon)}><p>Breath Weapon</p></button>
                {
                    showBreathWeapon?<p>
                        You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation. When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you can’t use it again until you complete a short or long rest.
                    </p>:null
                }
            <br></br>
            <button onClick={()=>setShowDamageResistance(!showDamageResistance)}><p>Damage Resistance</p></button>
                {
                    showDamageResistance?<p>
                        You have resistance to the damage type associated with your draconic ancestry.
                    </p>:null
                }
            <br></br>
            <button className="select-btn" onClick={() => props.setTrigger(false)}>select</button>
            {/* refactor the select-btn onClick to add the race info to the database */}
        </div>
    </div>
    </>
    ) : "";
}

export default Human