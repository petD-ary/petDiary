import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/Modal';
import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { SCHEDULE_TYPE, ScheduleState } from '../AddScheduleModal';
import Input from '@/components/Input';
import IconSearch from '@/assets/images/icon-search.svg';
import { getSearchPlace } from '@/api/map';
import useGeolocation from '@/hooks/useGeolocation';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';

interface ScheduleLocationModalProps {
  schedule: ScheduleState;
  setSchedule: (e: any) => void;
}

export interface PlaceListState {
  documents: {
    id: string;
    place_name: string;
    address_name: string;
    road_address_name: string;
    x: string;
    y: string;
  }[];
  meta: {
    is_end: boolean;
    pageable_count: number;
    total_count: number;
  };
}

const ScheduleLocationModal = ({
  schedule,
  setSchedule,
}: ScheduleLocationModalProps) => {
  const geolocation = useGeolocation();
  const target = useRef(null);

  const [page, setPage] = useState(1);
  const [placeList, setPlaceList] = useState<PlaceListState>();
  console.log('🚀 ~ placeList:', placeList);

  const [observe, unobserve] = useIntersectionObserver(() =>
    setPage((prev) => prev + 1),
  );

  const handleSearchLocation = async (e: FormEvent) => {
    e.preventDefault();

    if (!geolocation?.position) return alert('위치 제공을 활성화해주세요');

    if (schedule.address === '') return;

    const response = await getSearchPlace(
      geolocation.position,
      schedule.address,
      page,
    );

    response && setPlaceList(response);
  };

  useEffect(() => {
    if (page === 1) observe(target);

    const N = placeList?.documents?.length;
    // const totalCount = placeList?.totalCount;

    // if (0 === N || totalCount <= N) {
    //   unobserve(target);
    // }
  }, [placeList]);

  return (
    <Modal type={MODAL_TYPE.SCHEDULE_LOCATION} variant={MODAL_VARIANT.SLIDE}>
      <Modal.Header title='일정 위치 검색' titleType='left' />
      <form
        onSubmit={(e) => handleSearchLocation(e)}
        className='px-5 py-4 bg-white'
      >
        <Input name={SCHEDULE_TYPE.ADDRESS}>
          <Input.TextInput
            placeholder='위치를 검색해 주세요'
            value={schedule.address}
            onChange={(e) => setSchedule(e)}
          />
          <button className='absolute right-4 top-4'>
            <IconSearch />
          </button>
        </Input>
      </form>
      <div className='bg-extra-divice-bg w-full h-[calc(100%-198px)]'>
        {/* <MapComponent /> */}
        <ul className='bg-white px-5 last:[&>li]:border-b-0 h-full overflow-y-scroll scrollbar-none'>
          {placeList &&
            placeList?.documents?.map(
              ({ id, road_address_name, address_name, place_name, x, y }) => (
                <li
                  key={id}
                  className='flex flex-col gap-[6px] py-4 border-b border-extra-dividers '
                >
                  <div className='text-text-primary text-subTitle2 font-semibold'>
                    {place_name}
                  </div>
                  <div className='text-text-secondary text-body1 font-medium'>
                    {road_address_name ?? address_name}
                  </div>
                </li>
              ),
            )}
          <div ref={target}></div>
        </ul>
      </div>
    </Modal>
  );
};

export default ScheduleLocationModal;
