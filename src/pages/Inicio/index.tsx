import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { Botao, Input, Label, Image, Titulo, Container } from "../../components/StyledComponents";
import { useRecoilState, useSetRecoilState } from "recoil";
import { nomeConta, consumidores } from "../../states/atom";
const ilustracao: string =
  require("../../assets/InitialIllustration.svg").default;

// TO DO: Fazer um sistema que, caso já haja uma conta cadastrada, retorne para a página anterior
export default function Inicio() {

    const [conta, setConta] = useRecoilState(nomeConta)
    const setListaConsumidores = useSetRecoilState(consumidores)
    const [consumidor, setConsumidor] = useState<string>("");

  const navigate = useNavigate();

  function criaMesa(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setListaConsumidores((listaAnterior) => [
      ...listaAnterior,
      { nome: consumidor, pedidos: [], total: 0, id: uuidv4() },
    ]);
    setConsumidor("")
    navigate("/consumidores", { replace: true });
  }

  return (
    <>
      <Titulo>Racha conta</Titulo>
      <Image src={ilustracao} alt="Ilustracao do Racha conta" />
      <Container bottom>
        <form onSubmit={(e) => criaMesa(e)}>
          {/*TO DO: Mudar para um h2*/}
          <Titulo secondary>Nova conta</Titulo>
          <Label htmlFor="conta">Nome da conta</Label>
          <Input
            type="text"
            name="conta"
            id="conta"
            placeholder="Insira o nome da conta"
            required
            value={conta}
            onChange={(e) => setConta(e.target.value)}
          />
          <Label htmlFor="consumidor">Nome do consumidor</Label>
          <Input
            type="text"
            name="consumidor"
            id="consumidor"
            placeholder="Insira seu nome"
            required
            value={consumidor}
            onChange={(e) => setConsumidor(e.target.value)}
          />
          <Botao type="submit">Criar</Botao>
        </form>
      </Container>
    </>
  );
}
