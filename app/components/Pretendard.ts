import localFont from 'next/font/local';

const pretendard = localFont({
  src: [
    {
      path: '../assets/font/Pretendard-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/font/Pretendard-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/font/Pretendard-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/font/Pretendard-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
});

export default pretendard;
