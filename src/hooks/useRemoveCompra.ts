import { useSetRecoilState } from "recoil";
import { compras } from "../states/atom";
import useRemovePedidoConsumidor from "./useRemovePedidoConsumidor";

const useRemoveCompra = () => {
  const setListaCompras = useSetRecoilState(compras);
  const removePedidoConsumidor = useRemovePedidoConsumidor();
  return (pedidoID: string | undefined) => {
    removePedidoConsumidor(pedidoID);
    setListaCompras((velhaLista) =>
      velhaLista.filter((velhoCompra) => velhoCompra.id !== pedidoID)
    );
  };
};

export default useRemoveCompra;
