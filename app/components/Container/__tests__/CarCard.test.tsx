import { carMock } from "@/app/helpers/mock-test";
import { render, screen } from '@testing-library/react';
import { ClassAttributes, ImgHTMLAttributes } from "react";
import '@testing-library/jest-dom';
import CarCard from "../CarCard";

jest.mock('next/image', () => ({ 
  __esModule: true, 
  default: ( props: JSX.IntrinsicAttributes & ClassAttributes<HTMLImageElement> & ImgHTMLAttributes<HTMLImageElement>, ) => <img {...props} />, }));
describe('CarCard', () => {
  test('render komponen CarCard sesuai data di props', () => {
    render(<CarCard data={carMock} />);
  
    const linkElement = screen.getByRole('link', { name: /regular/i });
    expect(linkElement).toHaveAttribute('href', 'details?name=Regular');
  
    const imageElement = screen.getByAltText('Regular');
    expect(imageElement).toBeInTheDocument();
  
    const headingElement = screen.getByRole('heading', { name: /regular/i });
    expect(headingElement).toBeInTheDocument();
  
    const priceElement = screen.getByText('IDR 200.000');
    expect(priceElement).toBeInTheDocument();
  });
})