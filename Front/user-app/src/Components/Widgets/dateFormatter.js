import { DateTime } from "luxon";

const DateFormatter = ({ date }) => {
  const diff = DateTime.now().diff(DateTime.fromISO(date), [
    "years",
    "months",
    "days",
    "hours",
  ]);

  return (
    <div
      className="dateContainer"
      title={DateTime.fromISO(date).toFormat("ff")}
    >
      {DateTime.now().minus(diff.toObject()).toRelative()}
    </div>
  );
};

export default DateFormatter;
