import React from 'react';
import Image from 'next/image';
import normal from '@/assets/images/status/normal.png';
import bad from '@/assets/images/status/bad.png';
import veryBad from '@/assets/images/status/veryBad.png';
import IconInfo from '@/assets/images/Icon-info.svg';
import { Caption, Title } from '@/constants/Typography/TypographyList';
import { useModal } from '@/hooks/useModal';
import { MODAL_TYPE } from '@/components/Modal';
import WalkingInfoModal from './WalkingInfoModal';
type walkData = {
  state: string;
  img: string;
};
interface CardType {
  weather: walkData;
}

const WalkingIndex: React.FC<CardType> = ({ weather }) => {
  const { addModal } = useModal();

  let imageSrc;
  switch (weather.img) {
    case 'bad.png':
      imageSrc = bad;
      break;
    case 'veryBad.png':
      imageSrc = veryBad;
      break;
    default:
      imageSrc = normal;
  }
  return (
    <div className='bg-white flex flex-col w-full rounded-xl p-4 '>
      <WalkingInfoModal />
      <div className='flex flex-row justify-between '>
        <div className=''>
          <div className={`${Caption.caption2} mb-1`}>산책지수</div>
          <div className={`${Title.title3}`}>{weather.state}</div>
        </div>
        <div onClick={() => addModal(MODAL_TYPE.WALKING_INFO)}>
          <IconInfo />
        </div>
      </div>
      <div className='relative flex justify-end'>
        <Image
          style={{
            objectFit: 'cover',
          }}
          src={imageSrc}
          width={44}
          height={44}
          alt={'weatherimoji'}
        />
      </div>
    </div>
  );
};

export default WalkingIndex;
