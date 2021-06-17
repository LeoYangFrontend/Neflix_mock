import React, { FC } from 'react';
import styles from './Header.module.css';
const Header: FC = () => {
    return (
        <header className={styles.header}>
            <img
                src="Netflix-Logo.png"
                alt="netflix_logo"
                className={styles.logo}
            />
        </header>
    );
};
export default Header;
