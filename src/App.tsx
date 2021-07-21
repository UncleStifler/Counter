import React from 'react';
import './App.css';
import Counter from "./Components/Counter";


function App() {
    return (
        <div className="App">
            <div className="block">
                <Counter/>
            </div>
            <div className="block">
                {/*<CounterSet/>*/}
            </div>
        </div>
    );
}

export default App;
