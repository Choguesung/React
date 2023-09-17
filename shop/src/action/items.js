import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: [], // 초기 상태는 빈 배열로 설정
  reducers: {
    setItems: (state, action) => {
      return action.payload; // 받아온 데이터로 상태 업데이트
    },
  },
});

export const { setItems } = itemsSlice.actions;

export default itemsSlice.reducer;
