import recipedata from './recipe.json'
function RecipeImage() {
   return (
    <div>
      <img src={recipedata[1].recipeImage} alt={recipedata[1].name} width="300" height="300"/>;
    </div>
   )
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 