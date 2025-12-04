import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type OfflineReason = 'network' | 'request_error' | null;

export interface OfflineState {
  isOffline: boolean;
  reason: OfflineReason;
}

const initialState: OfflineState = {
  isOffline: false,
  reason: null,
};

const offlineSlice = createSlice({
  name: 'offline',
  initialState,
  reducers: {
    setOffline(state, action: PayloadAction<{ reason?: OfflineReason } | undefined>) {
      state.isOffline = true;
      state.reason = action.payload?.reason ?? null;
    },
    setOnline(state) {
      state.isOffline = false;
      state.reason = null;
    },
    setOfflineByRequestError(state) {
      state.isOffline = true;
      state.reason = 'request_error';
    },
  },
});

export const offlineActions = offlineSlice.actions;
export default offlineSlice.reducer;


