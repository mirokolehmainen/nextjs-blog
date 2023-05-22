import { parseISO, format } from 'date-fns';
//search the specific date in the file
export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
