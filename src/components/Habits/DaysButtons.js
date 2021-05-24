import styled from "styled-components";

export default function DaysButtons({ habitDays, selectDay }) {
  const days = ["D", "S", "T", "Q", "Q", "S", "S"];
  return (
    <>
      {days.map((day, index) => (
        <Content
          selected={habitDays[index]}
          onClick={(e) => selectDay(index)}
          type="button"
          key={index}
        >
          {day}
        </Content>
      ))}
    </>
  );
}

const Content = styled.button`
  width: 30px;
  height: 30px;
  background-color: ${(props) => (props.selected ? "#cfcfcf" : "#ffffff")};
  color: ${(props) => (props.selected ? "#ffffff" : "#dbdbdb")};
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin-top: 8px;
  margin-right: 4px;
`;
