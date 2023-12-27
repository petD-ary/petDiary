'use client';
import Title1 from '@/components/Typography/Title1';
import SubTitle from '@/components/Typography/SubTitle';

interface HeadingProps {
  title: string;
  subTitle: string;
}

const Heading = ({ title, subTitle }: HeadingProps) => {
  return (
    <div className='flex flex-col gap-2'>
      <Title1 className='text-text-title'>{title}</Title1>
      <SubTitle className='text-text-secondary'>{subTitle}</SubTitle>
    </div>
  );
};

export default Heading;
