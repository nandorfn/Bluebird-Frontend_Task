'use client'
import heart from '@/app/assets/icon/heart.svg';
import heartFill from '@/app/assets/icon/heart-fill.svg';
import { TCarType } from '@/app/helpers/types';
import { addWishlist } from '@/app/redux/features/carsSlice';
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks';
import Image from 'next/image';

interface Props {
  data: TCarType
}

const WishlistButton: React.FC<Props> = ({ data }) => {
  const wishlist = useAppSelector((state) => state.cars.wishlist)
  const dispatch = useAppDispatch();
  const isLiked = wishlist?.some(item => item.vehicle === data.vehicle);
  
  return (
    <>
      <button onClick={() => dispatch(addWishlist(data))}  className=" hover:scale-110">
          <Image src={isLiked ? heartFill : heart} width={24} height={24} alt="Like" />
      </button>
    </>
  );
};

export default WishlistButton;