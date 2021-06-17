import React from 'react';
import './App.css';
// import Example from './components/Example';
import Header from './components/Header';
import MyList from './components/MyList';
import Recommendations from './components/Recommendations';

function App() {
    return (
        <div
            style={{
                backgroundColor: 'black',
                height: '100vh',
                // width: '100vh',
            }}
        >
            <Header />
            <MyList />
            <Recommendations />
            <footer>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </footer>
        </div>
    );
}

export default App;
