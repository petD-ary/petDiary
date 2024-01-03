'use client';

import { SubTitle, Title } from '@/components/Typography/TypographyList';

interface HeadingProps {
  title: string;
  subTitle: string;
}

const Heading = ({ title, subTitle }: HeadingProps) => {
  return (
    <div className='flex flex-col gap-2 pt-4 pb-6'>
      <h2 className={`text-text-title ${Title.title2}`}>{title}</h2>
      <p className={`text-text-secondary ${SubTitle.subTitle3}`}>{subTitle}</p>
    </div>
  );
};

export default Heading;
