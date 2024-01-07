import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../Footer';

describe('Footer', () => {
  test('render footer', () => {
    render(<Footer />);

    const footer = screen.getByTestId('footer');
    expect(footer).toBeInTheDocument();

    // Cek elemen-elemen footer
    expect(screen.getByAltText('Bluebird')).toBeInTheDocument();
    expect(screen.getByText(/Bluebird Main Office/i)).toBeInTheDocument();
    expect(screen.getByText('Connect with us')).toBeInTheDocument();
    expect(screen.getByText('Start your journey with us')).toBeInTheDocument();
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
  });

  test('merender data links', async () => {
    render(<Footer />);

    // Cek jumlah link
    const allLinks = screen.getAllByRole('link');

    // Menyaring hanya link sosial media
    const filteredSosmedLinks = allLinks.filter(link => link.getAttribute('data-testid') === 'sosmed-link');
    expect(filteredSosmedLinks).toHaveLength(6);

    // Menyaring hanya link  app surce
    const filteredAppSource = allLinks.filter(link => link.getAttribute('data-testid') === 'app-source-link');
    expect(filteredAppSource).toHaveLength(4);

    // Menyaring hanya link  about us
    const aboutUs = allLinks.filter(link => link.getAttribute('data-testid') === 'about-use-test');
    expect(aboutUs).toHaveLength(7);

    // Menyaring hanya link  products
    const products = allLinks.filter(link => link.getAttribute('data-testid') === 'products-test');
    expect(products).toHaveLength(12);
  });

})
