'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

const SearchBar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.get('search');

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    router.push(pathname + '?' + createQueryString(name, value));
  };

  return (
    <input
      name='search'
      className=' rounded-xl px-2 py-1 mx-4'
      onChange={handleInput}
      value={search ?? ''}
      placeholder='Search...'
    />
  );
};

export default SearchBar;