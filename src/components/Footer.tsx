import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

const Footer: FC = () => {
    const myList = useSelector((state: RootState) => state.movies.mylist);
    return (
        <footer
            style={{
                position: 'absolute',
                bottom: '5px',
                width: '100%',
            }}
        >
            <h2>my movie list </h2>
            {!myList.length ? (
                <div>empty</div>
            ) : (
                <ul
                    style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                    }}
                >
                    {myList.map((movie) => (
                        <li key={movie.id}>{movie.title}</li>
                    ))}
                </ul>
            )}
        </footer>
    );
};
export default Footer;
