import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      {
         "label": "Pinterest",
         "value": "Pinterest"

      },
      {
         "label": "Facebook",
         "value": "Facebook"
      },
      {
         "label": "X",
         "value": "X"
      }
   ];
   let [boardName, setName] = useState("no boards yet!");
   const handleChange = (event) => {
      setName(boardName = event.target.value)
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
      {boards.map((data) => {
         <option value = {data.value}>{data.label}</option>
      })}
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
