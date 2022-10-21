import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
    const preventClose = e => {
        e.preventDefault();
        e.returnValue = '';
        console.log('나간다');
        console.log(new Date().toString());
    };
    React.useEffect(() => {
        (() => {
            window.addEventListener('beforeunload', preventClose);
        })();
        return () => {
            window.removeEventListener('beforeunload', preventClose);
        };
    }, []);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
