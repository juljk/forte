import React from 'react'
import styled from 'styled-components'
import logo from './logo.svg'
import './App.scss'

const Button = styled.button`
    cursor: pointer;
    background: transparent;
    font-size: 16px;
    border-radius: 3px;
    color: palevioletred;
    border: 2px solid palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
    transition: 0.5s all ease-out;

    &:hover {
    background-color: palevioletred;
    color: white;
    }
`;

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <Button>Press!</Button>
            </header>
        </div>
    );
}

export default App;
