import { TCarsType } from '@/app/helpers/types'
import { createSlice } from '@reduxjs/toolkit'

interface CarsState {
  wishlist: TCarsType[],
  booking: TCarsType[],
}


const initialState = { 
  wishlist: [],
}

const counterSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
})

export const {  } = counterSlice.actions
export default counterSlice.reducer