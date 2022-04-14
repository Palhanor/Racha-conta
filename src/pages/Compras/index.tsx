import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";
import Navegacao from "../../components/Navegacao";
import IConsumidor from "../../interfaces/consumidor";
import { v4 as uuidv4 } from "uuid";
import ListaCompras from "./ListaCompras";
import { useRecoilState, useRecoilValue } from "recoil";
import { nomeConta, consumidores, compras } from "../../states/atom";
import {
  Botao,
  Input,
  Label,
  Titulo,
  Container,
  ListaContainer,
  ListaTitulo,
} from "../../components/StyledComponents";

export default function Compras() {

  const conta = useRecoilValue(nomeConta);
  const [listaConsumidores, setListaConsumidores] = useRecoilState(consumidores)
  const [listaCompras, setListaCompras] = useRecoilState(compras)

  const [nomePedido, setNomePedido] = useState<string>("");
  const [precoPedido, setPrecoPedido] = useState<number | null>(0);
  const [autoresPedido, setAutoresPedido] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!conta) navigate("/");
  });

  const multiselectStyle = {
    searchBox: {
      // Input e container das tags
      cursor: "pointer",
      color: "#426D77",
      border: "1px solid #426D77",
      borderRadius: "5px",
      marginBottom: "1rem",
      padding: ".5rem",
      fontFamily: "Marcellus SC",
    },
    chips: {
      // Tag contendo o valor selecionado
      background: "#426D77",
      borderRadius: "5px",
    },
    optionContainer: {
      // Lista contendo os valores para selecionar
      marginTop: "-1rem",
    },
  };

  function atribuirPedido(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (autoresPedido.length === 0) {
      alert("Adicione ao menos um autor para o pedido");
      return;
    }
    if (!precoPedido) {
      alert("Adicione um preço para o pedido");
      return;
    }

    const novoPedido = {
      nome: nomePedido,
      preco: precoPedido / 100,
      autores: [...autoresPedido],
      id: uuidv4(),
    };
    setListaCompras([...listaCompras, novoPedido]);

    const novaListaClientes: IConsumidor[] = listaConsumidores.map(
      (dadosCliente) => {
        const listaDeQuemFezPedido = [...novoPedido.autores];
        if (listaDeQuemFezPedido.indexOf(dadosCliente.nome) === -1) {
          return { ...dadosCliente };
        } else {
          return {
            ...dadosCliente,
            pedidos: [...dadosCliente.pedidos, novoPedido],
          };
        }
      }
    );
    setListaConsumidores(novaListaClientes);
    setNomePedido("");
    setPrecoPedido(0);
  }

  function mascaraPreco(valor: number | null) {
    if (!valor) valor = 0;
    const valorStr = valor.toString().padStart(3, "0");
    const valorArr = valorStr.split("");
    const newNumInt = valorArr.slice(0, valorArr.length - 2);
    const newNumFloat = valorArr.slice(valorArr.length - 2, valorArr.length);
    return `R$ ${newNumInt.join("")},${newNumFloat.join("")}`;
  }

  function pegaPreco(valor: string) {
    const removeMascaraMonetaria = valor.replace("R$ ", "").replace(",", "");
    const valorDoInputStr = parseInt(removeMascaraMonetaria);
    return valorDoInputStr;
  }

  return (
    <>
      <Container top>
        <form onSubmit={(e) => atribuirPedido(e)}>
          <Titulo secondary>Nova compra</Titulo>
          <Multiselect
            isObject={false}
            style={multiselectStyle}
            placeholder="Selecione os compradores"
            onRemove={(e) => setAutoresPedido(e)}
            onSelect={(e) => setAutoresPedido(e)}
            options={listaConsumidores.map((cliente) => cliente.nome)}
          />
          <Label htmlFor="nomeCompra">Nome da compra</Label>
          <Input
            type="text"
            name="nomeCompra"
            id="nomeCompra"
            placeholder="Nome da compra"
            required
            value={nomePedido}
            onChange={(e) => setNomePedido(e.target.value)}
          />
          <Label htmlFor="precoCompra">Preço da compra</Label>
          <Input
            type="text"
            name="precoCompra"
            id="precoCompra"
            onFocus={(e) => {
              const valueLength = e.target.value.length * 2;
              e.target.setSelectionRange(valueLength, valueLength);
            }}
            required
            value={mascaraPreco(precoPedido)}
            onChange={(e) => setPrecoPedido(pegaPreco(e.target.value))}
          />
          <Botao>Adicionar</Botao>
        </form>
      </Container>
      <ListaContainer>
        <ListaTitulo>Compras</ListaTitulo>
        {<ListaCompras listaPedidos={listaCompras} />}
      </ListaContainer>
      <Navegacao />
    </>
  );
}
