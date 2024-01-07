import Link from "next/link";
import { TCarType } from "@/app/helpers/types";
import { FallbackImage } from "../Error/FallbackImage";

interface Props {
  data: TCarType
}

const CarCard: React.FC<Props> = ({ data }) => {
  return (
    <Link href={`details?name=${data?.vehicle}`}className="flex flex-row mx-auto w-[90%] md:w-[40rem] shadow-lg rounded-xl ">
      <figure>
        <FallbackImage
          src={data?.imageURL}
          width={500}
          height={500}
          alt={data?.vehicle} />
      </figure>
      <div className="w-full m-auto text-center">
        <h3>{data?.vehicle}</h3>
        <p className=" text-2xl font-semibold text-red-500">{data?.price}</p>
      </div>
    </Link>
  );
};

export default CarCard;