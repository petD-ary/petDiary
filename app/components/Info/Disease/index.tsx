'use client';
import React, { Fragment } from 'react';
import ModalPetType from '../Filter/Modal/ModalPetType';
import { useRecoilState } from 'recoil';
import { filterState } from '@/recoil/Info/atoms';
import { MODAL_TYPE } from '@/components/Modal';
import Filter from '../Filter';
import Align from '../Align';
import ModalRisk from '../Filter/Modal/ModalRisk';
import { useDisease } from '@/hooks/queries/useKnowledge';
import Link from 'next/link';

interface DiseaseProps {
  id: number;
  createdAt: string;
  cause: string;
  diagnosisName: string;
  managementNecessity: '높음' | '낮음';
  petType: '강아지' | '고양이';
  prevention: string;
  recommendedNutrients: string;
  riskLevel: '높음' | '낮음';
  summary: string;
  symptons: { id: number; sympton: string }[];
  treatment: string;
  updatedAt: string;
  vulnerableBreed: string;
}

const Disease = () => {
  const [filter, setFilter] = useRecoilState(filterState);
  const { data, isLoading } = useDisease();

  return (
    <Fragment>
      <ModalPetType />
      <ModalRisk />
      <div className='flex justify-between items-center pt-3 px-5 md:pt-5 md:pb-2'>
        <Filter modalType={MODAL_TYPE.INFO_FILTER_PET_TYPE} filter='petType' />
        <Align modalType={MODAL_TYPE.INFO_FILTER_RISK} align='risk' />
      </div>

      <div className='last:[&_>_div]:border-none'>
        {!isLoading &&
          data?.map((data: DiseaseProps) => (
            <Link
              href={`/info/disease/${data.id}`}
              key={data.id}
              className='cursor-pointer mx-5 py-4 border-b border-extra-deviders flex flex-col gap-2'
            >
              <h3 className='text-subTitle2 font-semibold text-text-title'>
                {data.diagnosisName}
              </h3>
              <p className='text-body2 text-text-secondary'>{data.summary}</p>
              <div className='flex items-center gap-1 text-caption2 font-medium text-text-primary'>
                <span>{data.petType}</span>
                <span>·</span>
                <span
                  className={`rounded px-1 py-[2px] ${data.riskLevel === '높음' ? 'bg-error/5 text-error' : 'bg-success/5 text-success'}`}
                >
                  {data.riskLevel}
                </span>
              </div>
            </Link>
          ))}
      </div>
    </Fragment>
  );
};

export default Disease;
