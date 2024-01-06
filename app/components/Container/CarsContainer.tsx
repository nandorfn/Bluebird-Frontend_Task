import {
  TCarType,
  TCarsType
} from "@/app/helpers/types";
import CarList from "./CarList";

interface Props {
  data: TCarsType[],
  searchParams: any;
}

const CarsContainer: React.FC<Props> = ({
  data,
  searchParams
}) => {
  const filteredData = data?.find(item => item.category_id === Number(searchParams));

  return (
    <>
      <ul className="flex flex-col md:flex-row max-w-7xl mx-auto justify-center gap-10 my-32">
        {filteredData?.car_type.map((item: TCarType, index: number) => (
          <li key={index}>
            <CarList data={item} type={filteredData?.category_id} />
          </li>
        ))
        }
      </ul>
    </>
  );
};

export default CarsContainer;