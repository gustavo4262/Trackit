import styled from "styled-components";

const Style = styled.div`
  background-color: #ebebeb;
  height: 100vh;
  padding: 100px 18px 0px 18px;
  h1 {
    font-size: 23px;
    color: #126ba5;
  }
  h2 {
    font-size: 18px;
    color: ${(props) => (props.selected ? "8fc549" : "#bababa")};
  }
`;

export default Style;
