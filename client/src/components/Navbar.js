import React from "react"
import { Link } from "react-router-dom"

function Navbar({currentUser, updateUser}) {
    return(
        <>
            <nav className="nav-bar">
                <h1>Character Creator</h1>
                <ul>
                    <li><Link to="/home"><h2>Home</h2></Link></li>
                    <li><Link to="/races"><h2>Race</h2></Link></li>
                    <li><Link to="/classes"><h2>Class</h2></Link></li>
                    <li><Link to="/ablities"><h2>Abilities</h2></Link></li>
                    <li><Link to="/descriptions"><h2>Description</h2></Link></li>
                    <li><Link to="/equipment"><h2>Equipment</h2></Link></li>
                    <li><Link to="/characters"><h2>Your Created Characters</h2></Link></li>
                    {/* {currentUser && <li className="link" onClick={handleLogOut}>Logout</li>} */}
                </ul>
            </nav>
        </>
    )
}

export default Navbar