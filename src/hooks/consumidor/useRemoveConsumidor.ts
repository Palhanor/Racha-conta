/* IMPORTS */
import { useSetRecoilState } from "recoil";
import { consumidores } from "../../states/atom";

/************************
O hook recebe o ID (string) de um consumidor
Após isso é feito uma filtragem a lista de consumidores, removendo o consumidor que tenha um id igual
Também é mantido qualquer consumidor que tenha algum pedido em sua lista de pedidos (para evitar que um consumidor seja removido e a compra fique sem autores)
************************/
function useRemoveConsumidor(): ((consumidorID: (string | undefined)) => void) {
  const setListaConsumidores = useSetRecoilState(consumidores);
  return (consumidorID: (string | undefined)) => {
    setListaConsumidores((listaAnterior) =>
      listaAnterior.filter(
        (consumidor) => consumidor.id !== consumidorID || consumidor.pedidos.length > 0
      )
    );
  };
};

export default useRemoveConsumidor;
