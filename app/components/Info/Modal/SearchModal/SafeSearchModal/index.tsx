'use client';
import React, { FormEvent, useState } from 'react';
import Link from 'next/link';

import Input from '@/components/Input';
import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/Modal';
import IconSearch from '@/assets/images/icon-search.svg';
import { useModal } from '@/hooks/view/useModal';
import Label from '@/components/Info/Label';
import { searchFood } from '@/apis/info';
import NoResult from '../NoResult';
import { FoodProps } from '@/components/Info/DangerousFood';

const SafeSearchModal = () => {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState<any[] | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await searchFood('safeFood', search);
    setResult(response);
  };

  return (
    <Modal type={MODAL_TYPE.INFO_SEARCH_SAFE} variant={MODAL_VARIANT.SLIDE}>
      <Modal.Header
        title=''
        titleType='left-X'
        onClick={() => {
          setSearch('');
          setResult(null);
        }}
      />
      <div className='px-5'>
        <h3 className='text-grayColor-900 text-title3 font-semibold py-3 leading-normal'>
          <span className='text-primary-500'>안심 음식</span>
          에 대해
          <br />
          궁금한 내용을 검색해주세요
        </h3>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Input name='search' className='py-4'>
            <Input.TextInput
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setResult(null);
              }}
              placeholder='내용검색'
            />
            <button
              type='submit'
              className='absolute right-3 top-1/2 -translate-y-1/2'
            >
              <IconSearch />
            </button>
          </Input>
        </form>
      </div>
      <div className='bg-extra-device-bg h-full overflow-y-scroll scrollbar-none pb-2'>
        <ul
          className={`${result !== null && result.length === 0 ? '' : 'bg-white'} px-5 mt-2`}
        >
          {result !== null &&
            (result.length > 0 ? (
              result.map((result: FoodProps) => {
                return <SearchResult key={result.id} data={result} />;
              })
            ) : (
              <NoResult />
            ))}
        </ul>
      </div>
    </Modal>
  );
};

export default SafeSearchModal;

const SearchResult = ({ data }: { data: FoodProps }) => {
  const { removeModal } = useModal();

  return (
    <li>
      <Link
        onClick={() => removeModal()}
        href={`/info/signal/${data.id}`}
        className='cursor-pointer mx-5 py-4 border-b border-extra-deviders flex flex-col gap-2'
      >
        <h3 className='text-subTitle2 font-semibold text-text-title'>
          {data.title[Object.keys(data.title)[0]]}
        </h3>
        <p className='text-body2 text-text-secondary'>
          {data.summary[Object.keys(data.summary)[0]]}
        </p>
        <div className='flex items-center gap-2 text-caption2 font-medium text-text-primary'>
          {data.petType && <span>{data.petType}</span>}
          {data.tag ? (
            <Label>{data.tag[Object.keys(data.tag)[0]]}</Label>
          ) : null}
        </div>
      </Link>
    </li>
  );
};
