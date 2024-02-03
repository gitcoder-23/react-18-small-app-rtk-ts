import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url } from "../../config";
import { UserModel } from "../models/userModel";

export const getAllUser = createAsyncThunk<[UserModel]>(
  "user/get",
  async () => {
    const response = await axios.get(`${base_url}/userdata`);

    return response.data.reverse();
  }
);
