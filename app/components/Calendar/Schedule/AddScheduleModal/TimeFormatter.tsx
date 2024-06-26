interface TimeFormatterProps {
  time: { date: string; time: { hh: string; mm: string } };
  selected: boolean;
}

const TimeFormatter = ({ time, selected }: TimeFormatterProps) => {
  const timeToChangeDateForm = `${time.date} ${time.time.hh}:${time.time.mm}:00`;
  const date = new Date(timeToChangeDateForm);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hour = date.getHours().toString().padStart(2, '0');
  const minute = date.getMinutes().toString().padStart(2, '0');

  return (
    <div className='flex gap-3'>
      <span
        className={`border rounded-lg px-3 py-2
        ${selected ? 'text-white border-transparent bg-secondary-700' : 'text-secondary-800 border-secondary-100 bg-secondary-50'}`}
      >{`${year}.${month}.${day}`}</span>
      <span
        className={`border rounded-lg px-3 py-2
        ${selected ? 'text-white border-transparent bg-primary-700' : 'text-primary-800 border-primary-100 bg-primary-50'}`}
      >{`${hour}:${minute}`}</span>
    </div>
  );
};

export default TimeFormatter;
