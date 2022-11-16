// import React, { useState, useEffect } from "react"
// import MoodCrud from "./MoodCrud"

// function MoodComponents() {
//     const [moods, setMoods] = useState([]);
   
//     useEffect(() => {
//         fetch("/moods")
//           .then((r) => r.json())
//           .then((moods) => {setMoods(moods)});
//       }, []);
    
//     // const options = answers.map((answer, index) => (
//     //     <option key={index} value={index}>
//     //       {answer}
//     //     </option>
//     //   ));
//     console.log("Moods in MoodComponents: ", moods)
   
//     const moodMap = moods.map((mood) => (
//         <MoodCrud
//             key={mood.id}
//             mood={mood}
//         />
//     ))

//     return(
//         <>
//         <h1>Mood Components</h1>
//         <ul>{moodMap}</ul>
//         </>
//     )
// }

// export default MoodComponents