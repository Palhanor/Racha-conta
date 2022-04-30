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

  function adicionaCompra(compra: ICompra): void | ErrorConstructor {
    if(!compra.id) {
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
    } else {
      const novaListaCompras = [...listaCompras, compra];
      setListaCompras(novaListaCompras);
      adicionaPedidoConsumidor(compra);
      atualizaContaCompras(novaListaCompras);

    }
  }

  function removeCompra(compraID: string): void {
    removePedidoConsumidor(compraID);
    const novaListaCompras = listaCompras.filter(
      (velhoCompra) => velhoCompra.id !== compraID
    );
    setListaCompras(novaListaCompras);
    atualizaContaCompras(novaListaCompras);
  }

  function encontraCompra(compraID: string, compras?: ICompra[]): ICompra {
    const compraAtual = compras
      ? compras.find((compra) => compra.id === compraID)
      : listaCompras.find((compra) => compra.id === compraID);
    if (!compraAtual) return { nome: "", preco: 0, autores: [], id: "" };
    return compraAtual;
  }

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
    adicionaCompra,
    removeCompra,
    encontraCompra,
    removeAutorCompra,
    setListaCompras
  };
}

export default useCompras;
