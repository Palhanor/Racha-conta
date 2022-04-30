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

  function adicionaConsumidor(consumidor: IConsumidor): void | ErrorConstructor {
    if (consumidor.id === "") {
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
    } else {
      const novaListaConsumidores = [...listaConsumidores, consumidor];
      setListaConsumidores(novaListaConsumidores);
      atualizaContaConsumidores(novaListaConsumidores);
    }
  }

  function removeConsumidor(consumidorID: string): void {
    const novaListaConsumidores = listaConsumidores.filter(
      (consumidor) =>
        consumidor.id !== consumidorID
    );
    setListaConsumidores(novaListaConsumidores);
    atualizaContaConsumidores(novaListaConsumidores);
  }

  function adicionaPedidoConsumidor(compra: ICompra): void {
    const listaAutores: string[] = [...compra.autores];
    const novaListaConsumidores: IConsumidor[] = listaConsumidores.map(
      (dadosConsumidor) => {
        if (listaAutores.some((autor) => autor === dadosConsumidor.nome)) {
          return {
            ...dadosConsumidor,
            pedidos: [...dadosConsumidor.pedidos, compra.id],
          };
        }
        return { ...dadosConsumidor };
      }
    );
    setListaConsumidores(novaListaConsumidores);
    atualizaContaConsumidores(novaListaConsumidores);
  }

  function removePedidoConsumidor(pedidoID: string): void {
    const novaListaConsumidores = listaConsumidores.map((dadosConsumidor) => {
      return {
        ...dadosConsumidor,
        pedidos: dadosConsumidor.pedidos.filter(
          (pedido) => pedido !== pedidoID
        ),
      };
    });
    setListaConsumidores(novaListaConsumidores);
    atualizaContaConsumidores(novaListaConsumidores);
  }

  return {
    listaConsumidores,
    adicionaConsumidor,
    removeConsumidor,
    adicionaPedidoConsumidor,
    removePedidoConsumidor,
    setListaConsumidores
  };
}

export default useConsumidores;
