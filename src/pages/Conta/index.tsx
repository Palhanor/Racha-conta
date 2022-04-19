import { useParams } from "react-router-dom";
import ListaConta from "../../components/ListaConta";
import Navegacao from "../../components/Navegacao";
import useHistorico from "../../hooks/useHistorico";
import NotFound from "../NotFound";

export default function Conta() {
  const { ID } = useParams();
  const historico = useHistorico()();
  const contaSelecionada = historico.find((conta) => conta.id === ID);
  if (!contaSelecionada) return <NotFound />;

  return (
    <>
      <ListaConta
        nome={contaSelecionada.nome}
        consumidores={contaSelecionada.consumidores}
        compras={contaSelecionada.compras}
        id={contaSelecionada.id}
      ></ListaConta>
      <Navegacao></Navegacao>
    </>
  );
}
