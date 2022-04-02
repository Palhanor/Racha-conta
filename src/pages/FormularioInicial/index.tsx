import React from "react";
import { useNavigate } from "react-router-dom";
import { IFormularioInicialProps } from "../../interfaces/props";
import contador from "../../utils/contador";
import "./style.css";
// import imagem from "./img.png"

export default function FormularioInicial(props: IFormularioInicialProps) {
  const { mesa, setMesa, nome, setNome, setListaClientes } = props;

  const navigate = useNavigate();

  function criaMesa(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setListaClientes((listaAnterior) => [
      ...listaAnterior,
      { nome: nome, pedidos: [], total: 0, id: contador() },
    ]);
    navigate("/clientes");
  }

  return (
    <>
      <h1 className="page_title">Racha conta</h1>
      {/* <img src={imagem} alt="Ilustracao do Racha conta" className="page_image" /> */}
      <form className="form_cointainer" onSubmit={(e) => criaMesa(e)}>
        <h2 className="form_title">Nova mesa</h2>
        <label htmlFor="mesa" className="form_labels">
          Nome da mesa
        </label>
        <input
          className="form_input"
          type="text"
          name="mesa"
          id="mesa"
          value={mesa}
          onChange={(e) => setMesa(e.target.value)}
          placeholder="Insira o nome da mesa"
          required
        />
        <label htmlFor="nome" className="form_labels">
          Nome do usuário
        </label>
        <input
          className="form_input"
          type="text"
          name="nome"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Insira seu nome"
          required
        />
        <button type="submit" className="form_button">
          Criar
        </button>
      </form>
    </>
  );
}
