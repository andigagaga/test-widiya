import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Api } from "../../../libs/axiosInstance";

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      const response = await Api.get("getProduct");
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getNewProducts = createAsyncThunk(
  "products/getNewProducts",
  async () => {
    try {
      const response = await Api.get("getNewProduct");
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getNewProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getNewProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getNewProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
