import { Body } from '@/constants/Typography/TypographyList';
import IconRadio from '@/assets/images/buttons-radio-m.svg';
import IconRadioDisabled from '@/assets/images/buttons-radio-m-disable.svg';
import { ScheduleState } from '@/components/Calendar/Schdule/type';

interface AlarmProps {
  content: string;
  schedule: ScheduleState;
  setSchedule: React.Dispatch<React.SetStateAction<ScheduleState>>;
}

const AlarmList = ({ content, schedule, setSchedule }: AlarmProps) => {
  const handleItemClick = () => {
    setSchedule((prev: ScheduleState) => ({ ...prev, alarm: content }));
  };

  return (
    <li
      onClick={handleItemClick}
      className={`w-full px-3 py-4 border-b border-text-dividers relative
      flex justify-between items-center
      text-text-primary cursor-pointer
      `}
    >
      <p className={`${Body.body1}`}>{content}</p>
      <span>
        {schedule.alarm === content ? <IconRadio /> : <IconRadioDisabled />}
      </span>
    </li>
  );
};

export default AlarmList;
