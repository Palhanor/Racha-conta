/* IMPORTS */
import { useRecoilState } from "recoil";
import { consumidores } from "../../states/atom";
import ICompra from "../../interfaces/compra";

/************************
O hook recebe uma compra (ICompra)
Então cria uma nova lista de consumidores, passando essa nova lista como a lista oficial
Para criar a nova lista é verificado se o nome de cada consumidor está na lista de autores do pedido, e caso afirmativo a comnpra é adicionada dentro do campo de pedidos
************************/
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