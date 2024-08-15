'use client';

import { Fragment, useEffect, useRef, useState } from 'react';

import BreadCrumbs from '@/components/Info/BreadCrumbs';
import Disease from '@/components/Info/Disease';
import GoTopBtn from '@/components/Info/GoTopBtn';
import Signal from '@/components/Info/Signal';
import RiskFood from '@/components/Info/RiskFood';
import SafeFood from '@/components/Info/SafeFood';
import { useResetRecoilState } from 'recoil';
import { alignState, filterState } from '@/recoil/Info/atoms';
import useDebounceSearch from '@/hooks/util/useDebounceSearch';

export type InfoTab = 'disease' | 'signal' | 'riskFood' | 'safeFood';

const Knowledge = () => {
  const [tab, setTab] = useState<InfoTab | string>('');
  const resetFilter = useResetRecoilState(filterState);
  const resetAlign = useResetRecoilState(alignState);

  const debounceTab = useDebounceSearch(tab, 500);

  useEffect(() => {
    resetFilter();
    resetAlign();
  }, [debounceTab]);

  useEffect(() => {
    const savedTab = sessionStorage.getItem('tab') ?? 'disease';
    setTab(() => savedTab);
  }, []);

  useEffect(() => {
    if (tab !== '') {
      sessionStorage.setItem('tab', tab);
    }
  }, [tab]);

  const ref = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    ref.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Fragment>
      <BreadCrumbs isSelected={tab} setTab={(tab) => setTab(tab)} />
      <div
        className='w-full h-[calc(100%-104px)] overflow-y-scroll scrollbar-none'
        ref={ref}
      >
        {tab === 'disease' && <Disease />}
        {tab === 'signal' && <Signal />}
        {tab === 'riskFood' && <RiskFood />}
        {tab === 'safeFood' && <SafeFood />}
      </div>
      <GoTopBtn onClick={scrollToTop} />
    </Fragment>
  );
};

export default Knowledge;
