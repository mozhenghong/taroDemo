import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';
import allReducers, { RootState } from './slices/index';

const store = configureStore({
    reducer: allReducers,
});

export default store;

export const useDispatch = () => useReduxDispatch();
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;