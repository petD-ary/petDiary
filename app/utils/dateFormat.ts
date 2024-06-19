export function formatDateToYYYYMMDDTHHMMSSZ(date: Date | string): string {
  date = new Date(date);
  const isoString = date.toISOString();

  return isoString.replace(
    /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}).\d{3}Z/,
    '$1$2$3T$4$5$6Z',
  );
}

export function formatDateToYYMMDD(date: Date | string): string {
  date = new Date(date);
  const yy = date.getFullYear();
  const mm = date.getMonth() + 1;
  const dd = date.getDate();

  return `${yy}.${mm.toString().padStart(2, '0')}.${dd.toString().padStart(2, '0')}`;
}
