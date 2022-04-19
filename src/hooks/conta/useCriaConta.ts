import { useSetRecoilState } from "recoil";
import { contaAtual } from "../../states/atom";
import { nanoid } from "nanoid";
import { idSize } from "../../utils/idFormat";

function useCriaConta() {
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
