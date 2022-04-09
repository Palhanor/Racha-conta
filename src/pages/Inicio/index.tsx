import React from "react";
import { useNavigate } from "react-router-dom";
import { IInicioProps } from "../../interfaces/props";
import "../../styles/global.scss";
import { v4 as uuidv4 } from "uuid";
import * as Exattrs from "./Exattrs";
const ilustracao: string =
  require("../../assets/InitialIllustration.svg").default;

export default function Inicio(props: IInicioProps) {
  const { mesa, setMesa, nome, setNome, setListaClientes } = props;

  const navigate = useNavigate();

  function criaMesa(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setListaClientes((listaAnterior) => [
      ...listaAnterior,
      { nome: nome, pedidos: [], total: 0, id: uuidv4() },
    ]);
    navigate("/clientes", { replace: true });
  }

  return (
    <>
      <h1 {...Exattrs.title}>Racha conta</h1>
      <img {...Exattrs.image} src={ilustracao} alt="Ilustracao do Racha conta" />
      <form {...Exattrs.form} onSubmit={(e) => criaMesa(e)}>
        <h2 {...Exattrs.formTitle}>Nova mesa</h2>
        <label {...Exattrs.labelMesa}>Nome da mesa</label>
        <input
          {...Exattrs.inputMesa}
          value={mesa}
          onChange={(e) => setMesa(e.target.value)}
        />
        <label {...Exattrs.labelNome}>Nome do usuário</label>
        <input
          {...Exattrs.inputNome}
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <button {...Exattrs.button}>Criar</button>
      </form>
    </>
  );
}
