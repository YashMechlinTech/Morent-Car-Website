import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "../../supabaseClient";
//actions
export const fetchCars = createAsyncThunk(
  "cars/fetchcars",
  async (page, { rejectWithValue }) => {
    try {
     const response = await supabase.from('cars_car').select('*')
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);


//reducers slice
const carslice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        (state.loading = false),
          (state.cars = [...state.cars, ...action.payload]); //adding the results
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default carslice.reducer;
