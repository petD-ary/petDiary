import { useMemo, useState } from 'react';
import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/Modal';
import Input from '@/components/Input';
import IconSearch from '@/assets/images/icon-search.svg';
import useGeolocation from '@/hooks/useGeolocation';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import useSearchPlace from '@/api/useSearchPlace';
import MapComponent from '@/components/Map';
import CustomPin from '@/components/Map/CustomPin';
import { highlight } from '@/utils/highlight';
import { useModal } from '@/hooks/useModal';
import { SCHEDULE_TYPE } from '../../Schdule/constants';
import { ScheduleState } from '../../Schdule/type';

interface ScheduleLocationModalProps {
  schedule: ScheduleState;
  setSchedule: (e: any) => void;
}

interface DocumentType {
  id: string;
  place_name: string;
  address_name: string;
  road_address_name: string;
  x: string;
  y: string;
}

export interface PlaceListState {
  documents: DocumentType[];
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
  const { removeModal } = useModal();
  const [searchValue, setSearchValue] = useState<string>('');

  const { data, fetchNextPage, hasNextPage, isFetching } = useSearchPlace({
    geolocation: geolocation.position,
    search: searchValue,
  });

  const placeData = useMemo(
    () => (data ? data.pages.flatMap((doc) => (doc ? doc.documents : [])) : []),
    [data],
  );

  const target = useIntersectionObserver((entry, observer) => {
    observer.unobserve(entry.target);

    if (hasNextPage && !isFetching) fetchNextPage();
  });

  const handleClickPlace = (place: {
    x: string;
    y: string;
    place_name: string;
  }) => {
    setSchedule({
      ...schedule,
      address: place.place_name,
      lat: place.x,
      lng: place.y,
    });
    setSearchValue('');
    removeModal();
  };

  return (
    <Modal type={MODAL_TYPE.SCHEDULE_LOCATION} variant={MODAL_VARIANT.SLIDE}>
      <Modal.Header title='일정 위치 검색' titleType='left' />
      <form onSubmit={(e) => e.preventDefault()} className='px-5 py-4 bg-white'>
        <Input name={SCHEDULE_TYPE.ADDRESS}>
          <Input.TextInput
            placeholder='위치를 검색해 주세요'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button className='absolute right-4 top-4'>
            <IconSearch />
          </button>
        </Input>
      </form>

      <div className='bg-extra-device-bg w-full h-full overflow-y-scroll scrollbar-none'>
        <div className='bg-white px-5'>
          {placeData.length > 0 && (
            <div className='pb-3'>
              <MapComponent>
                {placeData.length > 0 &&
                  placeData?.map((placeData) => (
                    <CustomPin
                      key={placeData.id}
                      position={{
                        lat: Number(placeData?.y),
                        lng: Number(placeData?.x),
                      }}
                    />
                  ))}
              </MapComponent>
            </div>
          )}

          <ul className='[&>li]:last:border-b-0 h-full mb-5'>
            {placeData &&
              placeData.map(
                ({ id, road_address_name, address_name, place_name, x, y }) => (
                  <li
                    key={id}
                    onClick={() => handleClickPlace({ x, y, place_name })}
                    className='flex flex-col gap-[6px] py-4 border-b border-extra-dividers '
                  >
                    <div className='text-text-primary text-subTitle2 font-semibold'>
                      {highlight(searchValue, place_name)}
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
      </div>
    </Modal>
  );
};

export default ScheduleLocationModal;
