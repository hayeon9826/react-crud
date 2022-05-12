import { createSlice } from '@reduxjs/toolkit';
import { Form } from '../../interface';

const initialState: Form = {
  id: 0,
  user: '',
  title: '',
  body: '',
  date: ''
};

export const form = createSlice({
  name: 'form',
  initialState,
  reducers: {
    // form 리셋
    setFormSlice: (state, action) => {
      state = action.payload;
      return state;
    }
  }
});

export const { setFormSlice } = form.actions;

export default form.reducer;
