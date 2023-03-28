import { createSlice, PayloadAction, Slice } from "@reduxjs/toolkit";

export interface UserData {
  firstName?: string;
  lastName?: string;
  topic?: string;
  customTopic?: string;
  imageUrl?: string;
}

export interface UserState {
  data: UserData;
}

const initialState: UserState = {
  data: {}
};

export const userSlice: Slice<UserState, { setUserData: (state: UserState, action: PayloadAction<UserData>) => void }, string> = createSlice({
  name: "user",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setUserData: (state: UserState, action: PayloadAction<UserData>) => {
      state.data = action.payload;
    }
  }
});

export const { setUserData } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// export const selectCount = (state: RootState) => state.counter.value;

export default userSlice.reducer;
