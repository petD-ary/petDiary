'use client';

import { Fragment, useRef, useState } from 'react';

import BreadCrumbs from '@/components/Info/BreadCrumbs';
import Disease from '@/components/Info/Disease';
import GoTopBtn from '@/components/Info/GoTopBtn';
import Signal from '@/components/Info/Signal';
import RiskFood from '@/components/Info/RiskFood';
import SafeFood from '@/components/Info/SafeFood';

export type InfoTab = 'disease' | 'signal' | 'riskFood' | 'safeFood';

const Knowledge = () => {
  const [tab, setTab] = useState<InfoTab>('disease');

  const ref = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    ref.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Fragment>
      <BreadCrumbs isSelected={tab} setTab={(tab) => setTab(tab)} />
      <div
        className='w-full h-[calc(100%-108px)] overflow-y-scroll scrollbar-none'
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
