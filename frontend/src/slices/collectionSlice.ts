import { createAsyncThunk, createSlice, Dispatch} from '@reduxjs/toolkit';
import { TodoCollection } from '../models/models';
import { TodoService } from '../services/todoApiService';
import { State } from '../store/store';

export interface CollectionState {
    items: Array<TodoCollection>;
}

const initialState = {
    items: []
} as CollectionState

export const fetchCollectionsThunk = createAsyncThunk('collections/fetch', async () => {
    const collections = await TodoService.fetchCollections();
    return collections;
});

const collectionSlice = createSlice({
    name: 'collection',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCollectionsThunk.pending, (state, action) => {
            // dispatch isloading true
        });
        builder.addCase(fetchCollectionsThunk.fulfilled, (state, action) => {
            state.items = [...action.payload];
            //dispatch isloading false
        });
    }
});

export const { } = collectionSlice.actions;

export const selectAllCollections = (state:State) => state.collection.items;
export const selectCollectionById = (state:State, collectionId:string) => selectAllCollections(state).find(p => p.id === collectionId);

export default collectionSlice.reducer;