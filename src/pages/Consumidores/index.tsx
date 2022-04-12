import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navegacao from "../../components/Navegacao";
import { IConsumidoresProps } from "../../interfaces/props";
import { v4 as uuidv4 } from "uuid";
import ItemConsumidor from "./ItemConsumidor";

import {
  Botao,
  Input,
  Label,
  Titulo,
  Form,
  Lista,
  ListaContainer,
  ListaTitulo
} from "../../components/Styled";

export default function Consumidores(props: IConsumidoresProps) {
  const { conta, listaConsumidores, setListaConsumidores } = props;
  const [novoConsumidor, setNovoConsumidor] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!conta) navigate("/");
  });

  function novoCliente(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      listaConsumidores.find(
        (clienteVirificado) => clienteVirificado.nome === novoConsumidor
      )
    ) {
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
      <Form top onSubmit={(e) => novoCliente(e)}>
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
      </Form>
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
