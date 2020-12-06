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
} from "./styles";

import "./styles.css";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Buttao from "@material-ui/core/Button";
import "swiper/swiper.scss";
import Livros from "../../livros.json";

interface Resposta {
  id: number;
  titulo: string;
  autor: string;
  descricao: string;
  imagem: string;
  rating: number;
  acessos: number;
}
const Main: React.FC = () => {
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
          {resposta.length === 0 && (
            <>
              <DivSwitch>
                <Swiper
                  breakpoints={{
                    // when window width is >= 640px
                    640: {
                      width: 640,
                      slidesPerView: 2,
                    },
                    // when window width is >= 768px
                    1024: {
                      width: 1024,
                      slidesPerView: 3,
                    },
                  }}
                  spaceBetween={40}
                >
                  {Livros[1].novos?.map((num) => (
                    <SwiperSlide style={tamanho} key={num.id}>
                      <CenterImages>
                        <DivImageTitle>
                          <img
                            src={num.imagem}
                            alt="Livro"
                            style={{
                              width: "130px",
                              height: "100%",
                              marginLeft: "10px",
                              marginTop: "10px",
                            }}
                          />
                          <DivThree>
                            <DivCont>{num.titulo}</DivCont>
                            <DivAutor>{num.autor}</DivAutor>
                            <DivAval>
                              <Box
                                component="fieldset"
                                mb={3}
                                borderColor="transparent"
                              >
                                <Typography component="legend" />
                                <Rating
                                  name="read-only"
                                  value={num.rating}
                                  readOnly
                                />
                              </Box>

                              <Buttao
                                className="botao"
                                variant="outlined"
                                color="primary"
                                style={{
                                  textAlign: "center",
                                  justifyContent: "center",
                                  right: "-20%",
                                  top: "-8%",
                                }}
                              >
                                Ler
                              </Buttao>
                            </DivAval>
                          </DivThree>
                        </DivImageTitle>
                        <DivDescription
                          style={{
                            marginTop: "5%",
                            fontWeight: "bold",
                          }}
                        >
                          Descrição:
                        </DivDescription>
                        <DivDescription
                          style={{
                            marginTop: "7%",
                            fontFamily: "Montserrat",
                            fontSize: "12px",
                          }}
                        >
                          {num.descricao}
                        </DivDescription>
                      </CenterImages>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </DivSwitch>
              <MyHR />
              <BodyBooks>
                {Livros[0].books?.map((num) => (
                  <GridBooks key={num.id}>
                    <img src={num.imagem} alt="Livro" />
                    <ContentBook>
                      <div>
                        <h2>{num.titulo}</h2>
                      </div>
                      <h4>{`${num.acessos} reads`}</h4>
                      <Box
                        className="box"
                        component="fieldset"
                        mb={3}
                        borderColor="transparent"
                      >
                        <Typography component="legend" />
                        <Rating name="read-only" value={num.rating} readOnly />
                      </Box>
                      <Buttao
                        variant="outlined"
                        color="primary"
                        style={{
                          textAlign: "center",
                          marginTop: "-15px",
                        }}
                      >
                        Ler
                      </Buttao>
                    </ContentBook>
                  </GridBooks>
                ))}
              </BodyBooks>
            </>
          )}
          {resposta.length !== 0 && (
            <GridBooks2 key={resposta[0].id}>
              <img src={resposta[0].imagem} alt="Livro" />
              <ContentBook>
                <span style={{ fontSize: "20px" }}>{resposta[0].titulo}</span>
                <h4>{`${resposta[0].acessos} reads`}</h4>
                <Box
                  className="box"
                  component="fieldset"
                  mb={3}
                  borderColor="transparent"
                >
                  <Typography component="legend" />
                  <Rating
                    name="read-only"
                    value={resposta[0].rating}
                    readOnly
                  />
                </Box>
                <Buttao
                  variant="outlined"
                  color="primary"
                  style={{
                    textAlign: "center",
                    marginTop: "-15px",
                  }}
                >
                  Ler
                </Buttao>
              </ContentBook>
            </GridBooks2>
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

export default Main;
