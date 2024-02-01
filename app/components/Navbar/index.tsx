'use client';
import { usePathname, useRouter } from 'next/navigation';
import IconHome from '@/assets/images/navbar/icon-home.svg';
import IconCalendar from '@/assets/images/navbar/icon-calendar.svg';
import IconInfo from '@/assets/images/navbar/icon-info.svg';
import IconCommunity from '@/assets/images/navbar/icon-community.svg';
import IconMypage from '@/assets/images/navbar/icon-mypage.svg';
import IconSelectedHome from '@/assets/images/navbar/icon-selected-home.svg';
import IconSelectedCalendar from '@/assets/images/navbar/icon-selected-calendar.svg';
import IconSelectedInfo from '@/assets/images/navbar/icon-selected-info.svg';
import IconSelectedCommunity from '@/assets/images/navbar/icon-selected-community.svg';
import IconSelectedMypage from '@/assets/images/navbar/icon-selected-mypage.svg';

interface NavItem {
  type: 'home' | 'calendar' | 'info' | 'community' | 'mypage';
  pathname: string;
  push: string;
  content: string;
  icon: React.ComponentType<{}>;
  selectedIcon: React.ComponentType<{}>;
}

const NAVBAR: NavItem[] = [
  {
    type: 'home',
    pathname: '/',
    push: '/',
    content: '홈',
    icon: IconHome,
    selectedIcon: IconSelectedHome,
  },
  {
    type: 'calendar',
    pathname: '/calendar',
    push: '/calendar',
    content: '캘린더',
    icon: IconCalendar,
    selectedIcon: IconSelectedCalendar,
  },
  {
    type: 'info',
    pathname: '/info',
    push: '/info',
    content: '반려지식',
    icon: IconInfo,
    selectedIcon: IconSelectedInfo,
  },
  {
    type: 'community',
    pathname: '/community',
    push: '/community',
    content: '커뮤니티',
    icon: IconCommunity,
    selectedIcon: IconSelectedCommunity,
  },
  {
    type: 'mypage',
    pathname: '/mypage',
    push: '/mypage',
    content: '마이페이지',
    icon: IconMypage,
    selectedIcon: IconSelectedMypage,
  },
];

const NAVBAR_BLACKLIST = ['/login', '/account'];

const Navbar = () => {
  const nowPathname = usePathname();
  const router = useRouter();

  if (NAVBAR_BLACKLIST.includes(nowPathname)) {
    return null;
  }

  return (
    <div className='fixed w-full md:max-w-3xl bottom-0 h-16 bg-white flex z-20 px-5 left-1/2 -translate-x-1/2'>
      {NAVBAR.map(({ type, pathname, push, content, selectedIcon, icon }) => {
        const isSelected = pathname === nowPathname ? true : false;
        const Icon = isSelected ? selectedIcon : icon;
        return (
          <div
            className='w-full flex justify-center items-center flex-col flex-wrap cursor-pointer'
            onClick={() => router.push(push)}
            key={pathname}
          >
            <Icon />
            <div
              className={`${
                isSelected ? 'text-primary-500' : 'text-grayColor-700'
              }`}
            >
              {content}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
