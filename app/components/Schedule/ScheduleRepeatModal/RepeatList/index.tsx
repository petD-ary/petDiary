import { Body } from '@/constants/Typography/TypographyList';
import IconRadio from '@/assets/images/buttons-radio-m.svg';
import IconRadioDisabled from '@/assets/images/buttons-radio-m-disable.svg';
import { ScheduleState } from '@/components/Schedule/type';
import { useRecoilState } from 'recoil';
import { scheduleFormState } from '@/recoil/Schedule/atom';

interface RepeatProps {
  content: '반복 안함' | '매일' | '매주' | '2주마다' | '매월' | '매년';
  keyword: 'none' | 'daily' | 'weekly' | 'biweekly' | 'monthly' | 'yearly';
}

const RepeatList = ({ content, keyword }: RepeatProps) => {
  const [schedule, setSchedule] = useRecoilState(scheduleFormState);

  const handleItemClick = () => {
    setSchedule((prev: ScheduleState) => ({ ...prev, repeat: keyword }));
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
        {schedule.repeat === keyword ? <IconRadio /> : <IconRadioDisabled />}
      </span>
    </li>
  );
};

export default RepeatList;
