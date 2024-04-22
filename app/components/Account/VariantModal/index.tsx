import { useEffect, useState } from 'react';
import VariantList from './VariantList';

import IconSearch from '@/assets/images/icon-search@24.svg';
import Input from '@/components/Input';
import Modal, { MODAL_TYPE } from '@/components/Modal';
import getBreedsList from '../PetInfoForm/getBreedsList';
import createFuzzyMatcher from '@/utils/createFuzzyMatcher';
import { useRecoilValue } from 'recoil';
import { petInfoState } from '@/recoil/Account/atoms';

interface BreedsProps {
  id: number;
  breed: string;
}

const VariantModal = () => {
  const [breeds, setBreeds] = useState<BreedsProps[] | null>(null);
  const [search, setSearch] = useState<string | null>(null);

  const petInfo = useRecoilValue(petInfoState);

  useEffect(() => {
    getBreedsList(petInfo.petType).then((result) => {
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
  }, [search, petInfo.petType]);

  return (
    <Modal type={MODAL_TYPE.BREED}>
      <Modal.Header
        title={`${petInfo.petType === '강아지' ? '견종' : '묘종'}선택`}
      />
      <Input
        name='searchBreed'
        className='rounded-lg mt-5 mb-2 font-medium cursor-default px-5'
      >
        <Input.TextInput
          value={search === null ? '' : search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={
            petInfo.petType === '강아지'
              ? '견종을 입력해주세요'
              : '묘종을 입력해주세요'
          }
        />
        <IconSearch className='absolute top-4 right-8' />
      </Input>

      <ul className='h-full mx-5 overflow-y-scroll scrollbar-none'>
        {breeds &&
          breeds.map((item) => (
            <VariantList key={item.id} title={item.breed} />
          ))}
      </ul>

      <Modal.Button children='선택' />
    </Modal>
  );
};

export default VariantModal;
