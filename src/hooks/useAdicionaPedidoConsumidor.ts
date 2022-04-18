import { useRecoilState } from "recoil";
import ICompra from "../interfaces/compra";
import { consumidores } from "../states/atom";

const useAdicionaPedidoConsumidor = () => {
  const [listaConsumidores, setListaConsumidores] =
    useRecoilState(consumidores);
  return (compra: ICompra) => {
    const novaListaConsumidores = listaConsumidores.map((dadosConsumidor) => {
      const listaDeQuemFezCompra = [...compra.autores];
      if (listaDeQuemFezCompra.indexOf(dadosConsumidor.nome) === -1) {
        return { ...dadosConsumidor };
      } else {
        return {
          ...dadosConsumidor,
          pedidos: [...dadosConsumidor.pedidos, compra],
        };
      }
    });
    setListaConsumidores(novaListaConsumidores);
  };
};

export default useAdicionaPedidoConsumidor;
