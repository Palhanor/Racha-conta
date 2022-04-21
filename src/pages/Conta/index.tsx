/* IMPORTS */
import { useParams } from "react-router-dom";
import useHistorico from "../../hooks/conta/useHistorico";
import ListaConta from "../../components/ListaConta";
import Navegacao from "../../components/Navegacao";
import NotFound from "../NotFound";

/* COMPONENTE */
export default function Conta() {

  /* HOOK DO REACT ROUTER */
  const { ID } = useParams();

  /* HOOK PERSONALIZADO */
  const historico = useHistorico()();

  /* CONTA SELECIONADA */
  const contaSelecionada = historico.find((conta) => conta.id === ID);

  /* REDIRECIONADOR */
  if (!contaSelecionada) return <NotFound />;

  /* JSX */
  return (
    <>
      <ListaConta
        nome={contaSelecionada.nome}
        consumidores={contaSelecionada.consumidores}
        compras={contaSelecionada.compras}
        id={contaSelecionada.id}
      ></ListaConta> {/* COMPONENTE */}
      <Navegacao /> {/* COMPONENTE */}
    </>
  );
}
