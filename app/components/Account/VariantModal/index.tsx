import useModal from '@/hooks/useModal';
import { variantModalState } from '@/recoil/Account/atoms';
import { useEffect, useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import VariantList from './VariantList';
import IconSearch from '@/assets/images/icon-search@24.svg';
import IconClose from '@/assets/images/Icon-x.svg';
import Title2 from '@/components/Typography/Title2';
import Input from '@/components/Input';
import getBreedsList from '../PetInfoForm/getBreedsList';
import Button from '@/components/Button';

interface VariantModalProps {
  variant: string;
  breed: string;
  setBreed: (value: string) => void;
}

interface BreedsProps {
  id: number;
  breed: string;
}

const VariantModal = ({ variant, breed, setBreed }: VariantModalProps) => {
  const setIsOpen = useSetRecoilState(variantModalState);
  const ref = useRef<HTMLDivElement>(null);

  const [breeds, setBreeds] = useState<BreedsProps[] | null>(null);
  const [search, setSearch] = useState<string | null>(null);

  const handleOpenModal = () => {
    setIsOpen(false);
  };

  useModal(ref, handleOpenModal);

  const handlePutId = (id: string) => {
    setBreed(id);
  };

  useEffect(() => {
    getBreedsList(breed).then((result) => setBreeds(result));
  }, [breed]);

  useEffect(() => {
    if (search !== null) {
      getBreedsList(breed).then((result) => {
        const searchList = result.filter((breed) =>
          breed.breed.includes(search)
        );
        setBreeds(searchList);
      });
    }
  }, [search, breed]);

  return (
    <div className='fixed z-20 w-full h-full left-1/2 bottom-0 -translate-x-1/2 bg-black/30'>
      <div
        ref={ref}
        className='absolute left-1/2 -translate-x-1/2 bottom-0
        w-full md:max-w-3xl h-[calc(100%_-_56px)]
        shadow-[0_-10px_60px_rgba(0,0,0,0.15)]
        rounded-t-lg rounded-r-lg bg-white
        flex flex-col
        '
      >
        <div className='px-2 py-1 flex justify-end'>
          <div className='p-3 cursor-pointer'>
            <IconClose />
          </div>
        </div>
        <Title2 className='text-grayColor-900 px-5 py-3'>
          {variant === '강아지' ? '견종' : '묘종'}선택
        </Title2>

        <Input
          value={search === null ? '' : search}
          onChange={(e) => setSearch(e.target.value)}
          className='rounded-lg mt-5 mb-2
        font-medium cursor-default px-5'
        >
          <Input.TextInput
            value={search === null ? '' : search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={
              variant === '강아지'
                ? '견종을 입력해주세요'
                : '묘종을 입력해주세요'
            }
          />
          <span className='absolute top-4 right-8'>
            <IconSearch />
          </span>
        </Input>

        <ul className='h-full mx-5 overflow-y-scroll scrollbar-none'>
          {breeds &&
            breeds.map((item) => (
              <VariantList
                key={item.id}
                selected={breed}
                title={item.breed}
                handlePutId={handlePutId}
              />
            ))}
        </ul>

        <div className='py-3 px-5 bg-white w-full shadow-[0_-4px_12px_0_rgba(0_,0_,0_,0.04)]'>
          <Button onClick={() => setIsOpen(false)} variant='contained'>
            선택
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VariantModal;
