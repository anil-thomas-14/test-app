import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  countryData: [],
  filteredData: [],
  total: 0,
  isLoading: false,
  error: null,
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    loadCountriesStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loadCountriesSuccess: (state, action) => {
      state.countryData = action.payload.data;
      state.total = action.payload.total;
      state.isLoading = false;
    },
    loadCountriesFailure: (state, action) => {
      state.countryData = [];
      state.error = action.payload.error;
      state.isLoading = false;
    },
    filterCountries: (state, action) => {
      state.filteredData = action.payload.data;
      state.total = action.payload.total;
      state.isLoading = false;
    },
  },
});

export const { loadCountriesStart, loadCountriesSuccess, loadCountriesFailure, filterCountries } = countriesSlice.actions;

export default countriesSlice.reducer;
