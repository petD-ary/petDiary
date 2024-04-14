import { MapMarker } from 'react-kakao-maps-sdk';
import mapPin from '@/assets/images/map/icon_customPin.png';

interface CustomPinProps {
  position?: { lat: number; lng: number };
  onClick?: (value?: any) => void;
}

const CustomPin = ({ position, onClick }: CustomPinProps) => {
  if (!position) return null;

  return (
    <MapMarker
      position={{
        lat: position.lat,
        lng: position.lng,
      }}
      onClick={() => onClick && onClick({ level: 2, position: position })}
      image={{
        src: mapPin.src,
        size: {
          width: 36,
          height: 36,
        },
        options: {
          offset: {
            x: 18,
            y: 18,
          },
        },
      }}
    />
  );
};

export default CustomPin;
