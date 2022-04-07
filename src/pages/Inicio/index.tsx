import React from "react";
import { useNavigate } from "react-router-dom";
import { IFormularioInicialProps } from "../../interfaces/props";
import "../../styles/global.scss"
import { v4 as uuidv4 } from "uuid";
const ilustracao: string = require("../../assets/InitialIllustration.svg").default;

export default function Inicio(props: IFormularioInicialProps) {
  
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
      <h1 className="global-element_title">Racha conta</h1>
      <img src={ilustracao} alt="Ilustracao do Racha conta" className="global-element_image" />
      <form className="global-form_container global-form_container--bottom" onSubmit={(e) => criaMesa(e)}>
        <h2 className="global-form_title">Nova mesa</h2>
        <label htmlFor="mesa" className="global-element_label">
          Nome da mesa
        </label>
        <input
          className="global-element_input"
          type="text"
          name="mesa"
          id="mesa"
          value={mesa}
          onChange={(e) => setMesa(e.target.value)}
          placeholder="Insira o nome da mesa"
          required
        />
        <label htmlFor="nome" className="global-element_label">
          Nome do usuário
        </label>
        <input
          className="global-element_input"
          type="text"
          name="nome"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Insira seu nome"
          required
        />
        <button type="submit" className="global-element_button">
          Criar
        </button>
      </form>
    </>
  );
}
