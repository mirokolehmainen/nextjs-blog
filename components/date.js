import { parseISO, format } from 'date-fns';
//hakee määritetyn päivän
export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}