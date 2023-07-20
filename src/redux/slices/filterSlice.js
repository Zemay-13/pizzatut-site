import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  сategory: 0,
  sort: {
    name: "популярности",
    sortProperty: "rating",
  },
  search: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
    setCategory(state, action) {
      state.сategory = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
    setFilters(state, action) {
      state.page = Number(action.payload.page);
      state.сategory = Number(action.payload.сategory);
      state.sort = action.payload.sort;
    },
  },
});

export const { setCategory, setSort, setSearch, setPage, setFilters } =
  filterSlice.actions;
export default filterSlice.reducer;
