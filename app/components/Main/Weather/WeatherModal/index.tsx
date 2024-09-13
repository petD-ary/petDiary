import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/Modal';
import { DataState } from '../index';
import Image from 'next/image';
import { SubTitle, Title } from '@/constants/Typography/TypographyList';

const WeatherModal = ({ data }: { data?: DataState }) => {
  if (!data) return;
  return (
    <Modal type={MODAL_TYPE.WEATHER} variant={MODAL_VARIANT.CARD}>
      <Modal.Header title='오늘의 날씨' titleType='left-X' />

      <div className='px-5 py-6 flex justify-between items-center'>
        <div className='relative w-20 h-20 bg-grayColor-100 rounded-2xl'>
          <Image fill src={data?.icon} alt='오늘의 날씨 아이콘' />
        </div>

        <div className='flex flex-col items-end gap-2'>
          <h4 className={`${Title.title2} text-text-title`}>
            <span className='pr-2'>{data.temp.main}</span>
            {data.weather}
          </h4>
          <div className='flex gap-2'>
            <p className={`text-text-secondary ${SubTitle.subTitle2}`}>
              <span>최저 </span>
              {data.temp.min}
            </p>
            <p className={`text-text-secondary ${SubTitle.subTitle2}`}>
              <span>최고 </span>
              {data.temp.max}
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default WeatherModal;
