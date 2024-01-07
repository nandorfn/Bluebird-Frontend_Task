import Image from "next/image";
import { TCarsType } from "@/app/helpers/types";

// Components
import EmptyData from "../Error/EmptyData";
import BookingButton from "../Button/BookingButton";
import WishAndShareButton from "../Button/WishAndShareButton";

interface Props {
  data: TCarsType[],
  searchParam: { [key: string]: string | string[] | undefined },
}

type SearchObject = {
  name?: string,
  category_id?: string,
}

const CarDetailsContainer: React.FC<Props> = ({ data, searchParam }) => {
  // ambil query search param 'name'
  const { name }: SearchObject = searchParam;
  
  // mencari data mobil sesuai dengan nama
  const car = findDataByNameAndCategoryId(data, name);

  // return pesan error jika data tidak ada
  if (!car) return <EmptyData message="Data tidak ditemukan!" />

  return (
    <>
      <div className="flex flex-col md:flex-row max-w-2xl mx-auto my-20 gap-10">
        <div className="flex flex-col w-[80%] mx-auto md:w-1/2 gap-5">
          <Image
            className=" mx-auto"
            src={car?.imageURL}
            width={300}
            height={300}
            unoptimized
            alt={car?.vehicle} />

          <WishAndShareButton data={car} />
        </div>
        <div className="flex flex-col w-[80%] mx-auto md:w-1/2 gap-5">
          <ul className=" my-auto w-full">
            {car?.description.map((item, index) => (
              <li className="font-medium text-[#2f5296] text-2xl" key={index}>{item}</li>
            ))
            }
          </ul>
          <div className="flex flex-row justify-between items-center">
            <p className=" text-2xl text-red-500 font-semibold">{car?.price}</p>
            <BookingButton data={car} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDetailsContainer;

const findDataByNameAndCategoryId = (data: TCarsType[], name?: string) => {
  try {
    for (const item of data) {
      for (const car of item.car_type) {
        if (car.vehicle.toLowerCase() === name?.toLowerCase()) {
          return car;
        }
      }
    }

    throw new Error(`Data dengan nama: ${name} tidak ditemukan!`);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      return null;
    }
  }
};