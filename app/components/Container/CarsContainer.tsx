import {
  TCarType,
  TCarsType
} from "@/app/helpers/types";
import CarList from "./CarList";
import EmptyData from "../Error/EmptyData";

interface Props {
  data: TCarsType[],
  searchParams: any;
  searchQuery: any;
}

const CarsContainer: React.FC<Props> = ({
  data,
  searchParams,
  searchQuery
}) => {
  const filteredData = data?.find(item => item.category_id === Number(searchParams));
  const searchData = findCardByQuery(data, searchQuery);


  return (
    <>
      <ul className="flex flex-col md:flex-row max-w-7xl mx-auto justify-center gap-10 my-32 flex-wrap">
        {searchQuery !== '' && searchQuery !== undefined
          ? renderData(searchData)
          : renderData(filteredData?.car_type!)
        }
      </ul>
    </>
  );
};

export default CarsContainer;

export const findCardByQuery = (data: TCarsType[], query: string) => {
  const results = [];

  for (const item of data) {
    for (const car of item.car_type) {
      if (car?.vehicle?.toLowerCase().includes(query?.toLowerCase())) {
        results.push(car);
      }
    }
  }

  return results;
}

const renderData = (data: TCarType[]) => {
  if (data.length < 1) {
    return <EmptyData message="Data tidak ditemukan!" />;
  }

  return (
    data?.map((item: TCarType, index: number) => (
      <li key={index}>
        <CarList data={item} />
      </li>
    ))
  )
}