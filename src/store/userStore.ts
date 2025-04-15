import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserType = {
 access_key?: string,
 user?: any
}

const initialState: UserType = {
 access_key: "",
 user: {}
}

const userSlice = createSlice({
 name: 'user',
 initialState,
 reducers: {
  setUser(state, action: PayloadAction<UserType>) {
   state.access_key = action.payload.access_key
   state.user = action.payload.user
  }
 }
})

export const {setUser} = userSlice.actions

export default userSlice.reducer
