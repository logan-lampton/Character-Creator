import React from "react"
import { Link } from "react-router-dom"

function Navbar({currentUser, updateUser}) {
    
    const handleLogOut = () => {
        // DELETE `/logout`
        fetch('/logout',{
          method:'DELETE'
        })
        .then(res => {
          if(res.ok){
            updateUser(false)
          }
        })
      }
    
    return(
        <>
            <nav className="nav-bar">
                <h1>Character Creator</h1>
                <ul>
                    <li><Link to="/home"><h2>Begin Character</h2></Link></li>
                    <li><Link to="/races"><h2>Race</h2></Link></li>
                    <li><Link to="/classes"><h2>Class</h2></Link></li>
                    <li><Link to="/ablities"><h2>Abilities</h2></Link></li>
                    <li><Link to="/descriptions"><h2>Description</h2></Link></li>
                    <li onClick="window.location.reload(true)"><Link to="/characters"><h2>Your Characters</h2></Link></li>
                    {/* <li><Link to="/campaigns"><h2>Campaign</h2></Link></li> */}
                    {currentUser && <li className="link" onClick={handleLogOut}><h2>Logout</h2></li>}
                </ul>
            </nav>
        </>
    )
}

export default Navbar