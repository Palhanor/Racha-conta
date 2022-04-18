import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Botao,
  Input,
  Label,
  Image,
  Titulo,
  Container,
} from "../../components/StyledComponents";
import { useRecoilState } from "recoil";
import { nomeConta } from "../../states/atom";
import useAdicionaConsumidor from "../../hooks/useAdicionaConsumidor";
const ilustracao: string =
  require("../../assets/InitialIllustration.svg").default;

export default function Inicio() {
  const [conta, setConta] = useRecoilState(nomeConta);
  const [nomeConsumidor, setNomeConsumidor] = useState<string>("");
  const adicionaConsumidor = useAdicionaConsumidor();

  const navigate = useNavigate();

  function criarConta(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      adicionaConsumidor(nomeConsumidor);
      setNomeConsumidor("");
      navigate("/consumidores", { replace: true });
    } catch (err) {
      alert(err);
    }

  }

  return (
    <>
      <Titulo>Racha conta</Titulo>
      <Image src={ilustracao} alt="Ilustracao do Racha conta" />
      <Container bottom>
        <form onSubmit={(e) => criarConta(e)}>
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
            value={nomeConsumidor}
            onChange={(e) => setNomeConsumidor(e.target.value)}
          />
          <Botao type="submit">Criar</Botao>
        </form>
      </Container>
    </>
  );
}
