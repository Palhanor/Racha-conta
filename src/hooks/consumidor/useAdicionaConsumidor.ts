/* IMPORTS */
import { useRecoilState } from "recoil";
import { consumidores } from "../../states/atom";
import { nanoid } from "nanoid";
import { idSize } from "../../utils/idFormat";

/************************
O hook recebe o nome do consumidor (string)
Então valida se há um nome igual na lista de consumidores
Por fim, caso o nome seja válido, é criado um novo objeto (IConsumidor) e adicionado no fim da lista de consumidores
************************/
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
