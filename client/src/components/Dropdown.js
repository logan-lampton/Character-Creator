import { useState } from 'react';

function Dropdown() {

    const [selected, setIsSelected] = useState("");
    const [isActive, setIsActive] = useState(false);
    const options = [];

    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
                <p>Choose One</p>
                <span className="fas fa-caret-down"></span>
            </div>
            {isActive && (
                <div className="dropdown-content">
                    {options.map((option) => (
                        <div onClick={(e) => {
                            setSelected(option)
                            setIsActive(false)
                        }
                        }className="dropdown-item">
                        {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )

}

export default Dropdown