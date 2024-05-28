'use client';

import useGeolocation from '@/hooks/util/useGeolocation';
import { Map, MarkerClusterer } from 'react-kakao-maps-sdk';
import { useMemo } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

interface MapProps {
  children?: React.ReactNode;
  position?: { lat: number; lng: number };
  onCenterChanged?: (value: any) => void;
  isPanto?: boolean;
  level?: number;
  onClick?: () => void;
}

const MapComponent = ({ children, ...props }: MapProps) => {
  const geolocation = useGeolocation();

  const clusterStyle = [
    {
      width: '40px',
      height: '40px',
      background: 'rgba(255,205,133)',
      border: '3px solid white',
      borderRadius: '100%',
      color: '#2b2b2b',
      boxShadow: '0 0 15px 2px rgba(255,205,133, 0.8)',
      textAlign: 'center',
      fontWeight: '400',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      lineHeight: '24px',
    },
    {
      width: '40px',
      height: '40px',
      background: 'rgba(144,144,144)',
      border: '3px solid white',
      borderRadius: '100%',
      color: '#2b2b2b',
      boxShadow: '0 0 15px 2px rgba(144,144,144, 0.8)',
      textAlign: 'center',
      fontWeight: '400',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      lineHeight: '24px',
    },

    {
      width: '40px',
      height: '40px',
      background: 'rgba(255, 155, 30)',
      border: '3px solid white',
      borderRadius: '100%',
      color: '#fff',
      boxShadow: '0 0 15px 2px rgba(255, 155, 30, 0.8)',
      textAlign: 'center',
      fontWeight: '400',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      lineHeight: '24px',
    },
    {
      width: '40px',
      height: '40px',
      background: 'rgba(43,43,43)',
      border: '3px solid white',
      borderRadius: '100%',
      color: '#fff',
      boxShadow: '0 0 15px 2px rgba(43,43,43, 0.5)',
      textAlign: 'center',
      fontWeight: '400',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      lineHeight: '24px',
    },
  ];

  const position = useMemo(() => {
    if (props.position) {
      return props.position;
    } else if (geolocation.position) {
      return {
        lat: geolocation.position.lat,
        lng: geolocation.position.lng,
      };
    }

    return null;
  }, [props.position, geolocation.position]);

  if (!position) return null;

  return (
    <Map
      id='map'
      center={position}
      className='w-full h-[180px] border border-grayColor-100 rounded-md'
      level={5}
      {...props}
    >
      <MarkerClusterer
        averageCenter={true}
        minLevel={5}
        calculator={[10, 30, 50]}
        styles={clusterStyle}
      >
        {children}
      </MarkerClusterer>
    </Map>
  );
};

export default MapComponent;
