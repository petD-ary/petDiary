import { Body } from '@/constants/Typography/TypographyList';
import IconRadio from '@/assets/images/buttons-radio-m.svg';
import IconRadioDisabled from '@/assets/images/buttons-radio-m-disable.svg';
import { AlarmListProps, ScheduleState } from '@/components/Schedule/type';
import { useRecoilState } from 'recoil';
import { scheduleFormState } from '@/recoil/Schedule/atom';

interface AlarmProps {
  alarm: AlarmListProps;
}

const AlarmList = ({ alarm }: AlarmProps) => {
  const [schedule, setSchedule] = useRecoilState(scheduleFormState);

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
