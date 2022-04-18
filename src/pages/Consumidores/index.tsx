import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navegacao from "../../components/Navegacao";
import { v4 as uuidv4 } from "uuid";
import ItemConsumidor from "./ItemConsumidor";

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
import { useRecoilState, useRecoilValue } from "recoil";
import { consumidores, nomeConta } from "../../states/atom";

export default function Consumidores() {
  const conta = useRecoilValue(nomeConta);
  const [listaConsumidores, setListaConsumidores] =
    useRecoilState(consumidores);
  const [novoConsumidor, setNovoConsumidor] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!conta) navigate("/");
  });

  function novoCliente(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nomeDuplicado = listaConsumidores.find(
      (clienteVirificado) => clienteVirificado.nome === novoConsumidor
    );

    if (nomeDuplicado) {
      alert("O nome dos clientes devem ser diferentes entre si");
      setNovoConsumidor("");
      return;
    }

    setListaConsumidores([
      ...listaConsumidores,
      { nome: novoConsumidor, pedidos: [], id: uuidv4() },
    ]);
    setNovoConsumidor("");
  }

  return (
    <>
      <Container top>
        <form onSubmit={(e) => novoCliente(e)}>
          <Titulo secondary>Novo consumidor</Titulo>
          <Label htmlFor="cliente">Novo consumidor</Label>
          <Input
            type="text"
            name="cliente"
            id="cliente"
            placeholder="Nome do consumidor"
            value={novoConsumidor}
            onChange={(e) => setNovoConsumidor(e.target.value)}
            required
          />
          <Botao>Adicionar</Botao>
        </form>
      </Container>
      <ListaContainer>
        <ListaTitulo>Consumidores</ListaTitulo>
        <Lista>
          {listaConsumidores.map((dadosCliente) => (
            <ItemConsumidor key={dadosCliente.id} {...dadosCliente} />
          ))}
        </Lista>
      </ListaContainer>
      <Navegacao />
    </>
  );
}
