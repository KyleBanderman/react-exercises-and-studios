import styles from './styling.css'
import recipeData from './recipe.json'

let recipeAuthor = <div key={recipeData[1].author}>{recipeData[1].author}</div>;
let recipeAuthorImage = <img src={recipeData[1].authorImage} alt={recipeData[1].author} className="authorImage"/>
let recipeWebsite = <a href={recipeData[1].website}>Website</a>;

function AuthorInfo() {
   return (
    <div>
      {recipeAuthor}
      {recipeAuthorImage}
      {recipeWebsite}
    </div>
   );
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 