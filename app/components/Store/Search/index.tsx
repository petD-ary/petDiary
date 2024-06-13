'use client';
import ItemList from '@/data/ItemList';
import useClickOutsideArea from '@/hooks/useClickOutsideArea';
import { searchModalState } from '@/recoil/Store/atoms';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { BsX } from 'react-icons/bs';
import { useSetRecoilState } from 'recoil';

interface SearchProps {
  searchQuery?: { id: number; query: string }[];
  products?: { id: number; productId: number }[];
}

const Search = ({ searchQuery, products }: SearchProps) => {
  const [searchHistory, setSearchHistory] = useState(searchQuery);
  const [search, setSearch] = useState('');
  const setIsOpen = useSetRecoilState(searchModalState);
  const ref = useRef(null);
  const pathname = usePathname().split('/');

  const handleOpenModal = () => {
    setIsOpen(false);
  };

  useClickOutsideArea(ref, handleOpenModal);
  return (
    <div className='fixed z-50 w-full h-full top-0 left-0 bg-black/30'>
      <div ref={ref} className='fixed right-0 w-[360px] h-full bg-white p-5'>
        <div
          onClick={() => setIsOpen(false)}
          className='absolute right-5 top-5 cursor-pointer'
        >
          <BsX size={24} />
        </div>

        <h2 className='font-semibold text-xl pt-[50px] pb-6'>
          고객님
          <br />
          어떤 상품을 찾으세요?
        </h2>
        <form className='relative w-full'>
          <input
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='검색어를 입력해 주세요.'
            className='w-full bg-[#fbfbfb] px-5 py-2 rounded-lg outline-none'
          />
          {search !== '' && (
            <span
              onClick={() => setSearch('')}
              className='absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer'
            >
              <BsX size={18} />
            </span>
          )}
        </form>

        <ul className='pt-8'>
          <li className='flex justify-between pb-3 font-semibold'>
            최근 검색어
            {(searchHistory?.length !== 0 || undefined) && (
              <span
                onClick={() => setSearchHistory(undefined)}
                className='text-grayColor-300 font-normal cursor-pointer'
              >
                전체 삭제
              </span>
            )}
          </li>
          {searchHistory &&
            searchHistory.map(({ id, query }) => (
              <li key={id} className='flex justify-between items-center py-2'>
                <span className='flex-grow'>{query}</span>

                <span
                  onClick={() =>
                    setSearchHistory((prev) =>
                      prev ? prev.filter((item) => item.id !== id) : undefined,
                    )
                  }
                  className='cursor-pointer'
                >
                  <BsX size={18} />
                </span>
              </li>
            ))}
        </ul>
        {/* 구분선 */}
        {searchHistory && products && (
          <div className='w-full h-[1px] bg-grayColor-200 my-6'></div>
        )}
        <ul className='flex flex-col gap-4'>
          <li className='pb-3 font-semibold'>최근 본 상품</li>
          {products &&
            products.map(({ id, productId }) => {
              const product = ItemList.find((item) => item.id === productId);

              if (product) {
                const { title, brand, price } = product;
                return (
                  <li key={id}>
                    <Link
                      href={`/${pathname[1]}/${pathname[2]}/${productId}`}
                      className='flex gap-4 items-center'
                      onClick={() => setIsOpen(false)}
                    >
                      <div className='w-[100px] h-[100px] bg-grayColor-200 rounded-lg'></div>
                      <div className='flex flex-col'>
                        <p>{brand}</p>
                        <p className='text-[#4e4e4e]'>
                          {title.length > 16 ? title.substring(0, 16) : title}
                        </p>
                        <p>{price.toLocaleString()}</p>
                      </div>
                    </Link>
                  </li>
                );
              }
            })}
        </ul>
      </div>
    </div>
  );
};

export default Search;
