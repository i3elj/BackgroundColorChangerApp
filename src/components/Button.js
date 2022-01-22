import "../style/Button.css";
import { changeBackgroundColor } from "../controllers/colors";

const Button = () => {
  return <button onClick={changeBackgroundColor}>Apply</button>;
};

export default Button;
