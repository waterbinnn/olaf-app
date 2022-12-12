import { createSlice } from '@reduxjs/toolkit';

const getInitialWish = () => {
  const now = new Date();

  const wishList = window.sessionStorage.getItem('wishList');

  if (wishList) {
    return JSON.parse(wishList);
  }
  window.sessionStorage.setItem('wishList', '');
  return [];
};

const initialValue = {
  wishList: getInitialWish(),
};

export const wishSlice = createSlice({
  name: 'wish',
  initialState: initialValue,
  reducers: {
    addWish: (state, action) => {
      state.wishList.push(action.payload);
      const wishList = window.sessionStorage.getItem('wishList');

      if (wishList) {
        const wishListArr = JSON.parse(wishList);
        wishListArr.push({
          ...action.payload,
        });
        if (wishListArr.length === 2) {
          alert('소원은 하루에 하나만 가능해요!');
          wishListArr.pop();
        }
        window.sessionStorage.setItem('wishList', JSON.stringify(wishListArr));
      } else {
        window.sessionStorage.setItem(
          'wishList',
          JSON.stringify([
            {
              ...action.payload,
            },
          ])
        );
      }
    },
    deleteWish: (state, action) => {
      const wishList = window.sessionStorage.getItem('wishList');
      if (wishList) {
        const wishListArr = JSON.parse(wishList);
        wishListArr.forEach((wish: any, index: number) => {
          if (wish.id === action.payload) {
            wishListArr.splice(index, 1);
          }
        });
        window.sessionStorage.setItem('wishList', JSON.stringify(wishListArr));
        state.wishList = wishListArr;
      }
    },
  },
});

export const { addWish, deleteWish } = wishSlice.actions;
export default wishSlice.reducer;
