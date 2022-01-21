import "../style/Button.css";
import InputColor from "../components/InputColor";
import App from "../components/App";
import { changeBackgroundColor } from "../controllers/colors";

const Button = () => {
  return <button onClick={changeBackgroundColor}>Apply</button>;
};

export default Button;
