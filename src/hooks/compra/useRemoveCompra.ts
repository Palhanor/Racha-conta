/* IMPORTS */
import { useSetRecoilState } from "recoil";
import { compras } from "../../states/atom";
import useRemovePedidoConsumidor from "../consumidor/useRemovePedidoConsumidor";

/************************
Recebe o id de uma compra
Então remove esta compra de dento dos consumidores (useRemovePedidoConsumidor)
E após isso remove a compra da lista de compras (setListaCompras)
************************/
function useRemoveCompra(): (pedidoID: string | undefined) => void {
  const setListaCompras = useSetRecoilState(compras);
  const removePedidoConsumidor = useRemovePedidoConsumidor();
  return (pedidoID: string | undefined) => {
    removePedidoConsumidor(pedidoID);
    setListaCompras((velhaLista) =>
      velhaLista.filter((velhoCompra) => velhoCompra.id !== pedidoID)
    );
  };
}

export default useRemoveCompra;
