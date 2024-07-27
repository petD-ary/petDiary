import React, { Fragment } from 'react';

import Filter from '../Filter';
import { MODAL_TYPE } from '@/components/Modal';
import SignalModal from '../Modal/SignalModal';
import SignalDepthModal from '../Modal/SignalDepthModal';
import { useRecoilValue } from 'recoil';
import { filterState } from '@/recoil/Info/atoms';
import Label from '@/components/Info/Label';
import Link from 'next/link';
import { useSignal } from '@/hooks/queries/useKnowledge';
import { SignalType } from '@/apis/info';
import Loading from '@/components/Loading';
import GoToSearch from '../Modal/SearchModal/GoToSearch';

export interface SignalProps {
  id: number;
  title: {
    [key: string]: string;
  };
  summary: {
    [key: string]: string;
  };
  tag: { [key: string]: string }[] | null;
  type: SignalType;
  createdAt: string;
  updatedAt: string;
  content:
    | {
        [key: string]: string;
      }[]
    | null;
}

const Signal = () => {
  const { signal, signalDepth } = useRecoilValue(filterState);
  const { data, isLoading } = useSignal({
    type: signal === 'poop' ? `${signal}${signalDepth}` : signal,
  });

  if (isLoading && !data)
    return (
      <div className='bg-extra-device-bg h-full flex justify-center items-center'>
        <Loading />
      </div>
    );

  return (
    <Fragment>
      <SignalModal />
      <SignalDepthModal />
      <div className='pt-3 px-5 md:pt-5 md:pb-2'>
        <div className='flex gap-3 items-center pb-4'>
          <Filter modalType={MODAL_TYPE.INFO_FILTER_SIGNAL} filter='signal' />
          {signal === 'poop' && (
            <Filter
              modalType={MODAL_TYPE.INFO_FILTER_SIGNAL_DEPTH}
              filter='signalDepth'
            />
          )}
        </div>
        <GoToSearch tab='signal' />
      </div>

      <div className='last:[&_>_div]:border-none'>
        {!isLoading &&
          data?.map((data: SignalProps) => {
            const tags = data.tag?.filter(
              (item) => Object.keys(item)[0] !== '반려동물 타입',
            );
            const petType = data.tag?.filter(
              (item) => Object.keys(item)[0] === '반려동물 타입',
            )[0];
            return (
              <Link
                href={`/info/signal/${data.id}`}
                key={data.id}
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
                  {tags ? (
                    <Label>{tags[0][Object.keys(tags[0])[0]]}</Label>
                  ) : null}
                </div>
              </Link>
            );
          })}
      </div>
    </Fragment>
  );
};

export default Signal;
