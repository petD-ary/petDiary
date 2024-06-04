import Label from '@/components/Label';
import React from 'react';
interface DetailTitleProps {
  title: string;
  summary: string;
  type: string;
  tag: '높음' | '보통' | '낮음';
}

const DetailTitle = ({ title, summary, type, tag }: DetailTitleProps) => {
  return (
    <div className='pt-5 px-5 bg-white mb-2'>
      <div className='py-4'>
        <h3 className='text-title2 font-semibold text-text-title'>{title}</h3>
        <p className='text-body2 font-medium text-text-primary py-3'>
          {summary}
        </p>
        <div className='flex items-center gap-2 text-caption2 font-medium text-text-primary'>
          <span>{type}</span>
          <Label
            variant={tag === '높음' ? 'red' : tag === '보통' ? 'blue' : 'green'}
          >
            위험도 {tag}
          </Label>
        </div>
      </div>
    </div>
  );
};

export default DetailTitle;
