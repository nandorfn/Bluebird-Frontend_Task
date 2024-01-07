import { TCarType } from '@/app/helpers/types';
import reducer, { addBookingOrder, CarsState } from '@/app/redux/features/carsSlice';

describe('BookingButton', () => {
  const initialState: CarsState = {
    booking: [],
    wishlist: [],
  };
  
  const mockBookingData: TCarType = {
    vehicle: 'Tesla Model S',
    price: 'IDR 200.000',
    imageURL: 'http://',
    description: ['7 seat']
  };
  test('mengembalikan nilai initial state', () => {
    expect(reducer(undefined, { type: '' })).toEqual(initialState);
  });

  test('harus bisa menambah data mobil kedalam state booking', () => {
    const prevState: CarsState = {
      wishlist: [],
      booking: [],
    }
  
    expect(reducer(prevState, addBookingOrder(mockBookingData))).toEqual({
      booking: [mockBookingData],
      wishlist: [],
    });
  })

  test('tidak menerima data null', () => {
    const prevState: CarsState = {
      booking: [],
      wishlist: [],
    };

    const invalidData = null;
    expect(reducer(prevState, addBookingOrder(invalidData))).toEqual(prevState);
  })

  test('Bisa menambah data yang sama', () => {
    const prevState: CarsState = {
      booking: [mockBookingData],
      wishlist: [],
    };

    expect(reducer(prevState, addBookingOrder(mockBookingData))).toEqual({
      booking: [
        mockBookingData,
        mockBookingData
      ],
      wishlist: [],
    });
  })
})