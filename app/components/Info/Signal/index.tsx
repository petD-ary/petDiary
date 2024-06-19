import React, { Fragment } from 'react';
import Filter from '../Filter';
import { MODAL_TYPE } from '@/components/Modal';
import RiskModal from '../Modal/RiskModal';
import SignalModal from '../Modal/SignalModal';
import SignalDepthModal from '../Modal/SignalDepthModal';
import { useRecoilValue } from 'recoil';
import { alignState, filterState } from '@/recoil/Info/atoms';
import Label from '@/components/Label';
import Link from 'next/link';
import Align from '../Align';

const Signal = () => {
  const { signal } = useRecoilValue(filterState);
  const { risk } = useRecoilValue(alignState);
  // const { data, isLoading } = useDisease({ petType, risk });
  return (
    <Fragment>
      <SignalModal />
      <SignalDepthModal />
      <RiskModal />
      <div className='flex justify-between items-center pt-3 px-5 md:pt-5 md:pb-2'>
        <div className='flex gap-3'>
          <Filter modalType={MODAL_TYPE.INFO_FILTER_SIGNAL} filter='signal' />
          {signal === 'poop' && (
            <Filter
              modalType={MODAL_TYPE.INFO_FILTER_SIGNAL_DEPTH}
              filter='signalDepth'
            />
          )}
        </div>
        <Align modalType={MODAL_TYPE.INFO_FILTER_RISK} align='risk' />
      </div>

      <div className='last:[&_>_div]:border-none'>
        {/* {!isLoading &&
          data?.map((data: DiseaseProps) => (
            <Link
              href={`/info/signal/${data.id}`}
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
                    data.riskLevel === '높음'
                      ? 'red'
                      : data.riskLevel === '보통'
                        ? 'blue'
                        : 'green'
                  }
                >
                  {data.riskLevel}
                </Label>
              </div>
            </Link>
          ))} */}
      </div>
    </Fragment>
  );
};

export default Signal;
