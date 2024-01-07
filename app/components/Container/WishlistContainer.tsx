'use client'
import { TCarType, TCarsType } from "@/app/helpers/types";
import { useAppSelector } from "@/app/redux/hooks";
import CarCard from "./CarCard";
import EmptyData from "../Error/EmptyData";

interface Props {
  searchParam: string | string[] | undefined ;
  data: TCarsType[]
}

const WishlistContainer: React.FC<Props> = ({ searchParam, data}) => {
  const wishlist = useAppSelector((state) => state.cars.wishlist);
  
  if (wishlist.length < 1) return <EmptyData message="Data kosong!" />;
  
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