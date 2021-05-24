import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";
import logo from "../../data/images/logo_text.png";

export default function Topo() {
  const { user } = useContext(UserContext);

  return (
    <Content>
      <img src={logo} alt="logo" className="logo"></img>
      <img src={user.image} alt="user" className="user"></img>
    </Content>
  );
}

const Content = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 18px;
  padding-right: 10px;
  background-color: #126ba5;
  .logo {
    width: 100px;
    height: 30px;
  }
  .user {
    width: 51px;
    height: 51px;
    border-radius: 98px;
  }
`;
