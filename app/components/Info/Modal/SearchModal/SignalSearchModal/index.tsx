'use client';
import React, { FormEvent, useMemo, useState } from 'react';
import Link from 'next/link';

import { SignalProps } from '@/components/Info/Signal';
import Input from '@/components/Input';
import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/Modal';
import IconSearch from '@/assets/images/icon-search.svg';
import { useModal } from '@/hooks/view/useModal';
import Label from '@/components/Info/Label';
import { searchSignal } from '@/apis/info';
import { useRecoilValue } from 'recoil';
import { filterState } from '@/recoil/Info/atoms';
import {
  filterList,
  signalDepth,
} from '@/components/Info/Filter/filterModalList';
import NoResult from '../NoResult';

const SignalSearchModal = () => {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState<any[] | null>(null);
  const filter = useRecoilValue(filterState);

  const signalOption = useMemo(() => {
    return filterList[1].option.filter(
      (item) => item.value === filter.signal,
    )[0];
  }, [filter.signal]);

  const signalDepthOption = useMemo(() => {
    return signalDepth.filter((item) => item.value === filter.signalDepth)[0];
  }, [filter.signalDepth]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await searchSignal(
      filter.signal === 'poop'
        ? `${filter.signal}${filter.signalDepth}`
        : filter.signal,
      search,
    );
    setResult(response);
  };

  return (
    <Modal type={MODAL_TYPE.INFO_SEARCH_SIGNAL} variant={MODAL_VARIANT.SLIDE}>
      <Modal.Header title='' titleType='left-X' />
      <div className='px-5'>
        <h3 className='text-grayColor-900 text-title3 font-semibold py-3 leading-normal'>
          <span className='text-primary-500'>
            행동 신호(
            {`${signalOption.desc}${filter.signal === 'poop' ? ' ' + signalDepthOption.desc : ''}`}
            )
          </span>
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
        <ul className='bg-white px-5 mt-2'>
          {result !== null &&
            (result.length > 0 ? (
              result.map((result: SignalProps) => {
                const tags = result.tag?.filter(
                  (item) => Object.keys(item)[0] !== '반려동물 타입',
                );
                const petType = result.tag?.filter(
                  (item) => Object.keys(item)[0] === '반려동물 타입',
                )[0];

                return (
                  <SearchResult
                    key={result.id}
                    data={result}
                    tags={tags}
                    petType={petType}
                  />
                );
              })
            ) : (
              <NoResult search={search} />
            ))}
        </ul>
      </div>
    </Modal>
  );
};

export default SignalSearchModal;

const SearchResult = ({
  data,
  tags,
  petType,
}: {
  data: SignalProps;
  tags?: { [key: string]: string }[];
  petType?: { [key: string]: string };
}) => {
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
          {petType && <span>{petType[Object.keys(petType)[0]]}</span>}
          {tags ? <Label>{tags[0][Object.keys(tags[0])[0]]}</Label> : null}
        </div>
      </Link>
    </li>
  );
};
