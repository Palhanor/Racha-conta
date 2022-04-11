import React from "react";
import { useNavigate } from "react-router-dom";
import { IInicioProps } from "../../interfaces/props";
import "../../styles/global.scss";
import { v4 as uuidv4 } from "uuid";
import * as Exattrs from "./Exattrs";
const ilustracao: string =
  require("../../assets/InitialIllustration.svg").default;

export default function Inicio(props: IInicioProps) {
  const { conta, setConta, consumidor, setConsumidor, setListaConsumidores } = props;

  const navigate = useNavigate();

  function criaMesa(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setListaConsumidores((listaAnterior) => [
      ...listaAnterior,
      { nome: consumidor, pedidos: [], total: 0, id: uuidv4() },
    ]);
    navigate("/consumidores", { replace: true });
  }

  return (
    <>
      <h1 {...Exattrs.title}>Racha conta</h1>
      <img {...Exattrs.image} src={ilustracao} alt="Ilustracao do Racha conta" />
      <form {...Exattrs.form} onSubmit={(e) => criaMesa(e)}>
        <h2 {...Exattrs.formTitle}>Nova conta</h2>
        <label {...Exattrs.labelMesa}>Nome da conta</label>
        <input
          {...Exattrs.inputMesa}
          value={conta}
          onChange={(e) => setConta(e.target.value)}
        />
        <label {...Exattrs.labelNome}>Nome do consumidor</label>
        <input
          {...Exattrs.inputNome}
          value={consumidor}
          onChange={(e) => setConsumidor(e.target.value)}
        />
        <button {...Exattrs.button}>Criar</button>
      </form>
    </>
  );
}
