import { TCarType } from '@/app/helpers/types';
import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export type CarsState = {
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
      if (!isExist) {
        state.wishlist = [...state.wishlist, action?.payload];
        toast.success('Berhasil menambahkan data ke wishlist!');
      } else {
        toast.error('Data sudah ada di wishlist!');
      }
    },

    addBookingOrder: (state, action) => {
      if (action.payload !== null) {
        state.booking = [...state.booking, action?.payload];
        toast.success('Transaksi order berhasil!');
      } else {
        toast.error('Transaksi order gagal!');
      }
    }
  },
})

export const { addWishlist, addBookingOrder } = counterSlice.actions
export default counterSlice.reducer