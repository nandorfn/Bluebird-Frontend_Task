import Category from "./components/Category"
import CarsContainer from "./components/Container/CarsContainer";
import { DataApi } from "./helpers/types";
import { getData } from "./services/app.service";

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const { category, type }: DataApi = await getData();
  return (
    <>
      <Category 
        data={category} 
        searchParam={searchParams?.category_id ?? 1}
        />
      <CarsContainer
        searchQuery={searchParams?.search}
        searchParams={searchParams?.category_id ?? 1}
        data={type} />
    </>
  )
}