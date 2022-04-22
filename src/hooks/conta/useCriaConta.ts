/* IMPORTS */
import { useSetRecoilState } from "recoil";
import { contaAtual } from "../../states/atom";
import { nanoid } from "nanoid";
import { idSize } from "../../utils/idFormat";
import IConta from "../../interfaces/conta";

/************************
O hook pega a conta (IConta) que está sendo criada ou reaberta
Então ele verifica se a conta já existe (possúi id) ou se é uma conta nova
Caso seja nova ele cria uma conta com um novo id, caso contrário só passa a conta diretamente para o estado global
************************/
function useCriaConta(): ((conta: IConta) => void) {
  const setConta = useSetRecoilState(contaAtual);
  return (conta: IConta) => {
    if (conta.id === "") {
      setConta({
        nome: conta.nome,
        consumidores: [],
        compras: [],
        id: nanoid(idSize),
      });
    } else {
      setConta(conta);
    }
  };
}

export default useCriaConta;
