'use client'
import { TCarType } from "@/app/helpers/types";
import { addBookingOrder } from "@/app/redux/features/carsSlice";
import { useAppDispatch } from "@/app/redux/hooks";

interface Props {
  data: TCarType
}

const BookingButton: React.FC<Props> = ({ data }) => {
  const dispatch = useAppDispatch();

  return (
    <>
      <button
        onClick={() => dispatch(addBookingOrder(data))}
        className="btn bg-[#2f5296] text-white">
        {'Book Now'}
      </button>
    </>
  );
};

export default BookingButton;