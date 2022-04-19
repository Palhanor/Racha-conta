import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navegacao from "../../components/Navegacao";
import ListaConta from "../../components/ListaConta";
import { useRecoilValue } from "recoil";
import { compras, consumidores, contaAtual } from "../../states/atom";

export default function Extrato() {

  const conta = useRecoilValue(contaAtual);
  const listaConsumidores = useRecoilValue(consumidores);
  const listaCompras = useRecoilValue(compras);
  const navigate = useNavigate();

  useEffect(() => {
    if (!conta.nome) navigate("/");
  });

  return (
    <>
      <ListaConta
        nome={conta.nome}
        consumidores={listaConsumidores}
        compras={listaCompras}
        id={conta.id}
      ></ListaConta>
      <Navegacao />
    </>
  );
}
