import { useEffect, useState } from 'react';
import VariantList from './VariantList';

import IconSearch from '@/assets/images/icon-search@24.svg';
import Input from '@/components/Input';
import Modal, { MODAL_TYPE } from '@/components/Modal';
import getBreedsList from '../PetInfoForm/getBreedsList';
import createFuzzyMatcher from '@/utils/createFuzzyMatcher';

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
  const [breeds, setBreeds] = useState<BreedsProps[] | null>(null);
  const [search, setSearch] = useState<string | null>(null);

  const handlePutId = (id: string) => {
    setBreed(id);
  };

  useEffect(() => {
    getBreedsList(variant).then((result) => {
      if (search !== null) {
        const regex = createFuzzyMatcher(search);

        const searchList = result
          .filter((item: any) => regex.test(item.breed))
          .map((item: any) => ({ ...item }));

        setBreeds(searchList);
      } else {
        setBreeds(result);
      }
    });
  }, [search, variant]);

  return (
    <Modal type={MODAL_TYPE.BREED}>
      <Modal.Header title={`${variant === '강아지' ? '견종' : '묘종'}선택`} />
      <Input
        value={search === null ? '' : search}
        onChange={(e) => setSearch(e.target.value)}
        className='rounded-lg mt-5 mb-2 font-medium cursor-default px-5'
      >
        <Input.TextInput
          value={search === null ? '' : search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={
            variant === '강아지' ? '견종을 입력해주세요' : '묘종을 입력해주세요'
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

      <Modal.Button />
    </Modal>
  );
};

export default VariantModal;
