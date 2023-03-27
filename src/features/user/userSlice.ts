import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface UserState {
  firstName?: string;
  lastName?: string;
  topic?: string;
}

const initialState: UserState = {
  firstName: undefined,
  lastName: undefined,
  topic: undefined,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setFirstName: (state, action: PayloadAction<string>) => {
      state.firstName += action.payload;
    },
    setLastName: (state, action: PayloadAction<string>) => {
      state.lastName += action.payload;
    },
    setTopic: (state, action: PayloadAction<string>) => {
      state.topic += action.payload;
    },
  },
});

export const { setFirstName, setLastName, setTopic } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// export const selectCount = (state: RootState) => state.counter.value;

export default userSlice.reducer;
