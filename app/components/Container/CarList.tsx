import { TCarType } from "@/app/helpers/types";
import Image from "next/image";
import WishlistButton from "../Button/WishlistButton";
import Link from "next/link";

interface Props {
    data: TCarType
}

const CarList: React.FC<Props> = ({ data }) => {
    return (
        <Link
            href={`details?name=${data?.vehicle}`}
            className="flex w-fit mx-auto flex-col gap-2 p-4 shadow-xl rounded-xl cursor-pointer">
            <Image
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