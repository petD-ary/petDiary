'use client';
import { useEffect, useState } from 'react';
import Heading from '@/components/Stamp/Heading';
import Stamp from '@/components/Stamp';
import { useRecoilState } from 'recoil';
import { stampModalState } from '@/recoil/Stamp/atoms';
import StampModal from '../StampModal';

interface StampProps {
  value: number;
  checked: null | string;
}

const StampDiary = ({ title, data }: { title: string; data: string[] }) => {
  const [stamp, setStamp] = useState<StampProps[]>();
  const [page, setPage] = useState<number>(1);
  const totalPages = 8;

  const [isOpen, setIsOpen] = useRecoilState(stampModalState);

  const [left, setLeft] = useState<StampProps[]>();
  const [right, setRight] = useState<StampProps[]>();

  useEffect(() => {
    const getStampArr = () => {
      const stampArr = Array.from(Array(48), (_, i) => {
        return {
          value: i + 1,
          checked: null,
        };
      });
      setStamp(stampArr);
    };

    if (!stamp) {
      getStampArr();
    }
  }, [stamp, page]);

  useEffect(() => {
    const getStampArr = () => {
      const stampArr = Array.from(Array(48), (_, i) => {
        const num = page === 1 ? 0 : 48 * (page - 1);
        return {
          value: i + num + 1,
          checked: null,
        };
      });
      setStamp(stampArr);
    };

    getStampArr();
  }, [page]);

  useEffect(() => {
    if (stamp) {
      const leftStamp = stamp.slice(0, 24);
      setLeft(leftStamp);
      const rightStamp = stamp
        .slice(24)
        .filter((stamp) => (stamp.value > 365 ? stamp.value < 365 : stamp));
      setRight(rightStamp);
    }
  }, [stamp]);

  const today = new Date();

  const checkTodayStamp = data.filter((data) => {
    return data === today.toLocaleString().substring(0, 13);
  });

  return (
    <div className='h-full'>
      {isOpen && (
        <StampModal
          todayChecked={checkTodayStamp.length !== 0 ? true : false}
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
            left.map((stamp) => (
              <Stamp
                key={stamp.value}
                check={data.filter(
                  (_: string, idx: number) => idx + 1 === stamp.value
                )}
                value={stamp.value}
              />
            ))}
        </div>
        <div className='flex flex-wrap justify-end w-[calc(50%_-_100px)] gap-6'>
          {right &&
            right.map((stamp) => (
              <Stamp
                key={stamp.value}
                check={data.filter(
                  (_: string, idx: number) => idx + 1 === stamp.value
                )}
                value={stamp.value}
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

export default StampDiary;
