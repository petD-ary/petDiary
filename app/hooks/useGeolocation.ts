'use client';
import { useEffect, useState } from 'react';

export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface PositionError {
  code: number;
  message: string;
}

export interface GeolocationState {
  position: Coordinates | null;
  error: PositionError | null;
}

const useGeolocation = () => {
  const [geolocation, setGeolocation] = useState<GeolocationState>({
    position: null,
    error: null,
  });

  const onSuccess = (position: GeolocationPosition) => {
    const { latitude, longitude } = position.coords;
    setGeolocation({
      position: { latitude, longitude },
      error: null,
    });
  };

  const onError = (error: GeolocationPositionError) => {
    setGeolocation({
      position: null,
      error: {
        code: error.code,
        message: error.message,
      },
    });
  };

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
      } else {
        setGeolocation({
          position: null,
          error: {
            code: 0,
            message:
              '위치정보 이용이 차단되었거나, 현재 브라우저에서는 위치정보가 지원되지 않습니다.',
          },
        });
      }
    };

    getLocation();
  }, []);

  return geolocation;
};

export default useGeolocation;
