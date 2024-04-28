interface SetDateObjProps {
  date: string;
  time: { hh: string; mm: string };
}

const setDateObj = (day: SetDateObjProps) => {
  const {
    date,
    time: { hh, mm },
  } = day;

  const dateStr = `${date} ${hh}:${mm}`;
  return new Date(dateStr);
};

export default setDateObj;
