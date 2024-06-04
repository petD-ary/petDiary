import { useEffect, useMemo, useState } from 'react';
import Modal, { MODAL_TYPE, MODAL_VARIANT } from '@/components/Modal';
import Input from '@/components/Input';
import IconSearch from '@/assets/images/icon-search.svg';
import useGeolocation from '@/hooks/util/useGeolocation';
import useIntersectionObserver from '@/hooks/util/useIntersectionObserver';
import useSearchPlace from '@/hooks/queries/useSearchPlace';
import MapComponent from '@/components/Map';
import CustomPin from '@/components/Map/CustomPin';
import { highlight } from '@/utils/highlight';
import { useModal } from '@/hooks/view/useModal';
import { SCHEDULE_TYPE } from '../constants';
import { useRecoilState } from 'recoil';
import { scheduleFormState } from '@/recoil/Schedule/atom';
import useDebounceSearch from '@/hooks/util/useDebounceSearch';

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

const ScheduleLocationModal = () => {
  const geolocation = useGeolocation();
  const { removeModal } = useModal();
  const [searchValue, setSearchValue] = useState<string>('');
  const [schedule, setSchedule] = useRecoilState(scheduleFormState);
  const [selectedPin, setSelectedPin] = useState<null | string>(null);

  const debouncedSearch = useDebounceSearch(searchValue, 100);

  const { data, fetchNextPage, hasNextPage, isFetching } = useSearchPlace({
    geolocation: geolocation.position,
    search: debouncedSearch,
  });

  const placeData = useMemo(() => {
    const result = data
      ? data.pages.flatMap((doc) => (doc ? doc.documents : []))
      : [];
    return result;
  }, [data, selectedPin]);

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
      lat: Number(place.x),
      lng: Number(place.y),
    });
    setSearchValue('');
    setSelectedPin(null);
    removeModal();
  };

  return (
    <Modal type={MODAL_TYPE.SCHEDULE_LOCATION} variant={MODAL_VARIANT.SLIDE}>
      <Modal.Header
        title='일정 위치 검색'
        titleType='left'
        onClick={() => {
          setSearchValue('');
          setSelectedPin(null);
        }}
      />
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
              <MapComponent onClick={() => setSelectedPin(null)}>
                {placeData.length > 0 &&
                  placeData?.map((placeData) => (
                    <CustomPin
                      key={placeData.id}
                      position={{
                        lat: Number(placeData?.y),
                        lng: Number(placeData?.x),
                      }}
                      onClick={() => setSelectedPin(placeData.id)}
                      isSelected={selectedPin === placeData.id}
                    />
                  ))}
              </MapComponent>
            </div>
          )}

          <ul className='[&>li]:last:border-b-0 h-full mb-5'>
            {placeData.map(
              ({ id, road_address_name, address_name, place_name, x, y }) =>
                selectedPin !== null ? (
                  selectedPin === id ? (
                    <li
                      key={id}
                      onClick={() => handleClickPlace({ x, y, place_name })}
                      className='flex flex-col gap-[6px] py-4 border-b border-extra-dividers cursor-pointer'
                    >
                      <div className='text-text-primary text-subTitle2 font-semibold'>
                        {highlight(searchValue, place_name)}
                      </div>
                      <div className='text-text-secondary text-body1 font-medium'>
                        {road_address_name ?? address_name}
                      </div>
                    </li>
                  ) : null
                ) : (
                  <li
                    key={id}
                    onClick={() => handleClickPlace({ x, y, place_name })}
                    className='flex flex-col gap-[6px] py-4 border-b border-extra-dividers cursor-pointer'
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
