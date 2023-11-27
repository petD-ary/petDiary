'use client';
import { useEffect, useState } from 'react';
import Heading from '@/components/Stemp/Heading';
import Stemp from '@/components/Stemp';
import { useRecoilState } from 'recoil';
import { stempModalState } from '@/recoil/Stemp/atoms';
import StempModal from '../StempModal';

interface StempProps {
  value: number;
  checked: null | string;
}

const StempDiary = ({ title, data }: { title: string; data: string[] }) => {
  const [stemp, setStemp] = useState<StempProps[]>();
  const [page, setPage] = useState<number>(1);
  const totalPages = 8;

  const [isOpen, setIsOpen] = useRecoilState(stempModalState);

  const [left, setLeft] = useState<StempProps[]>();
  const [right, setRight] = useState<StempProps[]>();

  useEffect(() => {
    const getStempArr = () => {
      const stempArr = Array.from(Array(48), (_, i) => {
        return {
          value: i + 1,
          checked: null,
        };
      });
      setStemp(stempArr);
    };

    if (!stemp) {
      getStempArr();
    }
  }, [stemp, page]);

  useEffect(() => {
    const getStempArr = () => {
      const stempArr = Array.from(Array(48), (_, i) => {
        const num = page === 1 ? 0 : 48 * (page - 1);
        return {
          value: i + num + 1,
          checked: null,
        };
      });
      setStemp(stempArr);
    };

    getStempArr();
  }, [page]);

  useEffect(() => {
    if (stemp) {
      const leftStemp = stemp.slice(0, 24);
      setLeft(leftStemp);
      const rightStemp = stemp
        .slice(24)
        .filter((stemp) => (stemp.value > 365 ? stemp.value < 365 : stemp));
      setRight(rightStemp);
    }
  }, [stemp]);

  const today = new Date();

  const checkTodayStemp = data.filter((data) => {
    return data === today.toLocaleString().substring(0, 13);
  });

  return (
    <div className='h-full'>
      {isOpen && (
        <StempModal
          todayChecked={checkTodayStemp.length !== 0 ? true : false}
        />
      )}
      <div
        className='bg-white flex flex-wrap justify-between relative
      px-[78px] py-[78px]
      border-[24px] border-grayColor-200 rounded-2xl'
      >
        <Heading
          title={title}
          check={data.length}
          totalPages={totalPages}
          page={page}
          setPage={(value: number) => setPage(value)}
        />
        <div className='flex flex-wrap w-[calc(50%_-_100px)] gap-6'>
          {left &&
            left.map((stemp) => (
              <Stemp
                key={stemp.value}
                check={data.filter(
                  (_: string, idx: number) => idx + 1 === stemp.value
                )}
                value={stemp.value}
              />
            ))}
        </div>
        <div className='flex flex-wrap justify-end w-[calc(50%_-_100px)] gap-6'>
          {right &&
            right.map((stemp) => (
              <Stemp
                key={stemp.value}
                check={data.filter(
                  (_: string, idx: number) => idx + 1 === stemp.value
                )}
                value={stemp.value}
              />
            ))}
        </div>
      </div>
      <button
        onClick={() => setIsOpen(true)}
        className='my-10 mx-auto block px-6 py-4 bg-black
      text-white font-medium rounded-lg
      '
      >
        스탬프 찍기
      </button>
    </div>
  );
};

export default StempDiary;
