'use client';
import React from 'react';

import Loading from '@/components/Loading';
import { useSignalDetail } from '@/hooks/queries/useKnowledge';
import Label from '@/components/Info/Label';

const SignalDetailPage = ({ params: { id } }: { params: { id: number } }) => {
  const { data: signal, isLoading } = useSignalDetail(id);

  if (isLoading && !signal)
    return (
      <div className='bg-extra-device-bg h-full flex justify-center items-center'>
        <Loading />
      </div>
    );

  if (signal)
    return (
      <div className='bg-extra-device-bg h-full overflow-y-scroll scrollbar-none'>
        <div className='pt-5 px-5 bg-white mb-2'>
          <div className='py-4'>
            <h3 className='text-title2 font-semibold text-text-title'>
              {signal.title[Object.keys(signal.title)[0]]}
            </h3>
            <p className='text-body2 font-medium text-text-primary py-3'>
              {signal.summary[Object.keys(signal.summary)[0]]}
            </p>
            <div className='flex items-center gap-2 text-caption2 font-medium text-text-primary'>
              {/* <span>{type === 'dog' ? '강아지' : '고양이'}</span> */}
              {signal.tag ? (
                <Label>{signal.tag[0][Object.keys(signal.tag[0])[0]]}</Label>
              ) : null}
            </div>
          </div>
        </div>

        <div className='bg-white px-5 last:[&_>_div]:border-none'>
          {signal.content &&
            signal.content.map((content) => (
              <div
                key={Object.keys(content)[0]}
                className='border-b border-extra-deviders py-4'
              >
                <h4 className='text-button font-semibold text-text-title pb-2'>
                  {Object.keys(content)[0]}
                </h4>
                <p className='text-body2 text-text-secondary'>
                  {content[Object.keys(content)[0]]}
                </p>
              </div>
            ))}
        </div>
      </div>
    );
};

export default SignalDetailPage;
