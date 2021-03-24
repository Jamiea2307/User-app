import styled from "styled-components";
const Calendar = () => {
  const styles = {
    display: "flex",
    justifyContent: "space-evenly",
  };

  const DayStyles = styled.div`
    display: flex;
    justify-content: center;
    border: 1px solid black;
    align-items: center;
    width: 100vh;
    height: 2rem;
  `;

  return (
    <div style={styles}>
      <DayStyles>Monday</DayStyles>
      <DayStyles>Tuesday</DayStyles>
      <DayStyles>Wednesday</DayStyles>
      <DayStyles>Thursday</DayStyles>
      <DayStyles>Friday</DayStyles>
      <DayStyles>Saturday</DayStyles>
      <DayStyles>Sunday</DayStyles>
    </div>
  );
};

export default Calendar;
