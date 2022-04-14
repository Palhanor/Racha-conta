import { useParams } from "react-router-dom";
import ListaConta from "../../components/ListaConta";
import Navegacao from "../../components/Navegacao";
import IConta from "../../interfaces/conta";
import NotFound from "../NotFound";

export default function Conta() {
  const { ID } = useParams();

  // TO DO: Código compartilhado com Historico e ListaConta. Criar um sistema comum
  let historicoContasObj: IConta[] = [];
  const historicoContas = localStorage.getItem("historicoContas");
  if (historicoContas) {
    historicoContasObj = [...JSON.parse(historicoContas)];
  }

  const contaSelecionada = historicoContasObj.find((conta) => conta.id === ID);
  if (!contaSelecionada) {
    return <NotFound />;
  }

  return (
    <>
      <ListaConta
        listaConsumidores={contaSelecionada?.consumidores}
        listaCompras={contaSelecionada?.compras}
        conta={contaSelecionada?.nome}
      ></ListaConta>
      <Navegacao></Navegacao>
    </>
  );
}
