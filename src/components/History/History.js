import styled from "styled-components";
import Menu from "../Bars/Menu";
import Topo from "../Bars/Topo";

export default function () {
  return (
    <>
      <Topo></Topo>
      <Content>
        <h1>Histórico</h1>
        <h2>Em breve você poderá ver seu histórico</h2>
      </Content>
      <Menu></Menu>
    </>
  );
}

const Content = styled.div`
  padding: 70px 18px 0px 18px;
  background-color: #ebebeb;
  height: 100vh;
  h1 {
    font-size: 23px;
    color: #126ba5;
    margin-top: 30px;
  }
  h2 {
    margin-top: 16px;
    font-size: 20px;
    color: #666666;
  }
`;
