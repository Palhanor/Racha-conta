import { useSetRecoilState } from "recoil";
import { compras } from "../states/atom";
import ICompra from "../interfaces/compra";
import useAdicionaPedidoConsumidor from "./useAdicionaPedidoConsumidor";

const useAdicionaCompra = () => {
  const setListaCompras = useSetRecoilState(compras);
  const adicionaPedidoConsumidor = useAdicionaPedidoConsumidor();
  return (compra: ICompra) => {
    if (compra.autores.length === 0)
      throw new Error("Adicione ao menos um autor para a compra");
    if (!compra.preco) throw new Error("Adicione um preço para a compra");
    setListaCompras((listaAntiga) => [...listaAntiga, compra]);
    adicionaPedidoConsumidor(compra);
  };
};

export default useAdicionaCompra;
