import { TCarType } from '@/app/helpers/types'
import { createSlice } from '@reduxjs/toolkit'

interface CarsState {
  wishlist: TCarType[],
  booking: TCarType[],
}


const initialState: CarsState = {
  wishlist: [],
  booking: [],
}

const counterSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    addWishlist: (state, action) => {
      // cek apakah data sudah ada
      const isExist = state.wishlist.some(item => item.vehicle === action.payload.vehicle);

      // jika belum, tambahkan data baru ke state wishlist
      if (!isExist) state.wishlist = [...state.wishlist, action?.payload];
    },

    addBookingOrder: (state, action) => {
      state.booking = [...state.booking, action?.payload];
    }
  },
})

export const { addWishlist, addBookingOrder } = counterSlice.actions
export default counterSlice.reducer