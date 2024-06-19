'use client';
import React, { Fragment, useMemo } from 'react';
import ModalPetType from '../Modal/PetTypeModal';
import { useRecoilValue } from 'recoil';
import { alignState, filterState } from '@/recoil/Info/atoms';
import { MODAL_TYPE } from '@/components/Modal';
import Filter from '../Filter';
import Align from '../Align';
import ModalRisk from '../Modal/RiskModal';
import { useDisease } from '@/hooks/queries/useKnowledge';
import Link from 'next/link';
import Label from '@/components/Label';
import useIntersectionObserver from '@/hooks/util/useIntersectionObserver';

export interface DiseaseProps {
  id: number;
  createdAt: string;
  cause: string;
  diagnosisName: string;
  managementNecessity: '높음' | '보통' | '낮음';
  petType: 'dog' | 'cat';
  prevention: string;
  recommendedNutrients: string;
  riskLevel: '3' | '2' | '1';
  summary: string;
  symptoms: { id: number; symptom: string }[];
  treatment: string;
  updatedAt: string;
  vulnerableBreed: string;
}

const Disease = () => {
  const { petType } = useRecoilValue(filterState);
  const { risk } = useRecoilValue(alignState);
  const { data, isLoading, hasNextPage, isFetching, fetchNextPage } =
    useDisease({
      petType,
      risk,
    });

  const diseaseData = useMemo(() => {
    const result = data?.pages.flatMap((doc) => (doc ? [...doc.data] : []));
    return result;
  }, [data]);

  const target = useIntersectionObserver((entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNextPage && !isFetching) fetchNextPage();
  });

  return (
    <Fragment>
      <ModalPetType />
      <ModalRisk />
      <div className='flex justify-between items-center pt-3 px-5 md:pt-5 md:pb-2'>
        <Filter modalType={MODAL_TYPE.INFO_FILTER_PET_TYPE} filter='petType' />
        <Align modalType={MODAL_TYPE.INFO_FILTER_RISK} align='risk' />
      </div>

      <div className='last:[&_>_div]:border-none pb-2'>
        {!isLoading &&
          diseaseData?.map((data: DiseaseProps) => (
            <Link
              href={`/info/disease/${data.id}`}
              key={data.id}
              className='cursor-pointer mx-5 py-4 border-b border-extra-deviders flex flex-col gap-2'
            >
              <h3 className='text-subTitle2 font-semibold text-text-title'>
                {data.diagnosisName}
              </h3>
              <p className='text-body2 text-text-secondary'>{data.summary}</p>
              <div className='flex items-center gap-2 text-caption2 font-medium text-text-primary'>
                <span>{data.petType === 'dog' ? '강아지' : '고양이'}</span>
                <Label
                  variant={
                    data.riskLevel === '3'
                      ? 'red'
                      : data.riskLevel === '2'
                        ? 'blue'
                        : 'green'
                  }
                >
                  {data.riskLevel === '3'
                    ? '위험'
                    : data.riskLevel === '2'
                      ? '주의'
                      : '양호'}
                </Label>
              </div>
            </Link>
          ))}
        <div ref={target} />
      </div>
    </Fragment>
  );
};

export default Disease;
