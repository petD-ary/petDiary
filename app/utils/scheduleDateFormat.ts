const scheduleDateFormat = (date: string | Date) => {
  const resultDate = new Date(date);

  const year = resultDate.getFullYear();
  const month = (resultDate.getMonth() + 1).toString().padStart(2, '0');
  const day = resultDate.getDate().toString().padStart(2, '0');
  const hour = resultDate.getHours().toString().padStart(2, '0');
  const minutes = resultDate.getMinutes() < 30 ? '00' : '30';

  return { date: `${year}-${month}-${day}`, time: { hh: hour, mm: minutes } };
};

export default scheduleDateFormat;
