// 把该文件夹下文件都引入这个文件夹然后统一导出

import { combineReducers } from 'redux';
import { default as home } from './home';

const allReducers = combineReducers({
    home
});

export type RootState = ReturnType<typeof allReducers>;

export default allReducers;
