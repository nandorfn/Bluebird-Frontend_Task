import Category from "@/app/components/Category";
import WishlistContainer from "@/app/components/Container/WishlistContainer";
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
      <Category data={category} searchParam={searchParams.category_id}  />
      <div className="flex flex-col">
        <h1 className="mx-auto font-medium text-3xl mt-10">Wishlist</h1>
        <WishlistContainer  />
      </div>

    </>
  );
};

export default Page;