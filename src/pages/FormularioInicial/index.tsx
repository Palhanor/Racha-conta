// Dependencies
import { useNavigate } from "react-router-dom";

// Interfaces
import TipoCliente from "../../interfaces/TipoCliente";

// Utils
import contador from "../../utils/contador";

// Style
import "./style.css";

interface Props {
  mesa: string;
  setMesa: React.Dispatch<React.SetStateAction<string>>;
  nome: string;
  setNome: React.Dispatch<React.SetStateAction<string>>;
  setListaClientes: React.Dispatch<React.SetStateAction<TipoCliente[]>>;
}

export default function FormularioInicial({
  mesa,
  setMesa,
  nome,
  setNome,
  setListaClientes,
}: Props) {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="form_title">Criar nova mesa</h1>
      <form
        className="form_cointainer"
        onSubmit={(e) => {
          e.preventDefault();
          setListaClientes((listaAnterior) => [
            ...listaAnterior,
            { nome: nome, pedidos: [], total: 0, id: contador() },
          ]);
          navigate("/clientes");
        }}
      >
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
        <button className="form_button">Criar</button>
      </form>
    </>
  );
}
