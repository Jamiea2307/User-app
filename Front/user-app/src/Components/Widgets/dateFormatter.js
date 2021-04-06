import { DateTime } from "luxon";

const DateFormatter = ({ date }) => {
  return DateTime.fromISO(date).toFormat("ff");
};

export default DateFormatter;
