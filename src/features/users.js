import { createSlice } from "@reduxjs/toolkit"


export const userSlice = createSlice({
    name: "users",
    initialState: { value: { name: "", age: 0, mobile: "" } },
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        },
        logout: (state, action) => {
            state.value = { name: "", age: 0, mobile: "" }
        }
    }
})

export const { login } = userSlice.actions;
export const { logout } = userSlice.actions;
export default userSlice.reducer;
