import { Body } from '@/constants/Typography/TypographyList';
import { ScheduleState } from '../../AddScheduleModal';
import IconRadio from '@/assets/images/buttons-radio-m.svg';
import IconRadioDisabled from '@/assets/images/buttons-radio-m-disable.svg';

interface RepeatProps {
  content: string;
  schedule: ScheduleState;
  setSchedule: React.Dispatch<React.SetStateAction<ScheduleState>>;
}

const RepeatList = ({ content, schedule, setSchedule }: RepeatProps) => {
  const handleItemClick = () => {
    setSchedule((prev: ScheduleState) => ({ ...prev, repeat: content }));
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
        {schedule.repeat === content ? <IconRadio /> : <IconRadioDisabled />}
      </span>
    </li>
  );
};

export default RepeatList;
