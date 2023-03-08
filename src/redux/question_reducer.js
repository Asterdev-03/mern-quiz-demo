import { createSlice } from "@reduxjs/toolkit";

export const questionReducer = createSlice({
  name: "Questions",
  initialState: {
    queue: [],
    answers: [],
    trace: 0,
  },
  reducers: {
    startExamAction: (state, action) => {
      return {
        /** ... to get initial values */
        ...state,
        queue: action.payload,
      };
    },
  },
});

export const { startExamAction } = questionReducer.actions;

export default questionReducer.reducer;
