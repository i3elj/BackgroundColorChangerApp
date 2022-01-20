import '../style/Button.css'
import '../components/App'
import InputColor from '../components/InputColor'
import App from '../components/App'

const Button = () => {
    function changeBackgroundColor() {
        let inputValue = document.getElementById("input").value;
        document.getElementById("App-header").style.backgroundColor = inputValue;
    }

    return (
        <button onClick={changeBackgroundColor}>
            Apply
        </button>
    )
}

export default Button;
