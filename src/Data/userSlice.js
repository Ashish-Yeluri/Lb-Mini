import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchUser = () => async (dispatch) => {
  try {
    dispatch(fetchStart());
    const res = await axios.get('/data.json');
    // const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch(fetchSuccess(res.data)) 
  }
  catch(err) {
    dispatch(fetchFail(err.message))
  }
}

var initialState = {
  loading: false,
    data: [],
    error: null,
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
        state.error= null
    },
    fetchSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload
    },
    fetchFail: (state, action) => {
      state.loading = false;
      state.error = action.payload
    }
  }
})

export const { fetchStart, fetchSuccess, fetchFail } = userSlice.actions;

export default userSlice.reducer;