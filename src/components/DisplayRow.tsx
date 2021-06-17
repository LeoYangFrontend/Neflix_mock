import React, { FC, useMemo } from 'react';
import { MovieState } from '../features/counter/movieSlice';
import styles from './DisplayRow.module.css';

interface Props {
    movies: any[];
    DisplayName: string;
    renderBtn: (movie: MovieState) => JSX.Element;
}
const DisplayRow: FC<Props> = ({ DisplayName, movies, renderBtn }) => {
    const numOFMovie = useMemo(() => movies.length, [movies]);

    return (
        <div>
            <h2 className={styles.listTitle}>{DisplayName.toUpperCase()}</h2>
            {!numOFMovie ? (
                <div>Nothing in {DisplayName.toUpperCase()}</div>
            ) : (
                <ul className={styles.listItems}>
                    {movies.map((movie) => (
                        <li key={movie.id} className={styles.listItem}>
                            {renderBtn(movie)}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
export default DisplayRow;
