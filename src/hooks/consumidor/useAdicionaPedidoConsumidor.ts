/* IMPORTS */
import { useRecoilState } from "recoil";
import { consumidores } from "../../states/atom";
import ICompra from "../../interfaces/compra";
import IConsumidor from "../../interfaces/consumidor";

/************************
Recebe uma compra (ICompra)
Então verifica se o nome de cada autor da compra é igual ao nome do consumidor na lista de consumidores
Se sim, o id (string) desta compra será adicionado dentro dos pedidos do consumidor
Após isso, é gerada uma nova lista de consumidores (setListaConsumidores)
************************/
function useAdicionaPedidoConsumidor(): ((compra: ICompra) => void) {
  const [listaConsumidores, setListaConsumidores] =
    useRecoilState(consumidores);
  return (compra: ICompra) => {
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
};

export default useAdicionaPedidoConsumidor;