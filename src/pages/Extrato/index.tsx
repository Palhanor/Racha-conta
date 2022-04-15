import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navegacao from "../../components/Navegacao";
import ListaConta from "../../components/ListaConta";
import { useRecoilValue } from "recoil";
import { compras, consumidores, nomeConta } from "../../states/atom";
// TO DO: import { randomUUID } from "crypto";

export default function Extrato() {

  const conta = useRecoilValue(nomeConta);
  const listaConsumidores = useRecoilValue(consumidores);
  const listaCompras = useRecoilValue(compras);
  const navigate = useNavigate();

  useEffect(() => {
    if (!conta) navigate("/");
  });

  return (
    <>
      <ListaConta
        conta={conta}
        listaConsumidores={listaConsumidores}
        listaCompras={listaCompras}
      ></ListaConta>
      <Navegacao />
    </>
  );
}
