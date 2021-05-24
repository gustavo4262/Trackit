import styled from "styled-components";
import { Checkmark } from "react-ionicons";
import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import axios from "axios";

export default function Habit({ habit }) {
  const { currentSequence, done, highestSequence, name, id } = habit;
  const { user } = useContext(UserContext);
  const [habitDone, setHabitDone] = useState({
    done: done,
    currentSequence: currentSequence,
    highestSequence: highestSequence,
  });
  const best = currentSequence === highestSequence;

  function toogleCheck() {
    const check = habitDone ? "check" : "uncheck";
    const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/${check}`;
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    console.log(check, habit, habitDone);
    const request = axios.post(url, "", config);
    request.then((response) => {
      habitDone.done = !habitDone.done;
      habitDone.currentSequence++;
      habitDone.currentSequence++;
      setHabitDone({ ...habitDone });
      console.log("fko", done);
    });
  }

  return (
    <Content
      done={habitDone.done}
      seq={habitDone.currentSequence}
      rec={best && habitDone.highestSequence}
    >
      <h1>{name}</h1>
      <h2>
        Sequencia atual: <span className="seq">{currentSequence}</span>
      </h2>
      <h2>
        Seu record: <span className="rec">{highestSequence}</span>
      </h2>
      <Checkmark cssClasses="check" onClick={toogleCheck}></Checkmark>
    </Content>
  );
}

const Content = styled.div`
  position: relative;
  width: 340px;
  height: 100px;
  margin-top: 28px;
  background-color: white;
  border-radius: 5px;
  padding: 13px;
  h1 {
    font-size: 20px;
    color: #666666;
  }
  h2 {
    font-size: 13px;
    color: #666666;
    margin-top: 7px;
  }
  .check {
    position: absolute;
    top: 13px;
    right: 13px;
    width: 70px;
    height: 70px;
    font-size: 20px;
    background-color: ${(props) => (props.done ? "#8FC549" : "#ebebeb")};
    color: white;
    border-radius: 5px;
  }
  .seq {
    color: ${(props) => (props.seq ? "#8FC549" : "#666666")};
  }
  .rec {
    color: ${(props) => (props.rec ? "#8FC549" : "#666666")};
  }
`;
