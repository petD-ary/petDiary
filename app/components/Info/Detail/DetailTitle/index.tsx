'use client';
import React from 'react';
interface DetailTitleProps {
  title: string;
  summary: string;
  type: string;
  tag: string;
}

const DetailTitle = ({ title, summary, type, tag }: DetailTitleProps) => {
  return (
    <div className='pt-5 px-5 bg-white'>
      <div className='py-4'>
        <h3 className='text-title2 font-semibold text-text-title'>{title}</h3>
        <p className='text-body2 font-medium text-text-primary py-3'>
          {summary}
        </p>
        <div className='flex items-center gap-1 text-caption2 font-medium text-text-primary'>
          <span>{type}</span>
          <span>·</span>
          <span
            className={`rounded px-1 py-[2px] ${tag === '높음' ? 'bg-error/5 text-error' : 'bg-success/5 text-success'}`}
          >
            위험도 {tag}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DetailTitle;
