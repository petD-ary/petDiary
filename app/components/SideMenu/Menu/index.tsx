'use client';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

interface NavType {
  icon: string;
  navItem: string;
  link: string;
}
const NavBtn = ({ icon, navItem, link }: NavType) => {
  const router = useRouter();
  const pathname = usePathname().split('/');

  const activeBtn = pathname[1] !== '' && link.includes(pathname[1]);
  const activeHomeBtn = pathname[1] === '' && link === '/';

  return (
    <div
      className={`w-20 h-20 flex flex-col items-center justify-center
      rounded-xl transition-colors text-center text-sm
      cursor-pointer group hover:bg-grayColor-200
      ${activeBtn ? 'bg-white hover:bg-white' : ''}
      ${activeHomeBtn ? 'bg-white hover:bg-white' : ''}
      `}
      onClick={() => router.push(link)}
    >
      <div
        className={`w-6 h-6 mx-auto mb-1 rounded-2xl bg-grayColor-200
        ${activeBtn ? '' : activeHomeBtn ? '' : 'group-hover:bg-white'}
        ${activeHomeBtn ? '' : 'group-hover:bg-grayColor-200'}
        `}
      ></div>
      <div className='tracking-tighter'>{navItem}</div>
    </div>
  );
};

export default NavBtn;
