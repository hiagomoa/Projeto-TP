import React, { useState, FormEvent } from "react";
import "./styles.css";

import api from "../../services/api";
import {
  Head,
  Body,
  Text,
  Logo,
  Div1,
  ButtonYeah,
  Paragrafo,
  Form,
  DivForm,
  Footer,
  Title,
  DivCorpo,
} from "./styles";
import "swiper/swiper.scss";
import caminho from "./supra.png";

interface Resposta {
  id: number;
  titulo: string;
  autor: string;
  descricao: string;
  imagem: string;
  rating: number;
  acessos: number;
}

const lixo =
  "Na distante terra de Teyvat, onde os Supras trovoavam com seus motores V8, um dos residentes deste reluzente país – Dr.Orlando Brakus, conhecido também como O Tunador – um médico e mecânico especialista em manutenção e melhorias de carros, testa sua nova invenção: o motor quadriturbo elétrico bivolt. Na distante terra de Teyvat, onde os Supras trovoavam com seus motores V8, um dos residentes deste reluzente país – Dr.Orlando Brakus, conhecido também como O Tunador – um médico e mecânico especialista em manutenção e melhorias de carros, testa sua nova invenção: o motor quadriturbo elétrico bivolt. Com a implementação de um sistema de inteligência artificial rodando acoplado em um processador anexado ao motor, os níveis depoluiç gerados não somente pelos motores elétricos – que nãodeixam d poluentes – mas por qualquer outro motor que integreeste s seriam reduzidos em níveis exorbitantes através de umcontrole eletrônico de toda emissão de poluentes. Assim sendo, Dr.Orlando era referência em sua área, um modelo a ser seguido.Certo dia, O Tunador enlouqueceu e decidiu que os motores de Supras agora seriam a Diesel, um composto mais poluente do que gasolina comum.Desta forma, sabendo da loucura que cons Orlando, Dr.Seninha aparece, tenta dialogar com Orlando mas nada pôde ser feito.Orlando já não era mais o mesmo. Escandinávia! O paraíso na terra, de onde os deuses de Valhala são venerados por todos habitantes. Com Orlando enlouquecido, todos os Doutores tiveram que fazer pacto, que foi conhecido como BPM(Brakus Por Minuto).NestePacto, trindade dos Doutores se uniram - Dr.Seninha, Dra.LindaMurphy Dr.Adam O Reilly - que a partir deste dia, juraramdestruir Orlando Brakus.Após muita pesquisa, a trindadeconseguiu formular um novo tipo de motor: o motor quadriturboelétrico bivolt V2. Desta forma, Orlando Brakus fora destruido, e caiu em esquecimento, com seu motor quadriturbo elétrico bivolt caindo em esquecimento.";
const About: React.FC = () => {
  const [value, setValue] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [resposta, setResposta] = useState<Resposta[]>([]);
  const [resposta2, setResposta2] = useState("");
  // eslint-disable-next-line no-unused-vars
  async function busca(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    console.log(value);
    const response = await api.get<Resposta>(`/search?input=${value}`);

    const { data } = response;
    console.log(data);
    setValue("");
    setResposta([data]);
  }

  // const [resposta2, setResposta2] = useState<Resposta[]>([]);
  async function traduction(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    console.log(value);
    const response = await api.post("/traducao", { text: lixo });
    const { data } = response;
    console.log(data);
    setResposta2(data);
    console.log(resposta2);
  }

  return (
    <>
      <Head>
        <Div1>
          <Text href="/">Início</Text>
          <Text href="index.tsx">Sobre</Text>
        </Div1>

        <Logo href="/">Mybrary</Logo>

        <Div1>
          <ButtonYeah href="../Devs/index.tsx">Nós</ButtonYeah>
        </Div1>
      </Head>
      <Body>
        <DivForm>
          <Form onSubmit={busca}>
            <input
              placeholder="Faça sua Pesquisa"
              id="busca"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit">Search</button>
          </Form>
        </DivForm>
        <DivCorpo>
          <Title>Brakus</Title>
          {resposta2 === "" && (
            <>
              <Paragrafo>{lixo}</Paragrafo>
            </>
          )}
          {resposta2 !== "" && (
            <>
              <Paragrafo>{resposta2[0].translations[0].text}</Paragrafo>
            </>
          )}
          <form onSubmit={traduction}>
            <div
              style={{
                display: "flex",
                flex: "1",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <button className="myButton" type="submit">
                Traduzir
              </button>
            </div>
          </form>
        </DivCorpo>
        <img
          src={caminho}
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "30%",
          }}
          alt="Supra Tunado"
        />
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

export default About;
