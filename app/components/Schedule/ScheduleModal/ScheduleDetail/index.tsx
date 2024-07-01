import React from 'react';

import IconClipboard from '@/assets/images/schedule/icon_clipboard.svg';
import { Body, Caption } from '@/constants/Typography/TypographyList';
import { formatDateToYYMMDD } from '@/utils/dateFormat';
import { convertKST, getHours } from '@/utils/calculateDay';
import { repeatList } from '../../constants';
import CustomPin from '@/components/Map/CustomPin';
import { useModal } from '@/hooks/view/useModal';
import useToast from '@/hooks/view/useToast';
import MapComponent from '@/components/Map';
import { MODAL_TYPE } from '@/components/Modal';
import ScheduleTag from '../ScheduleTag';
import Button from '@/components/Button';
import { TransformedScheduleData } from '../../type';

const ScheduleDetail = ({
  schedule,
  handleEditData,
}: {
  schedule: TransformedScheduleData;
  handleEditData: (schedule: TransformedScheduleData) => void;
}) => {
  const { addModal } = useModal();
  const { setToasts } = useToast();

  const handleCopyClipBoard = async (address: string) => {
    try {
      await navigator.clipboard.writeText(address);
      setToasts('클립보드에 링크가 복사되었습니다.');
    } catch (e) {
      setToasts('클립보드에 링크 복사를 실패했습니다.');
    }
  };
  return (
    <div className='flex mb-1 bg-white' key={schedule.id}>
      <div className='px-5 py-6 w-full'>
        <div className={`mb-4 flex`}>
          <div className='w-full'>
            <div className={`${Body.body2} mb-3`}>
              <span className='w-[18px] inline-block text-center'>•</span>
              <span>{schedule.title}</span>
            </div>

            {schedule.memo !== '' && (
              <div className={`${Body.body4} ms-[18px]`}>{schedule.memo}</div>
            )}
          </div>

          <div>
            <Button
              className={`${Caption.caption1} py-[6px] px-3 !rounded-full text-nowrap`}
              children={'수정'}
              variant={'blueContained'}
              onClick={() => {
                handleEditData(schedule);
                addModal(MODAL_TYPE.SCHEDULE_EDIT);
              }}
            />
          </div>
        </div>

        <div className='flex gap-3 items-center ms-[18px] mb-5'>
          {/* 시간 설정 */}
          <ScheduleTag variant='secondary'>
            {formatDateToYYMMDD(convertKST(schedule.startTime)) +
              '-' +
              formatDateToYYMMDD(convertKST(schedule.endTime))}
          </ScheduleTag>
          {/* 반복 여부 */}
          <ScheduleTag variant='primary'>
            {schedule.isAllDay
              ? '하루 종일'
              : `${schedule.isStartDay ? getHours(schedule.startTime) : ''} ~ ${schedule.isEndDay ? getHours(schedule.endTime) : ''}`}
          </ScheduleTag>
          <ScheduleTag variant='grayScale'>
            {repeatList.find((item) => item.key === schedule.repeat)?.content ||
              '반복 안함'}
          </ScheduleTag>
        </div>

        {schedule.lat && schedule.lng ? (
          <>
            <MapComponent position={{ lat: schedule.lat, lng: schedule.lng }}>
              <CustomPin
                isSelected
                position={{ lat: schedule.lat, lng: schedule.lng }}
              />
            </MapComponent>
            <div className='flex justify-between pt-4'>
              <div className='flex flex-grow flex-col gap-[6px]'>
                <h4 className={`${Caption.caption1}`}>{schedule.place}</h4>
                <p className={`${Caption.caption2} text-text-secondary`}>
                  {schedule.address}
                </p>
              </div>
              <div
                className='cursor-pointer border border-extra-border hover:border-extra-active active:border-extra-active
                        active:bg-grayColor-10 bg-white
                      rounded-md p-2 transition-colors'
                onClick={() => handleCopyClipBoard(schedule.address)}
              >
                <IconClipboard />
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default ScheduleDetail;
