import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Menu() {
  return (
    <Content>
      <Link to="/habitos" className="links">
        <h1>Hábitos</h1>
      </Link>
      <Link to="/hoje">
        <button>Hoje</button>
      </Link>
      <Link to="/historico" className="links">
        <h1>Histórico</h1>
      </Link>
    </Content>
  );
}

const Content = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 70px;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .links {
    font-size: 18px;
    color: #52b6ff;
    text-decoration: none;
  }
  button {
    width: 91px;
    height: 91px;
    border: none;
    border-radius: 100px;
    position: absolute;
    bottom: 10px;
    left: calc(50vw - 45px);
    background-color: #52b6ff;
    color: white;
    font-size: 18px;
  }
`;
