import { TCarType } from '@/app/helpers/types'
import { createSlice } from '@reduxjs/toolkit'

interface CarsState {
  wishlist: TCarType[],
  details: TCarType | null,
}


const initialState: CarsState = {
  wishlist: [],
  details: null,
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
    checkDetails: (state, action) => {
      state.details = { ...action.payload }
    }
  },
})

export const { addWishlist, checkDetails } = counterSlice.actions
export default counterSlice.reducer