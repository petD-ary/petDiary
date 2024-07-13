'use client';
import React from 'react';
import { useModal } from '@/hooks/view/useModal';
import { MODAL_TYPE } from '@/components/Modal';
import SearchModal from '.';
import { InfoTab } from '@/(home)/info/page';
import IconSearch from '@/assets/images/icon-search.svg';

const GoToSearch = ({ tab }: { tab: InfoTab }) => {
  const { addModal } = useModal();

  return (
    <>
      <SearchModal tab={tab} />
      <div
        className='w-full cursor-pointer border border-extra-border rounded-lg flex justify-between items-center px-3 py-2'
        onClick={() => addModal(MODAL_TYPE.SEARCH)}
      >
        <p className='text-text-disable text-body1 font-medium'>내용검색</p>
        <IconSearch />
      </div>
    </>
  );
};

export default GoToSearch;
