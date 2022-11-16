import React, { useContext, useEffect, useState } from 'react';

function YourAccount() {

    const [campaign, setCampaigns] = useState([])

    // useEffect(() => {
    //     fetch('/users', {
    //         method: "GET",
    //     })
    //     .then(response => response.json())
    //     .then(users => {
    //         setUsers(users)
    //     })
    // }), []

    return (
        <>
            {/* {users.map((user)=>
              <>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              </>
            )} */}
        </>
    )
}

export default YourAccount