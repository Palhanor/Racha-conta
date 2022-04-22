/* IMPORTS */
import { useSetRecoilState } from "recoil";
import { compras } from "../../states/atom";
import useRemovePedidoConsumidor from "../consumidor/useRemovePedidoConsumidor";

/************************
O Hook recebe o ID (string) de uma compra
Então passa o ID do pedido para o hook useRemovePedidoConsumidor()
E por fim filtra a lista de compras para remover o pedido que possúi este mesmo ID
************************/
function useRemoveCompra(): ((pedidoID: (string | undefined)) => void) {
  const setListaCompras = useSetRecoilState(compras);
  const removePedidoConsumidor = useRemovePedidoConsumidor();
  return (pedidoID: (string | undefined)) => {
    removePedidoConsumidor(pedidoID);
    setListaCompras((velhaLista) =>
      velhaLista.filter((velhoCompra) => velhoCompra.id !== pedidoID)
    );
  };
};

export default useRemoveCompra;
