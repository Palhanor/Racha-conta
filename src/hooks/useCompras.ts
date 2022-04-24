import { useRecoilState } from "recoil";
import { compras } from "../states/atom";
import { nanoid } from "nanoid";
import { idSize } from "../utils/idFormat";
import ICompra from "../interfaces/compra";
import useConsumidores from "./useConsumidores";

function useCompras() {
  const [listaCompras, setListaCompras] = useRecoilState(compras);
  const { adicionaPedidoConsumidor, removePedidoConsumidor } =
    useConsumidores();

  function adicionaCompra(
    nome: string,
    preco: number | null,
    autores: string[]
  ): void | ErrorConstructor {
    if (autores.length === 0)
      throw new Error("Adicione ao menos um autor para a compra");
    if (!preco) throw new Error("Adicione um preço para a compra");
    const novaCompra: ICompra = {
      nome: nome,
      preco: (preco as number) / 100,
      autores: [...autores],
      id: nanoid(idSize),
    };
    setListaCompras((listaAntiga) => [...listaAntiga, novaCompra]);
    adicionaPedidoConsumidor(novaCompra);
  }

  function encontraCompra(idCompra: string): ICompra {
    const compraAtual = listaCompras.find((compra) => compra.id === idCompra);
    if (!compraAtual) return { nome: "", preco: 0, autores: [], id: "" };
    return compraAtual;
  }

  function removeCompra(pedidoID: string | undefined): void {
    removePedidoConsumidor(pedidoID);
    setListaCompras((velhaLista) =>
      velhaLista.filter((velhoCompra) => velhoCompra.id !== pedidoID)
    );
  }

  return {
    listaCompras,
    adicionaCompra,
    encontraCompra,
    removeCompra,
  };
}

export default useCompras;
