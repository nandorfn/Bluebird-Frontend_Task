import Image from "next/image";
import Link from "next/link";
import { TCategory } from "@/app/helpers/types";

interface CategoryProps {
    data: TCategory[];
    searchParam: any;
}

const Category: React.FC<CategoryProps> = async ({ data, searchParam }) => {    
    const listCategory = data?.map((item: TCategory) => (
        <li key={item?.id} className="min-w-36 p-4 hover:bg-slate-200">
            <Link 
                href={`?category=${item?.id}`} 
                className={`flex flex-col ${searchParam != item?.id  ? 'opacity-50' : 'opacity-100'}`}>
                <Image
                    src={`https://${item.imageURL.split("//")[1]}`}
                    width={150}
                    height={150}
                    alt={'cat?.name'} />
                <p className=" text-sm text-center">{item?.name}</p>
            </Link>
        </li>
    ))
    
    return (
        <div id="category" className="max-w-[90%] lg:max-w-7xl shadow-xl rounded-2xl mt-10 mx-auto overflow-x-scroll">
            <ul className="flex flex-row justify-around">
                {listCategory}
            </ul>
        </div>
    );
};

export default Category;