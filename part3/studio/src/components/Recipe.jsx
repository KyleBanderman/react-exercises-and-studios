import { useState } from 'react';

const RecipeAuthor = () => {
   let authorLink = "https://www.joshuaweissman.com/";
   let authorPhoto = "https://www.dropbox.com/scl/fi/hbyac6u8mh5l9uec8fngk/JWeissman.jpg?rlkey=1ebc45io82zeoklyleswlkrki&raw=1";
   let authorName = "Joshua Weissman";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["Chipotle Chicken", "Spicy Blacks Beans", "Cilantro Lime Rice", "Corn Salsa", "Picked Red Onions"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1></h1>
            <p></p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://static.wixstatic.com/media/d919ff_e27dd6e9c5ec4e32923c8e94bb580d5b~mv2.jpg/v1/fill/w_960,h_849,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d919ff_e27dd6e9c5ec4e32923c8e94bb580d5b~mv2.jpg" alt="Burrito Bowl" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}
