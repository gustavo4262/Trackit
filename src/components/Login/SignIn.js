import { Link, useHistory } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";

import Content from "./Style";
import logo from "../../data/images/logo.png";
import UserContext from "../../contexts/UserContext";

export default function SignIn() {
  const [body, setBody] = useState({ email: "", password: "" });
  const { setUser } = useContext(UserContext);
  const history = useHistory();

  function setEmail(value) {
    body.email = value;
    setBody(body);
  }

  function setPassword(value) {
    body.password = value;
    setBody(body);
  }

  function login(event) {
    event.preventDefault();

    setBody({ email: "", password: "" });

    const url =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";

    const request = axios.post(url, body);

    request.then((response) => {
      setUser(response.data);
      history.push("/hoje");
    });

    request.catch((error) => {
      alert("Usuário e/ou senha incorretos");
    });
  }

  return (
    <Content>
      <img src={logo} alt="logo"></img>
      <form onSubmit={login}>
        <input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="senha"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit" onClick={login}>
          Entrar
        </button>
      </form>
      <Link to="/cadastro">
        <h1>Não tem uma conta? Cadastre-se</h1>
      </Link>
    </Content>
  );
}
