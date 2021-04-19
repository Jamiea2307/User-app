import { DateTime } from "luxon";

const DateFormatter = ({ date }) => {
  console.log(date);
  const diff = DateTime.now().diff(DateTime.fromISO(date), [
    "years",
    "months",
    "days",
    "hours",
  ]);

  console.log(diff);

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
