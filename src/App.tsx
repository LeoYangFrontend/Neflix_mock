import React from 'react';
import './App.css';
import Footer from './components/Footer';
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
            <Footer />
        </div>
    );
}

export default App;
