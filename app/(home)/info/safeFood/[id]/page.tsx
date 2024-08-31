'use client';
import React from 'react';

import Loading from '@/components/Loading';
import { useFoodDetail } from '@/hooks/queries/useKnowledge';
import Label from '@/components/Info/Label';

const SafeFoodDetailPage = ({ params: { id } }: { params: { id: number } }) => {
  const { data, isLoading } = useFoodDetail(id);
  if (isLoading && !data)
    return (
      <div className='bg-extra-device-bg h-full flex justify-center items-center'>
        <Loading />
      </div>
    );

  if (data)
    return (
      <div className='bg-extra-device-bg h-full overflow-y-scroll scrollbar-none'>
        <div className='pt-5 px-5 bg-white mb-2'>
          <div className='py-4'>
            <h3 className='text-title2 font-semibold text-text-title'>
              {data.title[Object.keys(data.title)[0]]}
            </h3>
            <p className='text-body2 font-medium text-text-primary py-3'>
              {data.summary[Object.keys(data.summary)[0]]}
            </p>
            <div className='flex items-center gap-2 text-caption2 font-medium text-text-primary'>
              <span>{data.petType}</span>
              {data.tag ? (
                <Label>{data.tag[Object.keys(data.tag)[0]]}</Label>
              ) : null}
            </div>
          </div>
        </div>

        <div className='bg-white px-5 last:[&_>_div]:border-none'>
          {/* {data.content &&
            data.content.map((content) => (
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
            ))} */}
        </div>
      </div>
    );
};

export default SafeFoodDetailPage;
