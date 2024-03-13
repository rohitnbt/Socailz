import  {createSlice} from '@reduxjs/toolkit';

const initialState = {

    state: {
        isFetching: false,
    },
    user:{
  name:"collins",
  isAuthenticated:false
},
}


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsFetching : (state) => {
        state.state.isFetching = true;
  },
  setisAuthenticated : (state, action) => {
    state.user.isAuthenticated = action.payload;
  },
  }  
});

export const {
      setIsFetching, setisAuthenticated
    } = userSlice.actions;


export default userSlice.reducer;