import { MapMarker } from 'react-kakao-maps-sdk';
import mapPin from '@/assets/images/map/icon_customPin.png';
import currentPin from '@/assets/images/map/icon_currentPin.png';

interface CustomPinProps {
  position?: { lat: number; lng: number };
  onClick?: (value?: any) => void;
  isSelected?: boolean;
}

const CustomPin = ({
  position,
  onClick,
  isSelected = false,
}: CustomPinProps) => {
  if (!position) return null;

  return (
    <MapMarker
      position={{
        lat: position.lat,
        lng: position.lng,
      }}
      onClick={() => onClick && onClick({ level: 2, position: position })}
      image={{
        src: `${isSelected ? currentPin.src : mapPin.src}`,
        size: {
          width: isSelected ? 32 : 36,
          height: isSelected ? 32 : 36,
        },
        options: {
          offset: {
            x: isSelected ? 16 : 18,
            y: isSelected ? 16 : 18,
          },
        },
      }}
    />
  );
};

export default CustomPin;
