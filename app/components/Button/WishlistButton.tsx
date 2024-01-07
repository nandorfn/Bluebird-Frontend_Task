'use client'

// packages
import Image from 'next/image';
import { TCarType } from '@/app/helpers/types';
import { addWishlist } from '@/app/redux/features/carsSlice';
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks';

// Assets
import heart from '@/app/assets/icon/heart.svg';
import heartFill from '@/app/assets/icon/heart-fill.svg';

interface Props {
  data: TCarType
}

const WishlistButton: React.FC<Props> = ({ data }) => {
  // store redux
  const wishlist = useAppSelector((state) => state.cars.wishlist)
  const dispatch = useAppDispatch();
  
  // cek apakah data sudah ada di wishlist
  const isLiked = wishlist?.some(item => item.vehicle === data.vehicle);
  
  // tambah data ke redux
  const addCarToWishlist = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addWishlist(data))
  }
  
  return (
    <>
      <button onClick={(e) => addCarToWishlist(e)}  className=" hover:scale-110">
          <Image src={isLiked ? heartFill : heart} width={24} height={24} alt="Like" />
      </button>
    </>
  );
};

export default WishlistButton;