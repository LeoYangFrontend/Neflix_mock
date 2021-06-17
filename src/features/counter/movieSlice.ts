import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export interface MovieState {
    id: string;
    title: string;
    img: string;
}
export interface StoreState {
    status: 'idle' | 'loading' | 'failed' | 'updating';
    mylist: MovieState[];
    recommendations: MovieState[];
}

const initialState: StoreState = {
    status: 'idle',
    mylist: [],
    recommendations: [],
};

export const fetchMovies = createAsyncThunk(
    'movieSlice/fetchMovies',
    async () => {
        const res = await Promise.all([
            axios.get('http://localhost:3004/mylist'),
            axios.get('http://localhost:3004/recommendations'),
        ]);
        // The value we return becomes the `fulfilled` action payload
        return {
            mylist: res[0].data,
            recommendations: res[1].data,
        };
    }
);

export const addToMyList = createAsyncThunk(
    'movieSlice/addToMyList',
    async (movie: MovieState) => {
        const res = await Promise.all([
            await axios.post('http://localhost:3004/mylist', movie),
            await axios.delete(
                `http://localhost:3004/recommendations/${movie.id}`
            ),
        ]);

        return res[0].data;
    }
);
export const removeFromMyList = createAsyncThunk(
    'movieSlice/removeFromMyList',
    async (movie: MovieState) => {
        const res = await Promise.all([
            await axios.post('http://localhost:3004/recommendations', movie),
            await axios.delete(`http://localhost:3004/mylist/${movie.id}`),
        ]);

        return res[0].data;
    }
);

export const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        addToMyList: (state, action: PayloadAction<MovieState>) => {
            return {
                ...state,
                mylist: [...state.mylist, action.payload],
                recommendations: state.recommendations.filter(
                    (recommendMovie) => recommendMovie.id !== action.payload.id
                ),
            };
        },
        removeFromMyList: (state, action: PayloadAction<MovieState>) => {
            return {
                ...state,
                mylist: state.mylist.filter(
                    (listMovie) => listMovie.id !== action.payload.id
                ),
                recommendations: [...state.recommendations, action.payload],
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.status = 'idle';
                state.mylist = [...action.payload.mylist];
                state.recommendations = [...action.payload.recommendations];
            })
            .addCase(addToMyList.pending, (state) => {
                state.status = 'updating';
            })
            .addCase(addToMyList.fulfilled, (state, action) => {
                state.status = 'idle';
                state.mylist = [...state.mylist, action.payload];
                state.recommendations = state.recommendations.filter(
                    (recommendMovie) => recommendMovie.id !== action.payload.id
                );
            })
            .addCase(removeFromMyList.pending, (state) => {
                state.status = 'updating';
            })
            .addCase(removeFromMyList.fulfilled, (state, action) => {
                state.status = 'idle';
                state.recommendations = [
                    ...state.recommendations,
                    action.payload,
                ];
                state.mylist = state.mylist.filter(
                    (listMovie) => listMovie.id !== action.payload.id
                );
            });
    },
});

// export const { addToMyList, removeFromMyList } = movieSlice.actions;

export default movieSlice.reducer;
