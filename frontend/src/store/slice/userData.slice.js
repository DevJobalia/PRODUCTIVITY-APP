// userSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUser } from "../../utils/API CALLS";

// Async thunk to fetch user data
export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const user = await getUser();
  return user;
});

// Async thunk to update user data
export const updateUserAsync = createAsyncThunk(
  "user/updateUser",
  async (updatedUserData) => {
    const updatedUser = await updateUser(updatedUserData);
    return updatedUser;
  }
);

// Define initial state
const initialState = {
  data: null, // User data
  status: "idle", // Request status: 'idle', 'loading', 'succeeded', 'failed'
  error: null, // Error message if fetching or updating user data fails
};

// Create a slice
const userSlice = createSlice({
  name: "user", // For dev tools
  initialState,
  reducers: {
    // Action to save user data
    saveUser: (state, action) => {
      state.data = action.payload;
    },
    // Action to delete user data
    deleteUser: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    // Extra reducers for handling async thunk
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(updateUserAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Export actions and reducer
export const { saveUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
