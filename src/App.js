import {useState} from "react";

function App() {
    const orders = [100, 200, 300];
    const [counter, setCounter] = useState(() => {
        return orders.reduce((total, cur) => total + cur);
    });

    const handleIncrease = () => {
        setCounter(prevState => prevState + 1)
    }

    return (
        <div className="App" style={{padding: 20}}>
            <h1>{counter}</h1>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    );
}

export default App;
