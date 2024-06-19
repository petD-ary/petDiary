'use client';
import React, { ReactNode, useState } from 'react';
import Modal, { MODAL_TYPE, MODAL_VARIANT } from '../Modal';
import useDebounceSearch from '@/hooks/util/useDebounceSearch';
import Input from '../Input';

const SearchModal = ({ children }: { children?: ReactNode }) => {
  const [search, setSearch] = useState('');

  const searchDebounce = useDebounceSearch(search, 300);

  return (
    <Modal type={MODAL_TYPE.SEARCH} variant={MODAL_VARIANT.SLIDE}>
      <Modal.Header title='궁금한 내용을 검색해주세요' />
      <div className='bg-extra-device-bg h-full'>
        <Input name='search'>
          <Input.TextInput
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder='내용검색'
          />
        </Input>
      </div>
    </Modal>
  );
};

export default SearchModal;
