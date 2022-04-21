/* IMPORTS */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { compras, consumidores, contaAtual } from "../../states/atom";
import ListaConta from "../../components/ListaConta";
import Navegacao from "../../components/Navegacao";

/* COMPONENTE */
export default function Extrato() {

  /* ESTADOS GLOBAIS RECOIL */
  const conta = useRecoilValue(contaAtual);
  const listaConsumidores = useRecoilValue(consumidores);
  const listaCompras = useRecoilValue(compras);

  /* HOOK DO REACT ROUTER */
  const navigate = useNavigate();

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
      ></ListaConta> {/* COMPONENTE */}
      <Navegacao /> {/* COMPONENTE */}
    </>
  );
}
