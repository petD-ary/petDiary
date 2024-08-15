import React from 'react';
import IconDiease from '@/assets/images/info/icon-diease.svg';
import IconAction from '@/assets/images/info/icon-action.svg';
import IconDanger from '@/assets/images/info/icon-danger.svg';
import IconSafe from '@/assets/images/info/icon-safe.svg';
import { InfoTab } from '@/(home)/info/page';

interface InfoBreadcrumbs {
  type: 'disease' | 'signal' | 'riskFood' | 'safeFood';
  Icon: any;
  desc: string;
}

const BreadCrumbs = ({
  isSelected,
  setTab,
}: {
  isSelected: InfoTab | string;
  setTab: (tab: InfoTab | string) => void;
}) => {
  const infoBreadcrumbs: InfoBreadcrumbs[] = [
    { type: 'disease', Icon: IconDiease, desc: '질병 사전' },
    { type: 'signal', Icon: IconAction, desc: '행동 신호' },
    { type: 'riskFood', Icon: IconDanger, desc: '위험 음식' },
    { type: 'safeFood', Icon: IconSafe, desc: '안심 음식' },
  ];

  return (
    <div className='bg-extra-device-bg py-5 px-10 flex justify-between md:px-28'>
      {infoBreadcrumbs.map(({ type, Icon, desc }) => (
        <div
          key={desc}
          className='flex flex-col justify-center gap-1 cursor-pointer'
          onClick={() => setTab(type)}
        >
          <div
            className={`border bg-white rounded-lg
            w-12 h-12 flex justify-center items-center
            ${isSelected === type ? 'border-primary-500' : 'border-extra-border'}`}
          >
            <Icon />
          </div>
          <span
            className={`text-caption1 font-semibold ${isSelected === type ? 'text-text-primary' : 'text-text-secondary'}`}
          >
            {desc}
          </span>
        </div>
      ))}
    </div>
  );
};

export default BreadCrumbs;
