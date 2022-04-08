import React from "react";
import { useNavigate } from "react-router-dom";
import { IInicioProps } from "../../interfaces/props";
import "../../styles/global.scss";
import { v4 as uuidv4 } from "uuid";
import {
  titleProps,
  imgProps,
  formProps,
  formTitleProps,
  labelMesaProps,
  inputMesaProps,
  labelNomeProps,
  inputNomeProps,
  buttonProps,
} from "./props";
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
      <h1 {...titleProps}>Racha conta</h1>
      <img {...imgProps} src={ilustracao} alt="Ilustracao do Racha conta" />
      <form {...formProps} onSubmit={(e) => criaMesa(e)}>
        <h2 {...formTitleProps}>Nova mesa</h2>
        <label {...labelMesaProps}>Nome da mesa</label>
        <input
          {...inputMesaProps}
          value={mesa}
          onChange={(e) => setMesa(e.target.value)}
        />
        <label {...labelNomeProps}>Nome do usuário</label>
        <input
          {...inputNomeProps}
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <button {...buttonProps}>
          Criar
        </button>
      </form>
    </>
  );
}
