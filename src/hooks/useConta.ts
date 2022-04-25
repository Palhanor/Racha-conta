import { useRecoilState } from "recoil";
import { compras, consumidores, contaAtual } from "../states/atom";
import { nanoid } from "nanoid";
import { idSize } from "../utils/idFormat";
import IConta from "../interfaces/conta";

function useConta() {
  const [conta, setConta] = useRecoilState(contaAtual);
  const [listaCompras, setListaCompras] = useRecoilState(compras);
  const [listaConsumidores, setListaConsumidores] =
    useRecoilState(consumidores);
  const historico: IConta[] = listaContas();

  function adicionaConta(conta: IConta): void {
    if (!localStorage.getItem("historicoContas")) {
      const listaConta: IConta[] = [conta];
      localStorage.setItem("historicoContas", JSON.stringify(listaConta));
    } else {
      const historico: string | null = localStorage.getItem("historicoContas");
      const historicoFormatado: IConta[] = JSON.parse(historico as string);
      historicoFormatado.push(conta);
      localStorage.setItem(
        "historicoContas",
        JSON.stringify(historicoFormatado)
      );
    }
  }

  function atualizaConta(): void {
    setConta((conta) => {
      return {
        ...conta,
        consumidores: [...listaConsumidores],
        compras: [...listaCompras],
      };
    });
  }

  function criaConta(conta: IConta): void {
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
  }

  function listaContas(): IConta[] {
    const dadosArmazenados: string | null =
      localStorage.getItem("historicoContas");
    if (!dadosArmazenados) {
      return [];
    }
    return [...JSON.parse(dadosArmazenados)];
  }

  function removeConta(contaID: string | undefined): void {
    const novoHistorico: IConta[] = historico.filter(
      (conta) => conta.id !== contaID
    );
    localStorage.setItem("historicoContas", JSON.stringify(novoHistorico));
  }

  function resetaConta(): void {
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
    resetaConta,
  };
}

export default useConta;
