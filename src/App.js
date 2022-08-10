import {useState} from "react";
import Content from "./Content";

function App() {
    const [toggle, setToggle] = useState(false)
    return (
        <div className="App" style={{padding: 20}}>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>

            {toggle && <Content />}
        </div>
    );
}

export default App;
