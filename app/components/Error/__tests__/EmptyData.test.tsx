import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EmptyData from '../EmptyData';

describe('EmptyData', () => {
  test('render dengan pesan', () => {
    const message = 'No data found.';
    
    render(<EmptyData message={message} />);
    
    // Cek apakah pesan ditampilkan
    const emptyMessage = screen.getByText(message);
    expect(emptyMessage).toBeInTheDocument();
    
    // Cek className dari elemen
    expect(emptyMessage).toHaveClass('text-xl');
    expect(emptyMessage).toHaveClass('text-[#6C6E72]');
    expect(emptyMessage).toHaveClass('font-semibold');
  });
})
