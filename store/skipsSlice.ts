import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Skip } from '../types';

export interface SkipsState {
  skips: Skip[];
  loading: boolean;
  error: string | null;
}

const initialState: SkipsState = {
  skips: [],
  loading: false,
  error: null,
};

export const fetchSkips = createAsyncThunk<Skip[], void, { rejectValue: string }>(
  'skips/fetchSkips',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft');
      if (!res.ok) throw new Error('Failed to fetch skips');
      return await res.json();
    } catch (err: any) {
      return rejectWithValue(err.message || 'Unknown error');
    }
  }
);

const skipsSlice = createSlice({
  name: 'skips',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSkips.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSkips.fulfilled, (state, action) => {
        state.loading = false;
        state.skips = action.payload;
      })
      .addCase(fetchSkips.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch skips';
      });
  },
});

export default skipsSlice.reducer; 