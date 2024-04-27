import { Body } from '@/constants/Typography/TypographyList';
import IconRadio from '@/assets/images/buttons-radio-m.svg';
import IconRadioDisabled from '@/assets/images/buttons-radio-m-disable.svg';
import {
  AlarmListProps,
  ScheduleState,
} from '@/components/Calendar/Schedule/type';

interface AlarmProps {
  alarm: AlarmListProps;
  schedule: ScheduleState;
  setSchedule: React.Dispatch<React.SetStateAction<ScheduleState>>;
}

const AlarmList = ({ alarm, schedule, setSchedule }: AlarmProps) => {
  const handleItemClick = () => {
    setSchedule((prev: ScheduleState) => ({ ...prev, alarm: alarm.key }));
  };

  return (
    <li
      onClick={handleItemClick}
      className={`w-full px-3 py-4 border-b border-text-dividers relative
      flex justify-between items-center
      text-text-primary cursor-pointer
      `}
    >
      <p className={`${Body.body1}`}>{alarm.content}</p>
      <span>
        {schedule.alarm === alarm.key ? <IconRadio /> : <IconRadioDisabled />}
      </span>
    </li>
  );
};

export default AlarmList;
