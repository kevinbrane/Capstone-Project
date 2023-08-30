import { createSlice, PayloadAction } from "@reduxjs/toolkit";

let savedSkills = localStorage.getItem("skills");
let parsedSkills = savedSkills ? JSON.parse(savedSkills) : [];

// Garantizar que el estado inicial sea un array
const initialState: { name: string; percentage: string }[] = Array.isArray(parsedSkills) ? parsedSkills : [];

const skillsSlice = createSlice({
  name: "skills",
  initialState,
  reducers: {
    addSkill: (state, action: PayloadAction<{ name: string; percentage: string }>) => {
      state.push(action.payload);  // Eliminado el chequeo Array.isArray(state)
    },
    setSkills: (state, action: PayloadAction<{ name: string; percentage: string }[]>) => {
      if (Array.isArray(action.payload)) {
        return action.payload;
      } else {
        console.error('setSkills payload is not an array:', action.payload);
        return state;
      }
    },
  },
});

export const { addSkill, setSkills } = skillsSlice.actions;
export default skillsSlice.reducer;