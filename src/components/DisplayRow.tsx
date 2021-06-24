import React, { FC, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../app/hooks';
import { RootState } from '../app/store';
import {
    addToMyList,
    MovieState,
    removeFromMyList,
} from '../features/counter/movieSlice';
import styles from './DisplayRow.module.css';

interface Props {
    movies: MovieState[];
    DisplayName: string;
    btnText: 'REMOVE' | 'ADD';
}
const DisplayRow: FC<Props> = ({ DisplayName, movies, btnText }) => {
    const dataStatus = useSelector((state: RootState) => state.movies.status);
    const numOFMovie = useMemo(() => movies.length, [movies]);
    const dispatch = useAppDispatch();

    return (
        <div>
            <h2 className={styles.listTitle}>{DisplayName.toUpperCase()}</h2>
            {!numOFMovie ? (
                <div>Nothing in {DisplayName.toUpperCase()}</div>
            ) : (
                <ul className={styles.listItems}>
                    {movies.map((movie) => (
                        <li key={movie.id} className={styles.listItem}>
                            <div className={styles.card}>
                                <figure>
                                    <img
                                        src={movie.img}
                                        alt={movie.title}
                                        className={styles.movieImage}
                                    />
                                    <figcaption className={styles.movieTitle}>
                                        {movie.title}
                                    </figcaption>
                                </figure>

                                <button
                                    className={styles.btn}
                                    onClick={() => {
                                        if (dataStatus === 'idle')
                                            btnText === 'REMOVE'
                                                ? dispatch(
                                                      removeFromMyList(movie)
                                                  )
                                                : dispatch(addToMyList(movie));
                                    }}
                                >
                                    {btnText}
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
export default DisplayRow;
