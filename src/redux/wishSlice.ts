import { createSlice } from '@reduxjs/toolkit';

const getInitialWish = () => {
  const wishList = window.localStorage.getItem('wishList');

  if (wishList) {
    return JSON.parse(wishList);
  }
  window.localStorage.setItem('wishList', '');
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
      const wishList = window.localStorage.getItem('wishList');
      if (wishList) {
        const wishListArr = JSON.parse(wishList);
        wishListArr.push({
          ...action.payload,
        });
        window.localStorage.setItem('wishList', JSON.stringify(wishListArr));
      } else {
        window.localStorage.setItem(
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
      const wishList = window.localStorage.getItem('wishList');
      if (wishList) {
        const wishListArr = JSON.parse(wishList);
        wishListArr.forEach((wish: any, index: number) => {
          if (wish.id === action.payload) {
            wishListArr.splice(index, 1);
          }
        });
        window.localStorage.setItem('wishList', JSON.stringify(wishListArr));
        state.wishList = wishListArr;
      }
    },
  },
});

export const { addWish, deleteWish } = wishSlice.actions;
export default wishSlice.reducer;
