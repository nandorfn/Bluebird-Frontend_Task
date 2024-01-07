'use client'
import Link from "next/link";
import { TCategory } from "@/app/helpers/types";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { FallbackImage } from "../Error/FallbackImage";

interface CategoryProps {
    data: TCategory[];
    searchParam: any;
}

const Category: React.FC<CategoryProps> = ({ data, searchParam }) => {
    const pathname = usePathname()
    const searchParams = useSearchParams()!
    
    // menambah atau mengubah url params
    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams)
            params.set(name, value)

            return params.toString()
        },
        [searchParams]
    )


    const listCategory = data?.map((item: TCategory) => (
        <li key={item?.id} className="min-w-36 p-4 hover:bg-slate-200">
            <Link
                href={pathname + '?' + createQueryString('category_id', String(item?.id))}
                className={`flex flex-col ${searchParam != item?.id ? 'opacity-50' : 'opacity-100'}`}>
                <FallbackImage
                    src={`https://${item.imageURL.split("//")[1]}`}
                    width={150}
                    height={150}
                    alt={item?.name} />
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