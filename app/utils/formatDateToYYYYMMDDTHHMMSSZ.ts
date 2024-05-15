export function formatDateToYYYYMMDDTHHMMSSZ(date: Date | string): string {
  date = new Date(date);
  const isoString = date.toISOString();

  return isoString.replace(
    /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}).\d{3}Z/,
    '$1$2$3T$4$5$6Z',
  );
}
