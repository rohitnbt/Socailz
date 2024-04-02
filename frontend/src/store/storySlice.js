import  {createSlice} from '@reduxjs/toolkit';

const initialState = {
    storyPreview : false,
}



export const storySlice = createSlice({
    name: 'story',
    initialState,
    reducers: {
      setStoryPreview: (state, action) => {
        state.storyPreview = action.payload
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { setStoryPreview } = storySlice.actions
  
  export default storySlice.reducer