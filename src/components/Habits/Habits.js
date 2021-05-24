import axios from "axios";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import Menu from "../Bars/Menu";
import Topo from "../Bars/Topo";
import Content from "./Style";
import DaysButtons from "./DaysButtons";
import Habit from "./Habit";

export default function Habits() {
  const [habits, setHabits] = useState([]);
  const [booleanNewHabit, setBooleanNewHabit] = useState(false);
  const [habitName, setHabitName] = useState("");
  const [habitDays, setHabitDays] = useState([0, 0, 0, 0, 0, 0, 0]);
  const { user } = useContext(UserContext);

  function loadHabits() {
    const url =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    const request = axios.get(url, config);
    request.then((response) => {
      setHabits(response.data);
    });
  }

  function deleteHabit(id) {
    let conf = window.confirm("Voce tem certeza?");
    if (!conf) return;
    const url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    axios.delete(url, config);
    loadHabits();
  }

  useEffect(loadHabits, []);

  function selectDay(value) {
    value = parseInt(value);
    habitDays[value] = !habitDays[value];
    console.log(habitDays[value]);
    setHabitDays([...habitDays]);
  }

  function submitHabit(event) {
    event.preventDefault();
    const days = habitDays.map((v, i) => (v ? i : -1)).filter((e) => e !== -1);
    const newHabit = { name: habitName, days: days };
    console.log(newHabit);
    const url =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    let request = axios.post(url, newHabit, config);
    request.then(() => loadHabits());

    setBooleanNewHabit(false);
    setHabitName("");
    setHabitDays([0, 0, 0, 0, 0, 0, 0]);
  }
  return (
    <>
      <Topo></Topo>
      <Content>
        <div className="head">
          <h1>Meus hábitos</h1>
          <button onClick={() => setBooleanNewHabit(!booleanNewHabit)}>
            +
          </button>
        </div>
        {booleanNewHabit ? (
          <form onSubmit={submitHabit}>
            <input
              type="text"
              placeholder="nome do hábito"
              onChange={(e) => setHabitName(e.target.value)}
            ></input>
            <DaysButtons
              habitDays={habitDays}
              selectDay={selectDay}
            ></DaysButtons>
            <button
              className="cancel"
              type="button"
              onClick={() => setBooleanNewHabit(false)}
            >
              Cancelar
            </button>
            <button type="submit" className="save">
              Salvar
            </button>
          </form>
        ) : (
          ""
        )}
        {habits.length ? (
          ""
        ) : (
          <h2>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </h2>
        )}
        {habits.map((habit) => (
          <Habit
            title={habit.name}
            days={habit.days}
            id={habit.id}
            key={habit.id}
            deleteHabit={deleteHabit}
          ></Habit>
        ))}
      </Content>
      <Menu></Menu>
    </>
  );
}
