import React from 'react';
import Image from 'next/image';
import { Caption, Title } from '@/components/Typography/TypographyList';
import normal from '@/assets/images/status/normal.png';
import bad from '@/assets/images/status/bad.png';
import veryBad from '@/assets/images/status/veryBad.png';
import IconInfo from '@/assets/images/Icon-info.svg';
type weatherData = {
  state: string;
  img: string;
};
interface CardType {
  weather: weatherData;
}

const WeatherCard: React.FC<CardType> = ({ weather }) => {
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
    <div className='flex flex-col w-1/2 rounded-xl p-4 border'>
      <div className='flex flex-row justify-between '>
        <div className=''>
          <div className={`${Caption.caption2} mb-1`}>산책지수</div>
          <div className={`${Title.title3}`}>{weather.state}</div>
        </div>

        <IconInfo />
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

export default WeatherCard;
