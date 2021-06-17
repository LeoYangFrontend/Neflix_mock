import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface MovieState {
    id: string;
    title: string;
    img: string;
}
export interface StoreState {
    mylist: MovieState[];
    recommendations: MovieState[];
}

const initialState: StoreState = {
    mylist: [
        {
            title: 'Futurama',
            id: '1',
            img: 'http://cdn1.nflximg.net/webp/7621/3787621.webp',
        },
        {
            title: 'The Interview',
            id: '2',
            img: 'http://cdn1.nflximg.net/webp/1381/11971381.webp',
        },
        {
            title: 'Gilmore Girls',
            id: '3',
            img: 'http://cdn1.nflximg.net/webp/7451/11317451.webp',
        },
    ],
    recommendations: [
        {
            title: 'Family Guy',
            id: '4',
            img: 'http://cdn5.nflximg.net/webp/5815/2515815.webp',
        },
        {
            title: 'The Croods',
            id: '5',
            img: 'http://cdn3.nflximg.net/webp/2353/3862353.webp',
        },
        {
            title: 'Friends',
            id: '6',
            img: 'http://cdn0.nflximg.net/webp/3200/9163200.webp',
        },
    ],
};

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        addToMyList: (state, action: PayloadAction<MovieState>) => {
            return {
                mylist: [...state.mylist, action.payload],
                recommendations: state.recommendations.filter(
                    (recommendMovie) => recommendMovie.id !== action.payload.id
                ),
            };
        },
        removeFromMyList: (state, action: PayloadAction<MovieState>) => {
            return {
                mylist: state.mylist.filter(
                    (listMovie) => listMovie.id !== action.payload.id
                ),
                recommendations: [...state.recommendations, action.payload],
            };
        },
    },
});

export const { addToMyList, removeFromMyList } = movieSlice.actions;

export default movieSlice.reducer;
