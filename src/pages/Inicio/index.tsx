/* IMPORTS */
import { useState, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAdicionaConsumidor from "../../hooks/consumidor/useAdicionaConsumidor";
import useCriaConta from "../../hooks/conta/useCriaConta";
import {
  Botao,
  Input,
  Label,
  Image,
  Titulo,
  Container,
} from "../../components/StyledComponents";
import { useRecoilValue } from "recoil";
import { contaAtual } from "../../states/atom";
// Problema de importação
const ilustracao: string =
  require("../../assets/InitialIllustration.svg").default;

/* COMPONENTE */
export default function Inicio() {

  const contaGlobal = useRecoilValue(contaAtual)

  /* ESTADOS DO COMPONENTE */
  const [conta, setConta] = useState("");
  const [nomeConsumidor, setNomeConsumidor] = useState<string>("");

  /* HOOK DO REACT ROUTER */
  const navigate = useNavigate();

  /* HOOKS PERSONALIZADOS */
  const adicionaConsumidor = useAdicionaConsumidor();
  const criaConta = useCriaConta();

  useEffect(() => {
    if (contaGlobal.id !== "") navigate("/consumidores")
  })

  /* CRIAR NOVA CONTA */
  function criar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      criaConta(conta)
      adicionaConsumidor(nomeConsumidor);
      setNomeConsumidor("");
      navigate("/consumidores", { replace: true });
    } catch (err) {
      alert(err);
    }
  }

  /* JSX */
  return (
    <>
      <Titulo>Splittyn</Titulo>
      <Image src={ilustracao} alt="Ilustracao do Splittyn" />
      <Container bottom>
        <form onSubmit={criar}>
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
