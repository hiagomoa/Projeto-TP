import React, { useState, FormEvent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import api from "../../services/api";

import {
  Head,
  Body,
  Text,
  Logo,
  Div1,
  ButtonYeah,
  Form,
  DivForm,
  DivCorpo,
  CenterImages,
  DivSwitch,
  DivCont,
  DivDescription,
  DivImageTitle,
  DivAutor,
  DivAval,
  DivThree,
  MyHR,
  BodyBooks,
  GridBooks,
  ContentBook,
  Footer,
  Title,
  GridBooks2,
  TextKhris,
  TextHiago,
  TextVictor,
  DivsImages,
} from "./styles";

import "./styles.css";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Buttao from "@material-ui/core/Button";
import "swiper/swiper.scss";
import Livros from "../../livros.json";
import khris from "./khris.jpg";
import hiago from "./hiago.jpg";
import victor from "./victor.jpg"
import { relative } from "path";

interface Resposta {
  id: number;
  titulo: string;
  autor: string;
  descricao: string;
  imagem: string;
  rating: number;
  acessos: number;
}
const Devs: React.FC = () => {
  const tamanho = {
    width: "270px",
    height: "340px",
    marginLeft: "10px",
    borderRadius: "5px",
    backgroundColor: "#F2F2F2",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  };
  const [value, setValue] = useState("");
  const [resposta, setResposta] = useState<Resposta[]>([]);

  async function busca(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    console.log(value);
    const response = await api.get<Resposta>(`/search?input=${value}`);

    const { data } = response;
    console.log(data);
    setValue("");
    setResposta([data]);
  }

  return (
    <>
      <Head>
        <Div1>
          <Text href="/">Início</Text>
          <Text href="../About/index.tsx">Sobre</Text>
        </Div1>

        <Logo href="/">Mybrary</Logo>

        <Div1>
          <ButtonYeah href="../Devs/index.tsx">Nós</ButtonYeah>
        </Div1>
      </Head>
      <Body>
        <DivForm></DivForm>
        <DivCorpo>

          {resposta.length === 0 && (            <>
              <DivSwitch>
                <DivsImages></DivsImages>
              <img
          src={khris}
          style={{
            

            marginLeft: "auto",
            marginRight: "auto",
            width: "calc(3em + 7vw)",
            borderRadius: "75%",
            marginTop: "10%",
            marginLeft: "13%",
            position: "relative",
          }}
          alt="Khrisinho do SOzin"
          
        />
        <TextKhris> Christopher Souza, mais conhecido como Khrisinho do SO é um famoso estudioso das artes programativas, filósofo e estudioso de Supras.</TextKhris>
        </DivSwitch>
    
        <img
          src={hiago}
          style={{
            

            marginLeft: "auto",
            marginRight: "auto",
            width: "calc(3em + 7vw)",
            borderRadius: "75%",
            marginTop: "5%",
            marginLeft: "75%",
            position: "relative",

          }}
          alt="Hiago Bahia"
        />

        <TextHiago>Hiago Moa, mais conhecido como baiano é um estudante de Engenharia de Computação. É conhecido por sua super habilidades de cordenação motora, principalmente em jogos de FPS e por ter uma excelente habilidade de decisão de arquitetura de projeto e de direção.</TextHiago>
        <DivSwitch>
        <img
          src={victor}
          style={{
            

            marginLeft: "auto",
            marginRight: "auto",
            width: "calc(3em + 7vw)",
            borderRadius: "75%",
            marginTop: "5%",
            marginLeft: "13%",
            position: "relative",
          }}
          alt="THE DESTRUIDOR"
        />
        <TextVictor> Salsa20, coder, influenciador digital. Focado em destruição e implementação de sistemas arrojados.</TextVictor>
        </DivSwitch>
            </>
          )}
    
         
          <div style={{ width: "100%", height: "30px" }} />
        </DivCorpo>

        <div style={{ width: "100%", height: "50px" }} />
      </Body>
      <Footer>
        <Title> Participantes </Title>
        <Title style={{ fontSize: "calc(0.5em + 0.5vw)" }}>
          <span style={{ left: "-4%", position: "relative" }}>
            Christopher de Oliveira Souza
          </span>
          <span style={{ left: "-21px", position: "relative" }}>
            RA: 18726430
          </span>
        </Title>
        <Title style={{ fontSize: "calc(0.5em + 0.5vw)" }}>
          <span style={{ left: "-5.5%", position: "relative" }}>
            Hiago Silva Fernandes
          </span>
          <span style={{ right: "5px", left: "7px", position: "relative" }}>
            RA: 18726455
          </span>
        </Title>
        <Title style={{ fontSize: "calc(0.5em + 0.5vw)" }}>
          <span style={{ left: "-4.8%", position: "relative" }}>
            Victor Luiz Fraga Soldera
          </span>
          <span style={{ left: "0px", position: "relative" }}>
            RA: 18045674
          </span>
        </Title>
      </Footer>
    </>
  );
};

export default Devs;
