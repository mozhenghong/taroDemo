import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 count: 0
}

const homeSlice = createSlice({
  name: 'homeSlice',
  initialState,
  reducers: {
    addCount: (state, { payload }) => {
      state.count += payload ;
    },
  },
});

export const { addCount } = homeSlice.actions

export default homeSlice.reducer;
