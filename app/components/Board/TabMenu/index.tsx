'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

interface ChangePageBtnProps {
  tabList: { id: number; title: string }[];
  selected: string;
  setSelected: (value: string) => void;
}

const TabMenu = ({ tabList, selected, setSelected }: ChangePageBtnProps) => {
  return (
    <div className={`flex gap-2 mb-3`}>
      {tabList.map((tab) => (
        <div
          onClick={() => {
            setSelected(tab.title);
          }}
          key={tab.id}
          className={`px-5 py-3 border rounded-lg flex-1 ${
            selected === tab.title
              ? ' border-black bg-grayColor-100'
              : 'border-grayColor-200'
          }`}
        >
          {tab.title}
        </div>
      ))}
    </div>
  );
};

export default TabMenu;
