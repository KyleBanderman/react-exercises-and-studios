import ClickedButton from './ClickedButton.jsx'
import SaveButton from './SaveButton.jsx'

function Button(props) {
   
    const saveButton = props.saveButton
   return (saveButton ? <SaveButton /> : <ClickedButton />)
   
 }
 
 export default Button;
 
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
 