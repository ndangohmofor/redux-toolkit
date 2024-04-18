import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  users: [],
  error: "",
};

//Generates pending, fulfilled or rejected action types
const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      if (!state) return { ...initialState, loading: true };
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      if (!state) return { ...initialState, users: action.payload };
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      if (!state) return { ...initialState, error: action.error.message };
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
const _fetchUsers = fetchUsers;
export { _fetchUsers as fetchUsers };
