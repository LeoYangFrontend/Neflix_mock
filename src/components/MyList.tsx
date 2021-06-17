import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../app/hooks';
import { RootState } from '../app/store';
import { MovieState, removeFromMyList } from '../features/counter/movieSlice';
import Card from './Card';
import DisplayRow from './DisplayRow';

interface Props {}

const MyList: FC<Props> = () => {
    const MyList = useSelector((state: RootState) => state.movies.mylist);
    const dataStatus = useSelector((state: RootState) => state.movies.status);

    const dispatch = useAppDispatch();

    return (
        <DisplayRow
            movies={MyList}
            DisplayName={'MY List'}
            renderBtn={(movie: MovieState) => {
                return (
                    <Card
                        title={movie.title}
                        img={movie.img}
                        btnText={'REMOVE'}
                        btnOnClick={() => {
                            if (dataStatus === 'idle')
                                dispatch(removeFromMyList(movie));
                        }}
                    ></Card>
                );
            }}
        />
    );
};
export default MyList;
