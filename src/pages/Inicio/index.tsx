import React from "react";
import { useNavigate } from "react-router-dom";
import { IInicioProps } from "../../interfaces/props";

import { v4 as uuidv4 } from "uuid";
import { Botao, Input, Label, Image, Titulo, Form } from "../../components/Styled";
const ilustracao: string =
  require("../../assets/InitialIllustration.svg").default;

export default function Inicio(props: IInicioProps) {
  const { conta, setConta, consumidor, setConsumidor, setListaConsumidores } =
    props;

  const navigate = useNavigate();

  function criaMesa(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setListaConsumidores((listaAnterior) => [
      ...listaAnterior,
      { nome: consumidor, pedidos: [], total: 0, id: uuidv4() },
    ]);
    navigate("/consumidores", { replace: true });
  }

  return (
    <>
      <Titulo>Racha conta</Titulo>
      <Image src={ilustracao} alt="Ilustracao do Racha conta" />
      <Form bottom onSubmit={(e) => criaMesa(e)}>
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
      </Form>
    </>
  );
}
