import { useRecoilState } from "recoil";
import { compras } from "../states/atom";
import { nanoid } from "nanoid";
import { idSize } from "../utils/idFormat";
import ICompra from "../interfaces/compra";
import useConsumidores from "./useConsumidores";
import useConta from "./useConta";

function useCompras() {
  const [listaCompras, setListaCompras] = useRecoilState(compras);
  const { adicionaPedidoConsumidor, removePedidoConsumidor } =
    useConsumidores();
  const { atualizaContaCompras } = useConta();

  // Adiciona uma compra dentro da lista de compras.
  function adicionaCompra(compra: ICompra): void | ErrorConstructor {
    if (compra.autores.length === 0)
      throw new Error("Adicione ao menos um autor para a compra");
    if (!compra.preco) throw new Error("Adicione um preço para a compra");
    const novaCompra: ICompra = {
      ...compra,
      preco: (compra.preco as number) / 100,
      id: nanoid(idSize),
    };
    const novaListaCompras = [...listaCompras, novaCompra];
    setListaCompras(novaListaCompras);
    adicionaPedidoConsumidor(novaCompra);
    atualizaContaCompras(novaListaCompras);
  }

  // Remove uma compra dentro da lista de compras.
  function removeCompra(compraID: string): void {
    removePedidoConsumidor(compraID);
    const novaListaCompras = listaCompras.filter(
      (compra) => compra.id !== compraID
    );
    setListaCompras(novaListaCompras);
    atualizaContaCompras(novaListaCompras);
  }

  // Retorna os dados da compra considerando seu id.
  function encontraCompra(compraID: string, compras?: ICompra[]): ICompra {
    const compraAtual = compras
      ? compras.find((compra) => compra.id === compraID)
      : listaCompras.find((compra) => compra.id === compraID);
    if (!compraAtual) return { nome: "", preco: 0, autores: [], id: "" };
    return compraAtual;
  }

  // Remove um consumidor de dentro da lista de autores da compra. Também apaga a compra caso esta fique sem consumidores.
  function removeAutorCompra(consumidorApagado: string) {
    const novaListaCompras = listaCompras
      .map((compra) => {
        return {
          ...compra,
          autores: compra.autores.filter(
            (autor) => autor !== consumidorApagado
          ),
        };
      })
      .filter((compra) => compra.autores.length !== 0);
    setListaCompras(novaListaCompras);
    atualizaContaCompras(novaListaCompras);
  }

  return {
    listaCompras,
    setListaCompras,
    adicionaCompra,
    removeCompra,
    encontraCompra,
    removeAutorCompra,
  };
}

export default useCompras;
