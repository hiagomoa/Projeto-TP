import styled from "styled-components";
import { shade } from "polished";

export const Head = styled.div`
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 65px;
  background-color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
`;

export const Body = styled.div`
  background-color: #cadffe;
  width: 100vw;
  min-height: calc(100vh - 65px);
`;

export const Text = styled.a`
  font-family: "Fira Sans";
  font-size: calc(1em + 0.5vw);
  text-decoration: none;
  color: #69a3fa;
`;

export const Logo = styled.a`
  font-family: "Major Mono Display";
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  text-decoration: none;
`;

export const Div1 = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ButtonYeah = styled.button`
  width: 100px;
  height: 40px;
  background-color: #156ced;
  border-radius: 20px;
  outline: none;
  border: none;
  font-family: "Roboto";
  color: white;
  font-size: 14px;
  &:hover {
    background-color: #0d5dd4;
  }
`;

export const DivForm = styled.div`
  width: 80vw;
  margin-left: 10vw;
  margin-right: 10vw;
  display: flex;
  flex: 1;
  height: 100px;
  justify-content: center;
  align-items: center;
`;

export const DivCorpo = styled.div`
  width: 80vw;
  margin-left: 10vw;
  background-color: #fff;
  margin-top: 3%;
  border-radius: 5px;
  opacity: 0.75;
`;

export const Form = styled.form`
  display: flex;
  flex: 1;
  max-width: 700px;
  button {
    width: 100px;
    height: 50px;
    background: #5d7ffa;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, "#5d7ffa")};
    }
  }
  input {
    flex: 1;
    width: 100%;
    height: 50px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    &::placeholder {
      color: #a8a8b3;
      font-family: "Open Sans";
      font-size: 15px;
    }
  }
`;

export const CenterImages = styled.div`
  display: flex;
  flex: 1;
  margin-left: "20px";
  justify-content: center;
  flex-direction: column;
  img {
    text-align: center;
  }
`;

export const DivSwitch = styled.div`
  display: flex;
  flex: 1;
  margin-bottom: 20px;
  position: relative;
  transform: translate(0%, -15%);
`;

export const DivThree = styled.div`
  flex: 1;
  display: column;
`;

export const DivCont = styled.div`
  margin-top: 3vw;
  text-align: left;
  justify-content: left;
  font-family: "Fira Sans";
  font-size: calc(0.7em + 0.5vw);
  margin-left: 0.5vw;
  @media (max-width: 1024px) {
    font-size: calc(1.2em + 1vw);
    margin-top: 9vw;
    margin-left: 0.5vw;
  }
`;

export const DivAutor = styled.span`
  margin-top: 5.5vw;
  text-align: left;
  justify-content: left;
  font-family: "Fira Sans";
  font-size: calc(0.4em + 0.4vw);
  margin-left: 0.5vw;
  position: relative;
  white-space: nowrap;
  @media (max-width: 1024px) {
    font-size: calc(1em + 0.5vw);
    margin-top: 9vw;
    margin-left: 0.5vw;
  }
`;

export const DivAval = styled.span`
  bottom: -10%;
  font-family: "Fira Sans";
  font-size: calc(0.4em + 0.4vw);
  left: 8%;
  position: relative;
  white-space: nowrap;
  @media (max-width: 1024px) {
    margin-top: 15vw;
    margin-left: -13vw;
  }
`;

export const DivDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  padding-left: 10px;
  font-family: "Roboto Mono";
`;
export const DivImageTitle = styled.div`
  display: flex;
  flex-direction: row;
`;
export const MyHR = styled.hr`
  transform: translate(0%, -30px);
  height: 2px;
  width: 95%;
  margin-left: 2.5%;
  border-width: 20;
  color: gray;
  background-color: gray;
`;

export const BodyBooks = styled.div`
  display: grid;
  margin-left: 2vw;
  margin-right: 2vw;
  @media (min-width: 1440px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  gap: 20px;
  @media (max-width: 1440px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 600px) {
    justify-content: center;
    align-self: center;
    grid-template-columns: 1fr;
  }
`;
export const GridBooks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex: 1;

  img {
    justify-content: center;
    align-content: center;
    width: 140px;
  }

  @media (max-width: 728px) {
    img {
      width: 120px;
    }
  }
`;

export const ContentBook = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.5vw;
  div {
    width: 100%;
    height: 80px;
  }
  h2 {
    margin-top: 1vh;
    font-family: "Roboto Mono";
    font-size: calc(0.6em + 0.5vw);
  }
  h4 {
    margin-top: 1vh;
    font-weight: lighter;
    font-family: "Fira Sans";
  }
  .box {
    margin-top: 2vh;
  }
`;

export const Footer = styled.div`
  width: 100%;
  background-color: #80bfff;
  flex: 1;
  display: flex;
  flex-direction: Column;
  color: white;
`;

export const Title = styled.span`
  margin-top: 1%;
  display: flex;
  flex: 1;
  text-align: center;
  justify-content: center;
  font-family: "Fira Sans";
  font-size: calc(1.2em + 0.5vw);
  font-weight: 600;
`;

export const Paragrafo = styled.p`
  margin-top: 1%;
  margin-left: 5%;
  margin-right: 5%;
  font-family: "Fira Sans";
  font-size: calc(1em + 0.5vw);
  color: ${shade(0.666, "#000")};
  font-weight: 400;
  text-align: justify;
  text-justify: inter-word;
`;

export const GridBooks2 = styled.div`
  display: grid;
  grid-template-columns: 0.1fr 0.1fr;
  flex: 1;
  justify-content: center;
  img {
    justify-content: center;
    align-content: center;
    width: 200px;
  }

  @media (max-width: 728px) {
    img {
      width: 150px;
    }
  }
`;
