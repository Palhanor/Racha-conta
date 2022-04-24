import { nanoid } from "nanoid";
import { useRecoilState, useSetRecoilState } from "recoil";
import IConta from "../interfaces/conta";
import { compras, consumidores, contaAtual } from "../states/atom";
import { idSize } from "../utils/idFormat";
import useCompras from "./useCompras";
import useConsumidores from "./useConsumidores";

function useConta() {
  const [conta, setConta] = useRecoilState(contaAtual);
  const setListaConsumidores = useSetRecoilState(consumidores);
  const setListaCompras = useSetRecoilState(compras);
	const { listaConsumidores } = useConsumidores();
	const { listaCompras } = useCompras();
  const historico: IConta[] = listaContas();

  function adicionaConta(conta: IConta) {
    if (!localStorage.getItem("historicoContas")) {
      const listaConta: IConta[] = [conta];
      localStorage.setItem("historicoContas", JSON.stringify(listaConta))
    } else {
      const historico: (string | null) = localStorage.getItem("historicoContas");
      const historicoFormatado: IConta[] = JSON.parse(historico as string);
      historicoFormatado.push(conta);
      localStorage.setItem("historicoContas", JSON.stringify(historicoFormatado));
    }
  };

	function atualizaConta() {
		setConta((conta) => {
			return {
				...conta,
				consumidores: [...listaConsumidores],
				compras: [...listaCompras],
			};
		});
	};

  function criaConta(conta: IConta) {
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

  function listaContas() {
    const dadosArmazenados: (string | null) = localStorage.getItem("historicoContas");
    if (!dadosArmazenados) {
        return []
    }
    return [...JSON.parse(dadosArmazenados)];
  };

  function removeConta(contaID: (string | undefined)) {
      const novoHistorico: IConta[] = historico.filter((conta) => conta.id !== contaID);
      localStorage.setItem("historicoContas", JSON.stringify(novoHistorico));
  }

  function resetaConta() {
    setConta({ nome: "", consumidores: [], compras: [], id: "" });
    setListaConsumidores([]);
    setListaCompras([]);
}

  return {
    conta,
    historico,
    adicionaConta,
    atualizaConta,
    criaConta,
    removeConta,
    resetaConta
  }
}

export default useConta;
