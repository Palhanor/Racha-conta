import { useRecoilState } from "recoil";
import { consumidores } from "../../states/atom";
import { nanoid } from "nanoid";
import { idSize } from "../../utils/idFormat";

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
      id: nanoid(idSize),
    };

    setListaConsumidores([...listaConsumidores, novoConsumidor]);
  };
};

export default useAdicionaConsumidor;
