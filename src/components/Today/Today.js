import axios from "axios";
import { useContext, useEffect } from "react";
import "dayjs/locale/pt-br";
import dayjs, { Dayjs } from "dayjs";

import UserContext from "../../contexts/UserContext";
import Menu from "../Bars/Menu";
import Topo from "../Bars/Topo";
import Content from "./Style";

export default function () {
  const { user } = useContext(UserContext);
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
      console.log(response);
    });
    request.catch((err) => {
      console.error();
    });
  });

  return (
    <>
      <Topo></Topo>
      <Content></Content>
      <Menu></Menu>
    </>
  );
}
