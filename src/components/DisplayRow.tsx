import React, { FC } from 'react';
import Card from './Card';
import styles from './DisplayRow.module.css';

interface Props {
    movies: any[];
    DisplayName: string;
}
const DisplayRow: FC<Props> = ({ DisplayName, movies }) => {
    return (
        <div>
            <h2 className={styles.listTitle}>{DisplayName.toUpperCase()}</h2>
            <ul className={styles.listItem}>
                {movies.map((movie) => (
                    <li>
                        <Card
                            title={movie.title}
                            img={movie.img}
                            btnText="add"
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default DisplayRow;
