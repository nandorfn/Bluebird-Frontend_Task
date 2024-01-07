'use client'
import { TCarType } from "@/app/helpers/types";
import { useAppSelector } from "@/app/redux/hooks";
import CarCard from "./CarCard";
import EmptyData from "../Error/EmptyData";

const BookingContainer: React.FC = () => {
  const booking = useAppSelector((state) => state.cars.booking);
  
  if (booking.length < 1) return <EmptyData message="Data pemesanan kosong!" />;
  
  const parsePrice = (priceString: string) => parseInt(priceString.replace(/[^\d]/g, ''), 10);
  const totalPrice = booking.reduce((total, book) => total + parsePrice(book.price), 0);
  
  return (
    <>
      <ul className="flex flex-col my-10 gap-5">
        {booking?.map((item: TCarType, index: number) => (
          <li className="mx-auto " key={index}>
            <CarCard data={item} />
          </li>
        ))
        }
        <li>
          <p className=" text-2xl font-medium text-[#6c6e72] text-end max-w-4xl px-4 mx-auto">{`Total: IDR ${totalPrice.toLocaleString('id-ID')}`}</p>
        </li>
      </ul>
    </>
  );
};

export default BookingContainer;