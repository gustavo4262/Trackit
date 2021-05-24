import axios from "axios";
import { useContext, useEffect, useState } from "react";
import "dayjs/locale/pt-br";
import dayjs, { Dayjs } from "dayjs";

import UserContext from "../../contexts/UserContext";
import Menu from "../Bars/Menu";
import Topo from "../Bars/Topo";
import Habit from "./Habit";
import Content from "./Style";

export default function () {
  const { user } = useContext(UserContext);
  const [habits, setHabits] = useState([]);
  const date = "Segunda, 17/05";

  useEffect(() => {
    const url =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };

    const request = axios.get(url, config);
    request.then((response) => {
      setHabits(response.data);
    });
    request.catch((err) => {
      console.error();
    });
  }, []);
  console.log(habits);
  return (
    <>
      <Topo></Topo>
      <Content>
        <h1>{date}</h1>
        <h2>Nenhum hábito concluído ainda</h2>
        {habits.map((habit) => (
          <Habit habit={habit} key={habit.id}></Habit>
        ))}
      </Content>
      <Menu></Menu>
    </>
  );
}
