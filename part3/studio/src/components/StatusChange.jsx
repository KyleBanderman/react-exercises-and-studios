import { useState } from 'react';

export default function StatusChange () {
   let [notes, setNotes] = useState("");
   let [recipeStatus, setStatus] = useState(false);

   const handleChange = (event) => {
      setNotes(notes = event.target.value);
   }

   const handleSubmit = (event) => {
      event.preventDefault()
      setStatus(recipeStatus = true);
   }

   const trueReturn = (
      <p>I have tried this recipe!</p>
   )

   const falseReturn = (
      <p>I have not tried this recipe!</p>
   )

   return (
      <div style={{paddingTop: "50px"}}>
         <form onSubmit={handleSubmit}>
            <label>Have you tried this recipe? Add your notes here: <input type="text" value={notes} onChange={handleChange} />
            </label>
            <input type="submit" />
         </form>

         <p>{notes}</p>

         {recipeStatus ? trueReturn : falseReturn}
      </div>
   );
}
