'use client'
// packages
import Image from 'next/image';
import { useState } from 'react';
import { TCarType } from '@/app/helpers/types';
import { addWishlist } from '@/app/redux/features/carsSlice';
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks';
import "react-toastify/dist/ReactToastify.css";

// assets
import share from '@/app/assets/icon/share.svg';
import heart from '@/app/assets/icon/heart.svg';
import check from '@/app/assets/icon/check-circle.svg';
import heartFill from '@/app/assets/icon/heart-fill.svg';
import { toast } from 'react-toastify';

interface Props {
  data: TCarType;
}

const WishAndShareButton: React.FC<Props> = ({ data }) => {
  const [isShared, setIsShared] = useState<boolean>(false);

  const handleShare = async () => {
    await navigator.clipboard.writeText(location.href);
    toast.success('Berhasil menyalin link!', {
      position: "top-center"
    })
    setIsShared(true);
  }

  const car = useAppSelector((state) => state.cars.wishlist);
  const isLiked = car.some(item => item.vehicle.toLowerCase() === data?.vehicle?.toLowerCase());
  const dispatch = useAppDispatch();

  return (
    <>
      <div className=' flex flex-row gap-5 justify-around'>
        <button onClick={handleShare} className=' btn w-[47.5%]'>
          <Image src={isShared ? check : share} width={25} height={25} alt="Share" />
        </button>
        <button onClick={() => dispatch(addWishlist(data))} className=' btn w-[47.5%]'>
          <Image src={isLiked ? heartFill : heart} width={25} height={25} alt="Share" />
        </button>
      </div>
    </>
  );
};

export default WishAndShareButton;