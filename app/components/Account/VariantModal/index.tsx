import useModal from '@/hooks/useModal';
import { variantModalState } from '@/recoil/Account/atoms';
import { useEffect, useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import VariantList from './VariantList';
import { catBreeds, dogBreeds } from '@/data/BreedList';

interface VariantModalProps {
  variant: string;
  setBreed: (value: string) => void;
}

const VariantModal = ({ variant, setBreed }: VariantModalProps) => {
  const setIsOpen = useSetRecoilState(variantModalState);
  const ref = useRef<HTMLDivElement>(null);

  const [breeds, setBreeds] = useState<string[] | null>(null);

  const handleOpenModal = () => {
    setIsOpen(false);
  };

  useModal(ref, handleOpenModal);

  const handlePutId = (id: string) => {
    setBreed(id);

    setIsOpen(false);
  };

  useEffect(() => {
    if (variant === '강아지') {
      setBreeds(dogBreeds);
    } else {
      setBreeds(catBreeds);
    }
  }, [variant]);

  return (
    <div className='fixed z-20 w-full h-full left-1/2 bottom-0 -translate-x-1/2 bg-black/30'>
      <div
        ref={ref}
        className='absolute left-1/2 -translate-x-1/2 bottom-0
        w-full sm:w-[612px] h-[684px] mx-6 sm:mx-0 px-6 pt-12
        shadow-[0_-10px_60px_rgba(0,0,0,0.15)]
        rounded-t-lg rounded-r-lg bg-white
      '
      >
        <h2 className='text-[20px] font-semibold'>
          {variant === '강아지' ? '견종' : '묘종'}선택
        </h2>

        <p
          className='
        relative rounded-lg mt-5 mb-2 p-5 pl-14
        font-medium bg-grayColor-100 cursor-default
        before:bg-grayColor-200 before:block before:absolute
        before:left-5 before:top-1/2 before:-translate-y-1/2 before:w-6 before:h-6
        before:rounded-full
        '
        >
          {variant === '강아지' ? '견종을 입력해주세요' : '묘종을 입력해주세요'}
        </p>

        <ul className='h-full overflow-y-scroll scrollbar-thin scrollbar-thumb-grayColor-200'>
          {breeds &&
            breeds.map((breed) => (
              <VariantList
                key={breed}
                id={breed}
                title={breed}
                handlePutId={handlePutId}
              />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default VariantModal;
