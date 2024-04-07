'use client';

import { Body } from '@/constants/Typography/TypographyList';
import React, { useState } from 'react';

const Memo = () => {
  const [memoText, setMemoText] = useState('');

  const handleChange = (e: { target: { value: string } }) => {
    const inputText = e.target.value;
    if (inputText.length <= 100) {
      setMemoText(inputText);
    }
  };

  return (
    <div className='p-4 border text-text-secondary border-extra-border rounded-lg'>
      <textarea
        className='resize-none focus:outline-none'
        value={memoText}
        onChange={handleChange}
        placeholder='메모를 작성하세요 (최대 100자)'
        rows={4}
        cols={50}
      />
      <div className={` ${Body.body1} text-right`}>{memoText.length}/100</div>
    </div>
  );
};

export default Memo;
