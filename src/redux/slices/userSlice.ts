import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserModel } from "../models/userModel";
import { getAllUser } from "../actions/userActions";

export interface initialStateInterface {
  allUsers: UserModel[];
  isLoading: boolean;
  message: string;
}

const initialState: initialStateInterface = {
  allUsers: [],
  isLoading: true,
  message: "",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: function (builder) {
    // fetch all users
    builder.addCase(getAllUser.pending, (state) => {
      state.isLoading = true;
      state.message = "User data loading...";
    });
    builder.addCase(
      getAllUser.fulfilled,
      (state, actions: PayloadAction<UserModel[]>) => {
        state.isLoading = false;
        state.allUsers = actions.payload;
        state.message = "User data fetched";
      }
    );
    builder.addCase(getAllUser.rejected, (state) => {
      state.isLoading = false;
      state.allUsers = [];
      state.message = "Something went wrong.";
    });
  },
});

export default userSlice.reducer;
