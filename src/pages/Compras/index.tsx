import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Multiselect from "multiselect-react-dropdown";
import Navegacao from "../../components/Navegacao";
import { IComprasProps } from "../../interfaces/props";
import IConsumidor from "../../interfaces/consumidor";
import "../../styles/global.scss";
import { v4 as uuidv4 } from "uuid";
import * as Exattrs from "./Exattrs";
import ListaCompras from "./ListaCompras";

export default function Compras(props: IComprasProps) {
  const {
    conta,
    listaCompras,
    setListaCompras,
    listaConsumidores,
    setListaConsumidores,
  } = props;

  const [nomePedido, setNomePedido] = useState<string>("");
  const [precoPedido, setPrecoPedido] = useState<number | null>(0);
  const [autoresPedido, setAutoresPedido] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (conta === "") navigate("/");
  });

  const atribuirPedido = (e: React.FormEvent<HTMLFormElement>) => {
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

    const novaListaClientes: IConsumidor[] = listaConsumidores.map((dadosCliente) => {
      const listaDeQuemFezPedido = [...novoPedido.autores];
      if (listaDeQuemFezPedido.indexOf(dadosCliente.nome) === -1) {
        return { ...dadosCliente };
      } else {
        return {
          ...dadosCliente,
          pedidos: [...dadosCliente.pedidos, novoPedido],
        };
      }
    });
    setListaConsumidores(novaListaClientes);
    setNomePedido("");
    setPrecoPedido(0);
  };

  return (
    <>
      <form {...Exattrs.form} onSubmit={(e) => atribuirPedido(e)}>
        <h1 {...Exattrs.formTitle}>Nova compra</h1>
        <Multiselect
          {...Exattrs.multiselect}
          onRemove={(e) => setAutoresPedido(e)}
          onSelect={(e) => setAutoresPedido(e)}
          options={listaConsumidores.map((cliente) => cliente.nome)}
        />
        <label {...Exattrs.labelNome}>Nome da compra</label>
        <input
          {...Exattrs.inputNome}
          value={nomePedido}
          onChange={(e) => setNomePedido(e.target.value)}
        />
        <label {...Exattrs.labelPreco}>Preço da compra</label>
        <input
          {...Exattrs.inputPreco}
          value={Exattrs.mascaraPreco(precoPedido)}
          onChange={(e) => setPrecoPedido(Exattrs.pegaPreco(e.target.value))}
        />
        <button {...Exattrs.botao}>Adicionar</button>
      </form>
      <div {...Exattrs.containerLista}>
        <h2 {...Exattrs.listaTitulo}>Compras</h2>
        {<ListaCompras listaPedidos={listaCompras} />}
      </div>
      <Navegacao />
    </>
  );
}
