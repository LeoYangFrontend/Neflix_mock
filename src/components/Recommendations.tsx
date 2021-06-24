import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import DisplayRow from './DisplayRow';

interface Props {}
const Recommendations: FC<Props> = () => {
    const Recommendations = useSelector(
        (state: RootState) => state.movies.recommendations
    );

    return (
        <DisplayRow
            movies={Recommendations}
            DisplayName={'Recommendations'}
            btnText={'ADD'}
        />
    );
};
export default Recommendations;
