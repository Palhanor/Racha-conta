/* IMPORT */
import { useSetRecoilState } from "recoil";
import { consumidores } from "../../states/atom";

/************************
O hook recebeo id (string) de um pedido
Então pega a lista de consumidores e filtra os pedidos destes considerando o id passado
Por fim configura a nova lista como oficial
************************/
function useRemovePedidoConsumidor(): ((pedidoID: (string | undefined)) => void) {
  const setListaConsumidores = useSetRecoilState(consumidores);
  return (pedidoID: (string | undefined)) => {
    setListaConsumidores((velhaListaConsumidores) =>
      velhaListaConsumidores.map((dadosConsumidor) => {
        return {
          ...dadosConsumidor,
          pedidos: dadosConsumidor.pedidos.filter(
            (pedido) => pedido.id !== pedidoID
          )
        };
      })
    );
  };
};

export default useRemovePedidoConsumidor;
