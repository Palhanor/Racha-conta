/* IMPORTS */
import { useSetRecoilState } from "recoil";
import { consumidores } from "../../states/atom";

/************************
Recebe o id (string) de um determinado consumidor
Então remove este mesmo consumidor de dentro da lista de consumidores (setListaConsumidores)
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
