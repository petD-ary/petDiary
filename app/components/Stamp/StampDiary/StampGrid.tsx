import Stamp from '@/components/Stamp';
import { StampProps } from '@/components/Stamp/StampDiary';

interface StampGridProps {
  stamps: StampProps[];
  data: string[];
}

const StampGrid = ({ stamps, data }: StampGridProps) => {
  return (
    <>
      {stamps.map((stamp) => (
        <Stamp
          key={stamp.value}
          check={data.filter(
            (_: string, idx: number) => idx + 1 === stamp.value
          )}
          value={stamp.value}
        />
      ))}
    </>
  );
};

export default StampGrid;
