import { Body, Caption } from '@/constants/Typography/TypographyList';
import React from 'react';

const DocumentAmount = ({ amount }: { amount?: number }) => {
  return (
    <p className={`${Caption.caption1} text-text-primary`}>
      목록
      <span className={`${Body.body2} text-primary-500 pl-1`}>
        {amount ?? 0}
      </span>
    </p>
  );
};

export default DocumentAmount;
