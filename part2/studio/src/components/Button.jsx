import ClickedButton from "./ClickedButton";
import SaveButton from "./SaveButton";

function Button({ saveButton }) {
  return (
    saveButton ? <SaveButton /> : <ClickedButton />
  )
}

export default Button;
