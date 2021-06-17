import React, { useEffect } from 'react';
import './App.css';
import { useAppDispatch } from './app/hooks';
import Footer from './components/Footer';
// import Example from './components/Example';
import Header from './components/Header';
import MyList from './components/MyList';
import Recommendations from './components/Recommendations';
import { fetchMovies } from './features/counter/movieSlice';

function App() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);
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
