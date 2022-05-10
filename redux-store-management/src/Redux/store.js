import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage';
import productsReducer from './productSlice'
import { combineReducers } from 'redux';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
const persistConfig = {
    key: 'products',
    storage,
};
const reducers = combineReducers({ products: productsReducer });
const persistedReducer = persistReducer(persistConfig, reducers);
export default configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
// export const store = configureStore({
//     reducer: {
//         products: productsReducer
//     },
// })