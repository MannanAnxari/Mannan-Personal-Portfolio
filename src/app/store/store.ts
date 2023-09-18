import {configureStore} from "@reduxjs/toolkit";
import styleReducer from '../slice/styleSlices'; 
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import {persistReducer} from "redux-persist";


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const reducer = combineReducers ({
    style: styleReducer
});

const persistedReducer = persistReducer(persistConfig, reducer);
 
const rootReducer =  combineReducers({
    style: styleReducer
})

export function makeStore() {
    return configureStore ({
        reducer:   persistedReducer,
    })
}

export const store = makeStore() 

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch