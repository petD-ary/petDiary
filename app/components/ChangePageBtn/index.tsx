<<<<<<< HEAD
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { BsBag, BsHeart, BsSearch } from 'react-icons/bs';
import { useSetRecoilState } from 'recoil';
import { searchModalState } from '@/recoil/Store/atoms';
=======
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
>>>>>>> 75e1b1d5a727058d64b4b1a4650ee89bfbfcd110

interface ChangePageBtnProps {
  PageList: { path: string; title: string }[];
  search?: boolean;
  store?: boolean;
}

interface PageList {
  path: string;
  title: string;
}

const ChangePageBtn = ({ PageList, search, store }: ChangePageBtnProps) => {
  const pathname = usePathname();

  const setIsOpen = useSetRecoilState(searchModalState);

  return (
<<<<<<< HEAD
    <div className='px-4 sm:px-0 py-6 sm:py-12 flex justify-end items-center relative'>
=======
    <div className="px-4 sm:px-0 py-6 sm:py-12">
>>>>>>> 75e1b1d5a727058d64b4b1a4650ee89bfbfcd110
      <div
        className={`absolute left-1/2 -translate-x-1/2 flex mx-auto 
      bg-grayColor-200
      h-12 max-w-[450px] min-w-[280px]
      rounded-lg
   `}
      >
        {PageList.map((page) => (
          <Link
            key={page.path}
            href={page.path}
            className={`h-full
          flex justify-center items-center
          rounded-lg w-1/2
          font-semibold
<<<<<<< HEAD
          ${
            pathname.includes(page.path)
              ? 'border-2 border-grayColor-200 bg-white'
              : 'text-white'
          }`}
=======
          
          ${pathname === page.path ? "border-2 border-grayColor-200 bg-white" : "text-white"}`}
>>>>>>> 75e1b1d5a727058d64b4b1a4650ee89bfbfcd110
          >
            {page.title}
          </Link>
        ))}
      </div>

      {search && (
        <div className='flex gap-8 items-center [&_svg]:cursor-pointer'>
          <BsSearch size={18} onClick={() => setIsOpen(true)} />
          {store && (
            <React.Fragment>
              <BsHeart size={18} />
              <BsBag size={18} />
            </React.Fragment>
          )}
        </div>
      )}
    </div>
  );
};

export default ChangePageBtn;
