'use client'
import { TCarType } from "@/app/helpers/types";
import { useAppSelector } from "@/app/redux/hooks";
import CarCard from "./CarCard";
import EmptyData from "../Error/EmptyData";

const WishlistContainer: React.FC = () => {
  const wishlist = useAppSelector((state) => state.cars.wishlist);
  
  if (wishlist.length < 1) return <EmptyData message="Data wishlist kosong!" />;
  
  return (
    <>
      <ul className="flex flex-col my-10 gap-5">
        {wishlist?.map((item: TCarType, index: number) => (
          <li className="mx-auto " key={index}>
            <CarCard data={item} />
          </li>
        ))
        }
      </ul>
    </>
  );
};

export default WishlistContainer;