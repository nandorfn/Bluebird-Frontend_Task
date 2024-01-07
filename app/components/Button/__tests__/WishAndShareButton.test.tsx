import { carMock } from '@/app/helpers/mock-test';
import reducer, { addWishlist, CarsState } from '@/app/redux/features/carsSlice';

describe('WishAndShareButton', () => {  
  const initState: CarsState = {
    booking: [],
    wishlist: [],
  }
  
  test('mengembalikan nilai state awal', () => {
    expect(reducer(undefined, { type: ''})).toEqual(initState)
  })
  
  test('menambah data baru ke state wishlist', () => {
    const prevState: CarsState = {
      wishlist: [],
      booking: [],
    }
    
    expect(reducer(prevState, addWishlist(carMock))).toEqual({
      booking: [],
      wishlist: [carMock]
    })
  })
  
  test('tidak dapat menambah data duplikat ke redux', () => {
    const prevState: CarsState = {
      wishlist: [carMock],
      booking: [],
    }
    
    expect(reducer(prevState, addWishlist(carMock))).toEqual({
      booking: [],
      wishlist: [carMock]
    })
  })

})