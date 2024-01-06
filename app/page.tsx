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
        searchParam={searchParams?.category ?? 1}
        />
      <CarsContainer 
        searchParams={searchParams?.category ?? 1}
        data={type} />
    </>
  )
}