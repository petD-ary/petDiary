import { Body, Caption } from '@/constants/Typography/TypographyList';
import {
  calculateElapsedDays,
  calculateRemainingDays,
} from '@/utils/calculateDay';
import Image from 'next/image';
import born from '@/assets/images/profile/birth.png';
import birth from '@/assets/images/profile/born.png';
import together from '@/assets/images/profile/together.png';

const dDayIconList = [
  { type: 'born', icon: born, desc: '생일' },
  { type: 'birth', icon: birth, desc: '태어난지' },
  { type: 'together', icon: together, desc: '함께한지' },
];

const DDayIcon = ({
  type,
  dDay,
}: {
  type: 'born' | 'birth' | 'together';
  dDay: string;
}) => {
  const iconType = dDayIconList.filter((icon) => icon.type === type)[0];
  const dDayCalc = (date: string) => {
    if (type === 'born') return `D-${calculateRemainingDays(date)}`;
    if (type === 'birth' || type === 'together')
      return `${calculateElapsedDays(date)}일`;
  };

  return (
    <div className='text-center py-[6px] w-20 flex flex-col items-center'>
      <Image src={iconType.icon} alt='profile' width={44} height={44} />
      <p className={`${Caption.caption2} text-gray-500 pt-2 pb-[2px]`}>
        {iconType.desc}
      </p>
      <div className={`${Body.body2}`}>{dDayCalc(dDay)}</div>
    </div>
  );
};

export default DDayIcon;
