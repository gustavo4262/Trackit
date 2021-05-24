import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import Content from "./Style";
import logo from "../../data/images/logo.png";

export default function SignUp() {
  const [body, setBody] = useState({
    email: "",
    name: "",
    image: "",
    password: "",
  });
  const history = useHistory();

  function setEmail(value) {
    body.email = value;
    setBody(body);
  }

  function setName(value) {
    body.name = value;
    setBody(body);
  }

  function setImage(value) {
    body.image = value;
    setBody(body);
  }

  function setPassword(value) {
    body.password = value;
    setBody(body);
  }

  function signUp(event) {
    event.preventDefault();
    const url =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
    const request = axios.post(url, body);
    request.then((response) => {
      console.log(response);
      history.push("/");
    });
    request.catch((error) => {
      alert("Error no cadastro");
      console.log(error);
    });
  }
  return (
    <Content>
      <img src={logo} alt="logo"></img>
      <form onSubmit={signUp}>
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
        <input
          type="text"
          placeholder="nome"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="url"
          placeholder="foto"
          onChange={(e) => setImage(e.target.value)}
        ></input>
        <button onClick={signUp}>Cadastro</button>
      </form>
      <Link to="/">
        <h1>Já tem uma conta? Faça login!</h1>
      </Link>
    </Content>
  );
}
