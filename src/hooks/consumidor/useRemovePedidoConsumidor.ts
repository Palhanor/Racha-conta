/* IMPORT */
import { useSetRecoilState } from "recoil";
import { consumidores } from "../../states/atom";

/************************
Recebe o id (string) de um determinado pedido
Então acessa a lista de consumidores removendo o pedido de dentro de cada consumidor (setListaConsumidores)
************************/
function useRemovePedidoConsumidor(): ((pedidoID: (string | undefined)) => void) {
  const setListaConsumidores = useSetRecoilState(consumidores);
  return (pedidoID: (string | undefined)) => {
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
};

export default useRemovePedidoConsumidor;
