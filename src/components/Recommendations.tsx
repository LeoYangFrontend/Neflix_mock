import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../app/hooks';
import { RootState } from '../app/store';
import { addToMyList, MovieState } from '../features/counter/movieSlice';
import Card from './Card';
import DisplayRow from './DisplayRow';

interface Props {}
const Recommendations: FC<Props> = () => {
    const Recommendations = useSelector(
        (state: RootState) => state.movies.recommendations
    );

    const dispatch = useAppDispatch();

    return (
        <DisplayRow
            movies={Recommendations}
            DisplayName={'Recommendations'}
            renderBtn={(movie: MovieState) => {
                return (
                    <Card
                        title={movie.title}
                        img={movie.img}
                        btnText={'ADD'}
                        btnOnClick={() => {
                            dispatch(addToMyList(movie));
                        }}
                    ></Card>
                );
            }}
        />
    );
};
export default Recommendations;
