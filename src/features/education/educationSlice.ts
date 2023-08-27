import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchEducationData = createAsyncThunk(
  "education/fetchData",
  async () => {
    const response = await fetch("api/educations");
    const data = await response.json();
    return data;
  }
);

interface Education {
  id: number;
  date: number;
  title: string;
  text: string;
  line_img: string;
  vector: string;
}

interface EducationState {
  educations: Education[];
  status: string | null;
}
const initialState: EducationState = {
  educations: [],
  status: "idle",
};

const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEducationData.fulfilled, (state, { payload }) => {
      console.log("payload", payload);
      state.educations = payload;
      state.status = "success";
    })
    .addCase(fetchEducationData.pending, (state, {payload}) => {
      state.status = "loading";
    })
    .addCase(fetchEducationData.rejected, (state) => {
    
      state.status = "failed";
    });
  },
});

export default educationSlice.reducer;
