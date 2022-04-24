/* IMPORTS */
import { useParams } from "react-router-dom";
import ListaConta from "../../components/ListaConta";
import Navegacao from "../../components/Navegacao";
import NotFound from "../NotFound";
import IConta from "../../interfaces/conta";
import useConta from "../../hooks/useConta";

/* COMPONENTE */
export default function Conta() {

  /* HOOK DO REACT ROUTER */
  const { ID } = useParams();

  /* HOOK PERSONALIZADO */
  const { historico } = useConta();

  /* CONTA SELECIONADA */
  const contaSelecionada: (IConta | undefined) = historico.find((conta) => conta.id === ID);

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
