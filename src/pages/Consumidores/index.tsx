/* IMPORTS */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ListaConsumidores from "./ListaConsumidores";
import Navegacao from "../../components/Navegacao";
import useConsumidores from "../../hooks/useConsumidores";
import {
  Botao,
  Input,
  Label,
  Titulo,
  Container,
  ListaContainer,
  ListaTitulo,
} from "../../components/StyledComponents";
import useConta from "../../hooks/useConta";

/* COMPONENTE */
export default function Consumidores() {

  /* ESTADO DO COMPONENTE */
  const [nomeConsumidor, setNomeConsumidor] = useState<string>("");

  /* HOOK DO REACT ROUTER */
  const navigate = useNavigate();

  /* HOOK PERSONALIZADO */
  const { listaConsumidores, adicionaConsumidor } = useConsumidores();
  const { conta } = useConta();

  /* REDIRECIONADOR */
  useEffect(() => {
    if (!conta.id) navigate("/");
    console.log("Lista de consumidores: ", listaConsumidores)
  }, [listaConsumidores, conta.id, navigate]);

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
        <ListaConsumidores listaConsumidores={listaConsumidores} /> {/* COMPONENTE */}
      </ListaContainer>
      <Navegacao /> {/* COMPONENTE */}
    </>
  );
}
