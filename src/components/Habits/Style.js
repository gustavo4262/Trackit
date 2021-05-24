import styled from "styled-components";

const Style = styled.div`
  height: 100vh;
  padding: 100px 18px 70px 18px;
  background-color: #e5e5e5;

  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    h1 {
      color: #126ba5;
      font-size: 23px;
    }
    button {
      width: 40px;
      height: 35px;
      background-color: #52b6ff;
      border: none;
      border-radius: 5px;
      font-size: 26px;
      color: white;
    }
  }
  h2 {
    margin-top: 28px;
    font-size: 18px;
    color: #666666;
  }
  form {
    position: relative;
    height: 180px;
    background-color: white;
    padding: 18px;
    border-radius: 5px;
    margin-bottom: 20px;

    input {
      width: 100%;
      height: 45px;
      font-size: 20px;
      padding-left: 10px;
      color: #dbdbdb;
      border: 1px solid #d5d5d5;
      border-radius: 5px;
    }

    .cancel {
      height: 20px;
      font-size: 16px;
      background-color: white;
      border: none;
      color: #52b6ff;
      position: absolute;
      bottom: 23px;
      right: 123px;
    }

    .save {
      width: 84px;
      height: 35px;
      font-size: 16px;
      background-color: #52b6ff;
      color: white;
      border: none;
      border-radius: 5px;
      position: absolute;
      bottom: 15px;
      right: 16px;
    }
  }
`;

export default Style;
