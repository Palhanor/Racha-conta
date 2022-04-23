/* IMPORTS */
import { useRecoilState } from "recoil";
import { consumidores } from "../../states/atom";
import { nanoid } from "nanoid";
import { idSize } from "../../utils/idFormat";
import IConsumidor from "../../interfaces/consumidor";

/************************
Recebe o nome (string) de um novo consumidor
Então verifica se este nome já foi usado, disparando um erro em caso afirmativo
Por fim, cria um novo objeto de consumidor e o adiciona dentro da lista de consumidores (setListaConsumidores)
************************/
function useAdicionaConsumidor(): ((
  nomeConsumidor: string
) => (void | ErrorConstructor)) {
  const [listaConsumidores, setListaConsumidores] =
    useRecoilState(consumidores);
  return (nomeConsumidor: string) => {
    const nomeDuplicado: boolean = listaConsumidores.some(
      (consumidorVirificado) => consumidorVirificado.nome === nomeConsumidor
    );
    if (nomeDuplicado) throw new Error("O nome dos consumidores devem ser diferentes entre si");
    const novoConsumidor: IConsumidor = {
      nome: nomeConsumidor,
      pedidos: [],
      id: nanoid(idSize),
    };
    setListaConsumidores([...listaConsumidores, novoConsumidor]);
  };
};

export default useAdicionaConsumidor;
