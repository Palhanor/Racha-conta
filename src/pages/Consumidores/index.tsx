import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navegacao from "../../components/Navegacao";
import ItemConsumidor from "./ItemConsumidor";
import { useRecoilValue } from "recoil";
import { consumidores, nomeConta } from "../../states/atom";
import useAdicionaConsumidor from "../../hooks/useAdicionaConsumidor";
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

export default function Consumidores() {
  const conta = useRecoilValue(nomeConta);
  const listaConsumidores = useRecoilValue(consumidores);
  const [nomeConsumidor, setNomeConsumidor] = useState<string>("");
  const navigate = useNavigate();
  const adicionaConsumidor = useAdicionaConsumidor();

  useEffect(() => {
    if (!conta) navigate("/");
  });

  function adicionar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      adicionaConsumidor(nomeConsumidor);
      setNomeConsumidor("");
    } catch (err) {
      alert(err);
    }
  }

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
          ))}
        </Lista>
      </ListaContainer>
      <Navegacao />
    </>
  );
}
