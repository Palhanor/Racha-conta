import { useRecoilState } from "recoil";
import { consumidores } from "../states/atom";
import { nanoid } from "nanoid";
import { idSize } from "../utils/idFormat";
import IConsumidor from "../interfaces/consumidor";
import ICompra from "../interfaces/compra";
import useConta from "./useConta";

function useConsumidores() {
  const [listaConsumidores, setListaConsumidores] =
    useRecoilState(consumidores);
  const { atualizaContaConsumidores } = useConta();

  // Adiciona um consumidores dentro da lista de consumidores.
  function adicionaConsumidor(
    consumidor: IConsumidor
  ): void | ErrorConstructor {
    const nomeDuplicado: boolean = listaConsumidores.some(
      (consumidorVirificado) => consumidorVirificado.nome === consumidor.nome
    );
    if (nomeDuplicado)
      throw new Error("O nome dos consumidores devem ser diferentes entre si");
    const novoConsumidor: IConsumidor = {
      ...consumidor,
      id: nanoid(idSize),
    };
    const novaListaConsumidores = [...listaConsumidores, novoConsumidor];
    setListaConsumidores(novaListaConsumidores);
    atualizaContaConsumidores(novaListaConsumidores);
  }

  // Remove um consumidor de dentro da lista de consumidores.
  function removeConsumidor(consumidorID: string): void {
    const novaListaConsumidores = listaConsumidores.filter(
      (consumidor) => consumidor.id !== consumidorID
    );
    setListaConsumidores(novaListaConsumidores);
    atualizaContaConsumidores(novaListaConsumidores);
  }

  // Adiciona uma compra dentro da lista de compras de cada consumidor.
  function adicionaPedidoConsumidor(compra: ICompra): void {
    const listaAutores: string[] = [...compra.autores];
    const novaListaConsumidores: IConsumidor[] = listaConsumidores.map(
      (consumidor) => {
        if (listaAutores.some((autor) => autor === consumidor.nome)) {
          return {
            ...consumidor,
            pedidos: [...consumidor.pedidos, compra.id],
          };
        }
        return { ...consumidor };
      }
    );
    setListaConsumidores(novaListaConsumidores);
    atualizaContaConsumidores(novaListaConsumidores);
  }

  // Remove uma compra de dentro da lista de compras de cada consumidor.
  function removePedidoConsumidor(pedidoID: string): void {
    const novaListaConsumidores = listaConsumidores.map((consumidor) => {
      return {
        ...consumidor,
        pedidos: consumidor.pedidos.filter(
          (pedido) => pedido !== pedidoID
        ),
      };
    });
    setListaConsumidores(novaListaConsumidores);
    atualizaContaConsumidores(novaListaConsumidores);
  }

  return {
    listaConsumidores,
    setListaConsumidores,
    adicionaConsumidor,
    removeConsumidor,
    adicionaPedidoConsumidor,
    removePedidoConsumidor,
  };
}

export default useConsumidores;
