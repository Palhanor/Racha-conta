import { useRecoilState } from "recoil";
import { consumidores } from "../states/atom";
import { nanoid } from "nanoid";
import { idSize } from "../utils/idFormat";
import IConsumidor from "../interfaces/consumidor";
import ICompra from "../interfaces/compra";

function useConsumidores() {
  const [listaConsumidores, setListaConsumidores] =
    useRecoilState(consumidores);

    function adicionaConsumidor(nomeConsumidor: string) {
    const nomeDuplicado: boolean = listaConsumidores.some(
      (consumidorVirificado) => consumidorVirificado.nome === nomeConsumidor
    );
    if (nomeDuplicado) throw new Error("O nome dos consumidores devem ser diferentes entre si");
    const novoConsumidor: IConsumidor = {
      nome: nomeConsumidor,
      pedidos: [],
      id: nanoid(idSize),
    };
    setListaConsumidores([...listaConsumidores, novoConsumidor]);
  };

  function removeConsumidor(consumidorID: (string | undefined)) {
    setListaConsumidores((listaAnterior) =>
      listaAnterior.filter(
        (consumidor) => consumidor.id !== consumidorID || consumidor.pedidos.length > 0
      )
    );
  };

  function adicionaPedidoConsumidor(compra: ICompra) {
    const listaAutores: string[] = [...compra.autores];
    const novaListaConsumidores: IConsumidor[] = listaConsumidores.map((dadosConsumidor) => {
      if (listaAutores.some((autor) => autor === dadosConsumidor.nome)) {
        return {
          ...dadosConsumidor,
          pedidos: [...dadosConsumidor.pedidos, compra.id],
        };
      }
      return { ...dadosConsumidor };
    });
    setListaConsumidores(novaListaConsumidores);
  };

  function removePedidoConsumidor(pedidoID: (string | undefined)) {
    setListaConsumidores((velhaListaConsumidores) =>
      velhaListaConsumidores.map((dadosConsumidor) => {
        return {
          ...dadosConsumidor,
          pedidos: dadosConsumidor.pedidos.filter(
            (pedido) => pedido !== pedidoID
          )
        };
      })
    );
  };

  return {
    listaConsumidores,
    adicionaConsumidor,
    removeConsumidor,
    adicionaPedidoConsumidor,
    removePedidoConsumidor
  }
};

export default useConsumidores;
