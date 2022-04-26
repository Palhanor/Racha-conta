import { useRecoilState, useSetRecoilState } from "recoil";
import { compras, consumidores, contaAtual } from "../states/atom";
import { nanoid } from "nanoid";
import { idSize } from "../utils/idFormat";
import IConta from "../interfaces/conta";
import IConsumidor from "../interfaces/consumidor";
import ICompra from "../interfaces/compra";

function useConta() {
  const [conta, setConta] = useRecoilState(contaAtual);
  const setListaCompras = useSetRecoilState(compras);
  const setListaConsumidores =
    useSetRecoilState(consumidores);
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

  function atualizaContaConsumidores(consumidores: IConsumidor[]): void {
    setConta((conta) => {
      return {
        ...conta,
        consumidores: consumidores
      };
    });
  }

  function atualizaContaCompras(compras: ICompra[]): void {
    setConta((conta) => {
      return {
        ...conta,
        compras: compras
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
    atualizaContaConsumidores,
    atualizaContaCompras,
    criaConta,
    removeConta,
    resetaConta,
  };
}

export default useConta;
