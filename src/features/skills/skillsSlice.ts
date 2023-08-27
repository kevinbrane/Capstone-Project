import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Inicialización del estado a partir de localStorage o un array vacío.
const initialState = JSON.parse(localStorage.getItem("skills") || "[]");

const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    addSkill: (state, action: PayloadAction<{ name: string; percentage: string }>) => {
      state.push(action.payload);
    },
    setSkills: (state, action: PayloadAction<{ name: string; percentage: string }[]>) => {
      return action.payload;
    },
  },
});

export const { addSkill, setSkills } = skillsSlice.actions;
export default skillsSlice.reducer;