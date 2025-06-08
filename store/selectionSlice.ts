import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Skip } from '../types';

interface SelectionState {
  selectedSkip: Skip | null;
}

const initialState: SelectionState = {
  selectedSkip: null,
};

const selectionSlice = createSlice({
  name: 'selection',
  initialState,
  reducers: {
    selectSkip(state, action: PayloadAction<Skip>) {
      state.selectedSkip = action.payload;
    },
    clearSelection(state) {
      state.selectedSkip = null;
    },
  },
});

export const { selectSkip, clearSelection } = selectionSlice.actions;
export default selectionSlice.reducer; 