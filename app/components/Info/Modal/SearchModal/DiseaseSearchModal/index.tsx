'use client';
import React, { FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';

import Modal, { MODAL_TYPE, MODAL_VARIANT } from '../../../../Modal';
import useDebounceSearch from '@/hooks/util/useDebounceSearch';
import Input from '../../../../Input';
import {
  searchDisease,
  searchDiseaseSymptom,
  SearchSymptoms,
} from '@/apis/info';
import { DiseaseProps } from '../../../Disease';
import Label from '../../../Label';
import { useModal } from '@/hooks/view/useModal';
import IconSearch from '@/assets/images/icon-search.svg';
import NoResult from '../NoResult';

const DiseaseSearchModal = () => {
  const [search, setSearch] = useState('');
  const [symptoms, setSymptoms] = useState<SearchSymptoms[] | null>(null);
  const [searchResult, setSearchResult] = useState<any[] | null>(null);

  const searchDebounce = useDebounceSearch(search, 300);

  useEffect(() => {
    (async () => {
      if (searchResult !== null) return;

      const recommendSymptoms = await searchDiseaseSymptom(searchDebounce);
      setSymptoms(recommendSymptoms);
    })();
  }, [searchDebounce]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const searchOptions: {
      sort: 'high' | 'low';
      cursor: number;
      size: number;
      symptomSearch: string;
    } = {
      sort: 'high',
      cursor: 100000,
      size: 15,
      symptomSearch: search,
    };

    const result = await searchDisease(searchOptions);
    return setSearchResult(result.data);
  };

  const handleClickSymptom = async (symptom: {
    id: string;
    symptom: string;
  }) => {
    setSearch(symptom.symptom);
    setSymptoms(null);

    const searchOptions: {
      sort: 'high' | 'low';
      cursor: number;
      symptomId: string;
    } = {
      sort: 'high',
      cursor: 100000,
      symptomId: symptom.id,
    };

    const result = await searchDisease(searchOptions);
    return setSearchResult(result.data);
  };

  return (
    <Modal type={MODAL_TYPE.INFO_SEARCH_DISEASE} variant={MODAL_VARIANT.SLIDE}>
      <Modal.Header
        title=''
        titleType='left-X'
        onClick={() => {
          setSearch('');
          setSymptoms(null);
        }}
      />
      <div className='px-5'>
        <h3 className='text-grayColor-900 text-title3 font-semibold py-3 leading-normal'>
          <span className='text-primary-500'>질병 사전</span>에 대해
          <br />
          궁금한 내용을 검색해주세요
        </h3>
        <form onSubmit={(e) => handleSubmit(e)}>
          <Input name='search' className='py-4'>
            <Input.TextInput
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                if (e.target.value === '') {
                  setSymptoms(null);
                }
                setSearchResult(null);
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
          {searchResult === null &&
            symptoms !== null &&
            symptoms.map((symptom) => (
              <RecommendSearchResult
                key={symptom.id}
                symptom={symptom}
                onClick={(value) => handleClickSymptom(value)}
              />
            ))}
          {searchResult !== null &&
            (searchResult.length > 0 ? (
              searchResult.map((result: DiseaseProps) => (
                <SearchResult key={result.id} data={result} />
              ))
            ) : (
              <NoResult search={search} />
            ))}
        </ul>
      </div>
    </Modal>
  );
};

export default DiseaseSearchModal;

const RecommendSearchResult = ({
  symptom,
  onClick,
}: {
  symptom: { id: string; symptom: string };
  onClick: (value: { id: string; symptom: string }) => void;
}) => {
  return (
    <li
      onClick={() => onClick(symptom)}
      className='cursor-pointer py-4 border-b border-extra-deviders text-body2 text-text-primary'
    >
      {symptom.symptom}
    </li>
  );
};

const SearchResult = ({ data }: { data: DiseaseProps }) => {
  const { removeModal } = useModal();
  return (
    <li>
      <Link
        onClick={() => removeModal()}
        href={`/info/disease/${data.id}`}
        className='cursor-pointer py-4 border-b border-extra-deviders flex flex-col gap-2 justify-start items-start'
      >
        <h3 className='text-subTitle2 font-semibold text-text-title'>
          {data.diagnosisName}
        </h3>
        <p className='inline-block text-body2 text-text-primary'>
          {data.symptoms[0].symptom}
        </p>
        <div className='flex items-center gap-2 text-caption2 font-medium text-text-primary'>
          <span>{data.petType === 'dog' ? '강아지' : '고양이'}</span>
          <Label>
            {data.riskLevel === '3'
              ? '위험'
              : data.riskLevel === '2'
                ? '주의'
                : '양호'}
          </Label>
        </div>
      </Link>
    </li>
  );
};
