import React, { FC, MouseEventHandler } from 'react';
import styles from './Card.module.css';

interface Props {
    title: string;
    img: string;
    btnText: string;
    btnOnClick?: MouseEventHandler<HTMLButtonElement>;
}
const Card: FC<Props> = ({ title, img, btnText, btnOnClick }) => {
    return (
        <div className={styles.card}>
            <figure>
                <img src={img} alt={title} className={styles.movieImage} />
                <figcaption className={styles.movieTitle}>{title}</figcaption>
            </figure>

            <button
                className={styles.btn}
                onClick={btnOnClick ? btnOnClick : undefined}
            >
                {btnText}
            </button>
        </div>
    );
};
export default Card;
