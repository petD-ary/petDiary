import Image from 'next/image';
import activeChevron from '@/assets/images/activeChevron.png';
import chevron from '@/assets/images/chevron.png';

const Heading = ({
  title,
  check,
  totalPages,
  page,
  setPage,
}: {
  title: string;
  check: number;
  totalPages: number;
  page: number;
  setPage: (value: number) => void;
}) => {
  return (
    <div className='w-full flex justify-between items-start pb-12'>
      <div>
        <h3 className='font-semibold text-lg pb-5'>{title} 스탬프</h3>
        <p className='font-bold text-[26px]'>
          {check} <span className='text-grayColor-200'>/ 365</span>
        </p>
      </div>
      <div className='flex items-center'>
        <button
          className='w-3 h-3 relative [&_img]:rotate-180'
          onClick={() => {
            const prevPage = page === 1 ? page : page - 1;
            return setPage(prevPage);
          }}
        >
          <Image
            src={page === 1 ? chevron : activeChevron}
            alt='다음 페이지 보기'
            fill
            sizes='100%'
            style={{ objectFit: 'contain' }}
          />
        </button>
        <p className='font-semibold px-5'>
          {page} <span className='text-grayColor-200 font-normal'>/ 8</span>
        </p>
        <button
          className='w-3 h-3 relative'
          onClick={() => {
            const nextPage = page < totalPages ? page + 1 : page;
            return setPage(nextPage);
          }}
        >
          <Image
            src={page < totalPages ? activeChevron : chevron}
            alt='다음 페이지 보기'
            fill
            sizes='100%'
            style={{ objectFit: 'contain' }}
          />
        </button>
      </div>
    </div>
  );
};

export default Heading;
