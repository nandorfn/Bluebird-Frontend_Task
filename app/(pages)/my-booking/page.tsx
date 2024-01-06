import Category from "@/app/components/Category";
import BookingContainer from "@/app/components/Container/BookingContainer";
import { DataApi } from "@/app/helpers/types";
import { getData } from "@/app/services/app.service";

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const { category }: DataApi = await getData();
  return (
    <>
      <Category data={category} searchParam={searchParams.category} />
      <div className="flex flex-col">
        <h1 className="mx-auto font-medium text-3xl mt-10">My Booking </h1>
        <BookingContainer />
      </div>

    </>
  );
};

export default Page;