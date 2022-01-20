import '../style/App.css';
import Button from '../components/Button'
import InputColor from '../components/InputColor'

function App() {
    return (
        <div className="App">
            <header id="App-header">
                <InputColor />
                <Button />
            </header>
        </div>
    );
}

export default App;
