import Image from 'next/image';
import checkedStemp from '@/assets/images/checkedStemp.png';

const Stemp = ({ check, value }: { check: string[]; value: number }) => {
  if (check.length !== 0)
    return (
      <div className='w-[80px] h-[80px] cursor-default [&_img]:rotate-[15deg]'>
        <Image src={checkedStemp} alt='오늘의 스탬프 이미지' />
      </div>
    );
  return (
    <div
      className='w-[80px] h-[80px] rounded-full
    border border-dashed border-grayColor-200
    text-grayColor-200 text-xl font-semibold
    flex justify-center items-center cursor-default'
    >
      {value}
    </div>
  );
};

export default Stemp;
