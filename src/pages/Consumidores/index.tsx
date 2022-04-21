/* IMPORTS */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { consumidores, contaAtual } from "../../states/atom";
import useAdicionaConsumidor from "../../hooks/consumidor/useAdicionaConsumidor";
import ItemConsumidor from "./ItemConsumidor";
import Navegacao from "../../components/Navegacao";
import {
  Botao,
  Input,
  Label,
  Titulo,
  Container,
  Lista,
  ListaContainer,
  ListaTitulo,
} from "../../components/StyledComponents";

/* COMPONENTE */
export default function Consumidores() {

  /* ESTADOS GLOBAIS RECOIL */
  const conta = useRecoilValue(contaAtual);
  const listaConsumidores = useRecoilValue(consumidores);

  /* ESTADO DO COMPONENTE */
  const [nomeConsumidor, setNomeConsumidor] = useState<string>("");

  /* HOOK DO REACT ROUTER */
  const navigate = useNavigate();

  /* HOOK PERSONALIZADO */
  const adicionaConsumidor = useAdicionaConsumidor();

  /* REDIRECIONADOR */
  useEffect(() => {
    if (!conta.nome) navigate("/");
  });

  /* ADICIONAR NO CONSUMIDOR À LISTA */
  function adicionar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      adicionaConsumidor(nomeConsumidor);
      setNomeConsumidor("");
    } catch (err) {
      alert(err);
    }
  }

  /* JSX */
  return (
    <>
      <Container top>
        <form onSubmit={adicionar}>
          <Titulo secondary>Novo consumidor</Titulo>
          <Label htmlFor="consumidor">Novo consumidor</Label>
          <Input
            type="text"
            name="consumidor"
            id="consumidor"
            placeholder="Nome do consumidor"
            value={nomeConsumidor}
            onChange={(e) => setNomeConsumidor(e.target.value)}
            required
          />
          <Botao>Adicionar</Botao>
        </form>
      </Container>
      <ListaContainer>
        <ListaTitulo>Consumidores</ListaTitulo>
        <Lista>
          {listaConsumidores.map((dadosConsumidor) => (
            <ItemConsumidor key={dadosConsumidor.id} {...dadosConsumidor} />
          ))} {/* COMPONENTE */}
        </Lista>
      </ListaContainer>
      <Navegacao /> {/* COMPONENTE */}
    </>
  );
}
