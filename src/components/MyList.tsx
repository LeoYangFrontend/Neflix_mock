import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import DisplayRow from './DisplayRow';

interface Props {}

const MyList: FC<Props> = () => {
    const MyList = useSelector((state: RootState) => state.movies.mylist);

    return (
        <DisplayRow
            movies={MyList}
            DisplayName={'MY List'}
            btnText={'REMOVE'}
        />
    );
};
export default MyList;
