import { useParams } from "react-router-dom";
import ListaConta from "../../components/ListaConta";
import Navegacao from "../../components/Navegacao";
import { getHistorico } from "../../utils/localStorage";
import NotFound from "../NotFound";

export default function Conta() {
  const { ID } = useParams();
  const historico = getHistorico()
  const contaSelecionada = historico.find((conta) => conta.id === ID);
  
  if (!contaSelecionada) {
    return <NotFound />;
  }

  return (
    <>
      <ListaConta></ListaConta>
      <Navegacao></Navegacao>
    </>
  );
}
