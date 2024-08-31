'use client';
import React, { useMemo } from 'react';
import { useModal } from '@/hooks/view/useModal';
import { MODAL_TYPE } from '@/components/Modal';
import { InfoTab } from '@/(home)/info/page';
import IconSearch from '@/assets/images/icon-search.svg';
import DiseaseSearchModal from './DiseaseSearchModal';
import SignalSearchModal from './SignalSearchModal';
import DangerousSearchModal from './DangerousSearchModal';
import SafeSearchModal from './SafeSearchModal';

const GoToSearch = ({ tab }: { tab: InfoTab }) => {
  const { addModal } = useModal();

  const modalType = useMemo(() => {
    if (tab === 'disease') return MODAL_TYPE.INFO_SEARCH_DISEASE;
    if (tab === 'signal') return MODAL_TYPE.INFO_SEARCH_SIGNAL;
    if (tab === 'dangerousFood') return MODAL_TYPE.INFO_SEARCH_DANGEROUS;
    return MODAL_TYPE.INFO_SEARCH_SAFE;
  }, []);
  return (
    <>
      <DiseaseSearchModal />
      <SignalSearchModal />
      <DangerousSearchModal />
      <SafeSearchModal />
      <div
        className='w-full cursor-pointer border border-extra-border rounded-lg flex justify-between items-center px-3 py-2'
        onClick={() => addModal(modalType)}
      >
        <p className='text-text-disable text-body1 font-medium'>내용검색</p>
        <IconSearch />
      </div>
    </>
  );
};

export default GoToSearch;
