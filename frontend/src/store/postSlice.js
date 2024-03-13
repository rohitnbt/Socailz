import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPosts: (state, action) => {
        state.value = action.payload
    }
  },
})

export const { setPosts } = postSlice.actions

export default postSlice.reducer