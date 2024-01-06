export type TLinkSource = {
  label: string;
  href: string;
  logo: string;
}

export type DataApi = {
  category: TCategory[];
  type: TCarsType[]; 
}

export type TCategory = {
  id: number;
  name: string;
  imageURL: string;
}

export type TCarsType = {
  id: number;
  category_id: number;
  car_type: TCarType[];
}

export type TCarType = {
  vehicle: string;
  imageURL: string;
  price: string;
  description: string[];
}