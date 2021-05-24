import styled from "styled-components";
import DaysButtons from "./DaysButtons";
import { TrashOutline } from "react-ionicons";
export default function Habit(props) {
  const { title, days, id, deleteHabit } = props;
  const habitDays = [0, 0, 0, 0, 0, 0, 0].map((v, i) => {
    return days.includes(i) ? 1 : 0;
  });

  return (
    <Content>
      <h1>{title}</h1>
      <DaysButtons habitDays={habitDays}></DaysButtons>
      <TrashOutline
        cssClasses="del"
        onClick={() => deleteHabit(id)}
      ></TrashOutline>
    </Content>
  );
}

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 91px;
  background-color: white;
  margin-bottom: 10px;
  border-radius: 5px;
  padding: 15px;
  h1 {
    color: #666666;
    font-size: 20px;
  }
  .del {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 10px;
    right: 10px;
    color: #666666;
  }
`;
