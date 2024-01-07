import Category from "@/app/components/Category";
import CarDetailsContainer from "@/app/components/Container/CarDetailsContainer";
import { DataApi } from "@/app/helpers/types";
import { getData } from "@/app/services/app.service";

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const { category, type }: DataApi = await getData();  
  return (
    <>
      <Category data={category} searchParam={searchParams.category ?? searchParams.category_id}  />
      <CarDetailsContainer data={type} searchParam={searchParams} />
    </>
  );
};

export default Page;