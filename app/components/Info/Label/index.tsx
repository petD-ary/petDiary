'use client';
import React, { ReactNode } from 'react';

const Label = ({ children }: { children?: ReactNode }) => {
  const variantOptions = [
    { red: ['3', '높음', '마른 상태', '부족', '비만', '초과', '위험', '빠름'] },
    { green: ['1', '양호', '이상적', '적정', '권장', '손질 필수'] },
    { yellow: ['저체중', '느림'] },
    { blue: ['2', '주의', '필수', '조리 필수'] },
    { magenta: ['과체중', '다소 과다'] },
  ];

  const variant =
    variantOptions.find((obj) => {
      return Object.values(obj).some((arr) => arr.includes(children));
    }) ?? 'red';

  return (
    <span
      className={`inline-block rounded px-1 py-[2px] text-caption2 font-medium
  ${Object.keys(variant)[0] === 'red' && 'bg-error/5 text-error'}
  ${Object.keys(variant)[0] === 'green' && 'bg-success/5 text-success'}
  ${Object.keys(variant)[0] === 'yellow' && 'bg-accent/5 text-accent'}
  ${Object.keys(variant)[0] === 'blue' && 'bg-secondary-500/5 text-secondary-500'}
  ${Object.keys(variant)[0] === 'magenta' && 'bg-accent2/5 text-accent2'}
  `}
    >
      {children}
    </span>
  );
};

export default Label;
