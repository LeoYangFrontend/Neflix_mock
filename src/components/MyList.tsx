import React, { FC, useState } from 'react';
import DisplayRow from './DisplayRow';

type movie = {
    id: string;
    title: string;
    img: string;
};

interface Props {}

const MyList: FC<Props> = () => {
    const [MyList, setMyList] = useState([
        {
            title: 'Futurama',
            id: 1,
            img: 'http://cdn1.nflximg.net/webp/7621/3787621.webp',
        },
        {
            title: 'The Interview',
            id: 2,
            img: 'http://cdn1.nflximg.net/webp/1381/11971381.webp',
        },
        {
            title: 'Gilmore Girls',
            id: 3,
            img: 'http://cdn1.nflximg.net/webp/7451/11317451.webp',
        },
    ]);

    return <DisplayRow movies={MyList} DisplayName={'MY List'} />;
};
export default MyList;
