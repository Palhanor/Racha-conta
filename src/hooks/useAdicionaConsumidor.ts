import { useRecoilState } from "recoil";
import { consumidores } from "../states/atom";
import { v4 as uuidv4 } from "uuid";

const useAdicionaConsumidor = (): ((
  nomeConsumidor: string
) => void | ErrorConstructor) => {
  const [listaConsumidores, setListaConsumidores] =
    useRecoilState(consumidores);
  return (nomeConsumidor: string) => {
    const nomeDuplicado = listaConsumidores.find(
      (consumidorVirificado) => consumidorVirificado.nome === nomeConsumidor
    );

    if (nomeDuplicado) {
      throw new Error("O nome dos consumidores devem ser diferentes entre si");
    }

    const novoConsumidor = {
      nome: nomeConsumidor,
      pedidos: [],
      id: uuidv4(),
    };

    setListaConsumidores([...listaConsumidores, novoConsumidor]);
  };
};

export default useAdicionaConsumidor;
