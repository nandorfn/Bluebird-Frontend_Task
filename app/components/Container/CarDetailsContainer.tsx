import { TCarsType } from "@/app/helpers/types";
import Image from "next/image";
import WishAndShareButton from "../Button/WishAndShareButton";
import EmptyData from "../Error/EmptyData";

interface Props {
  data: TCarsType[],
  searchParam: { [key: string]: string | string[] | undefined },
}

type SearchObject = {
  name?: string,
  category_id?: string,
}

const CarDetailsContainer: React.FC<Props> = ({ data, searchParam }) => {
  const { name, category_id }: SearchObject = searchParam;
  const car = findDataByNameAndCategoryId(data, name, category_id);
  
  if (!car) return <EmptyData message="Data tidak ditemukan!" />

  return (
    <>
      <div className="flex flex-col md:flex-row max-w-2xl mx-auto my-20 gap-10">
        <div className="flex flex-col w-1/2 gap-5">
          <Image
            className=" mx-auto"
            src={car?.imageURL}
            width={300}
            height={300}
            alt={car?.vehicle} />
            
            <WishAndShareButton data={car} />
        </div>
        <div className="flex flex-col w-1/2 gap-5">
          <ul className=" my-auto w-full">
            {car?.description.map((item, index) => (
              <li className="font-medium text-[#2f5296] text-2xl" key={index}>{item}</li>
            ))
            }
          </ul>
          <div className="flex flex-row justify-between items-center">
            <p className=" text-2xl text-red-500 font-semibold">{car?.price}</p>
            <button className="btn bg-[#2f5296] text-white">Book Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarDetailsContainer;

const findDataByNameAndCategoryId = (data: TCarsType[], name?: string, category?: string) => {
  // cari kategori id di dalam array data
  const filterData = data?.find(item => item.category_id === Number(category));

  // setelah mendapatkan category id yang sesuai, function mereturn data yang dicari di dalam array car_type
  return filterData?.car_type?.find(item => item.vehicle.toLowerCase() === name?.toLowerCase());
}