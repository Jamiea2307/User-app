import styled from "styled-components";
import {
  startOfMonth,
  endOfMonth,
  format,
  eachDayOfInterval,
  startOfYear,
  endOfYear,
} from "date-fns";

const Calendar = () => {
  const CalendarContainer = styled.div`
    width: 90%;
    margin: auto;
  `;

  const DayStyles = styled.div`
    display: flex;
    justify-content: center;
    border: 1px solid black;
    align-items: center;
    width: 100vh;
    height: 2rem;
  `;

  const DaysContainer = styled.div`
    display: flex;
  `;

  const DatesStyles = styled.div`
    border: 1px solid black;

    &:nth-of-type(7n) {
      flex-wrap: wrap;
    }
  `;

  const DatesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
  `;

  console.log(format(startOfMonth(Date.now()), "EEEE dd"));
  console.log(format(endOfMonth(Date.now()), "EEEE dd"));

  const result = eachDayOfInterval({
    start: startOfMonth(Date.now()),
    end: endOfMonth(Date.now()),
  }).map((d) => format(d, "EEEE d"));
  const resulty = eachDayOfInterval({
    start: startOfYear(Date.now()),
    end: endOfYear(Date.now()),
  }).map((d) => format(d, "EEEE d"));

  console.log(result);
  console.log(resulty);

  return (
    <CalendarContainer>
      <DaysContainer>
        <DayStyles>Monday</DayStyles>
        <DayStyles>Tuesday</DayStyles>
        <DayStyles>Wednesday</DayStyles>
        <DayStyles>Thursday</DayStyles>
        <DayStyles>Friday</DayStyles>
        <DayStyles>Saturday</DayStyles>
        <DayStyles>Sunday</DayStyles>
      </DaysContainer>
      <DatesContainer>
        {result.map((day) => {
          return <DatesStyles>{day}</DatesStyles>;
        })}
      </DatesContainer>
    </CalendarContainer>
  );
};

export default Calendar;
