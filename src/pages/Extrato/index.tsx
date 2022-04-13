import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IExtratoProps } from "../../interfaces/props";
import Navegacao from "../../components/Navegacao";
import ListaConta from "../../components/ListaConta";
// TO DO: import { randomUUID } from "crypto";

export default function Extrato(props: IExtratoProps) {
  const {
    listaConsumidores,
    listaCompras,
    conta,
    setConta,
    setConsumidor,
    setListaConsumidores,
    setListaCompras,
  } = props;

  const navigate = useNavigate();

  useEffect(() => {
    if (!conta) navigate("/");
  });

  return (
    <>
      <ListaConta
        listaConsumidores={listaConsumidores}
        listaCompras={listaCompras}
        conta={conta}
        setConta={setConta}
        setConsumidor={setConsumidor}
        setListaConsumidores={setListaConsumidores}
        setListaCompras={setListaCompras}
      ></ListaConta>
      <Navegacao />
    </>
  );
}
