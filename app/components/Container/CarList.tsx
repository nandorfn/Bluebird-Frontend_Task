import Link from "next/link";
import { TCarType } from "@/app/helpers/types";
import WishlistButton from "../Button/WishlistButton";
import { FallbackImage } from "../Error/FallbackImage";

interface Props {
    data: TCarType
}

const CarList: React.FC<Props> = ({ data }) => {
    return (
        <Link
            href={`details?name=${data?.vehicle}`}
            className="flex w-fit mx-auto flex-col gap-2 p-4 shadow-xl rounded-xl cursor-pointer">
            <FallbackImage
                src={data?.imageURL}
                width={300}
                height={300}
                alt={data?.vehicle} />
            <div className="flex flex-row justify-between">
                <p className=" text-center text-[#6C6E72] text-xl font-medium">{data?.vehicle}</p>
                <WishlistButton data={data} />
            </div>
        </Link>
    );
};

export default CarList;