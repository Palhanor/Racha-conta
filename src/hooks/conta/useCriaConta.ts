/* IMPORTS */
import { useSetRecoilState } from "recoil";
import { contaAtual } from "../../states/atom";
import { nanoid } from "nanoid";
import { idSize } from "../../utils/idFormat";

/************************
O hook pega o nome (string) da conta
Então ele cria um objeto (IConta) configurando o nome e o id, usando este como o novo estado global da contaAtual
************************/
function useCriaConta(): (nome: string) => void {
  const setConta = useSetRecoilState(contaAtual);
  return (nome: string) => {
    const novaConta = {
      nome: nome,
      consumidores: [],
      compras: [],
      id: nanoid(idSize),
    };
    setConta(novaConta);
  };
}

export default useCriaConta;
