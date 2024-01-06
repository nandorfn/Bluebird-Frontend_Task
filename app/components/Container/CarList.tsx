import { TCarType } from "@/app/helpers/types";
import Image from "next/image";
import heart from '@/app/assets/icon/heart.svg';

interface Props {
    data: TCarType
}

const CarList: React.FC<Props> = ({ data }) => {
    return (
        <div className="flex w-fit mx-auto flex-col gap-2 p-4 shadow-xl rounded-xl cursor-pointer">
            <Image
                src={data?.imageURL}
                width={300}
                height={300}
                alt={data?.vehicle} />
            <div className="flex flex-row justify-between">
                <p className=" text-center text-[#6C6E72] text-xl font-medium">{data?.vehicle}</p>
                <button className=" hover:scale-110">
                    <Image src={heart} width={24} height={24} alt="Like" />
                </button>
            </div>
        </div>
    );
};

export default CarList;