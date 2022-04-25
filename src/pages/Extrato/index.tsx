/* IMPORTS */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ListaConta from "../../components/ListaConta";
import Navegacao from "../../components/Navegacao";
import useCompras from "../../hooks/useCompras";
import useConsumidores from "../../hooks/useConsumidores";
import useConta from "../../hooks/useConta";

/* COMPONENTE */
export default function Extrato() {
  /* HOOK DO REACT ROUTER */
  const navigate = useNavigate();

  /* HOOK PERSONALIZADO */
  const { listaConsumidores } = useConsumidores();
  const { listaCompras } = useCompras();
  const { conta } = useConta();

  /* REDIRECIONADOR */
  useEffect(() => {
    if (!conta.nome) navigate("/");
  });

  /* JSX */
  return (
    <>
      <ListaConta
        nome={conta.nome}
        consumidores={listaConsumidores}
        compras={listaCompras}
        id={conta.id}
      ></ListaConta>{" "}
      {/* COMPONENTE */}
      <Navegacao /> {/* COMPONENTE */}
    </>
  );
}
