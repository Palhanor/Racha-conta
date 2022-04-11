import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navegacao from "../../components/Navegacao";
import { IConsumidoresProps } from "../../interfaces/props";
import { v4 as uuidv4 } from "uuid";
import ItemConsumidor from "./ItemConsumidor";
import "../../styles/global.scss";

export default function Consumidores(props: IConsumidoresProps) {
  const { conta, listaConsumidores, setListaConsumidores } = props;
  const [novoConsumidor, setNovoConsumidor] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!conta) navigate("/")
  });

  function novoCliente(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      listaConsumidores.find(
        (clienteVirificado) => clienteVirificado.nome === novoConsumidor
      )
    ) {
      alert("O nome dos clientes devem ser diferentes entre si");
      setNovoConsumidor("");
      return;
    }

    setListaConsumidores([
      ...listaConsumidores,
      { nome: novoConsumidor, pedidos: [], id: uuidv4() },
    ]);
    setNovoConsumidor("");
  }

  return (
    <>
      <form
        className="global-form_container global-form_container--top"
        onSubmit={(e) => novoCliente(e)}
      >
        <h1 className="global-form_title">Novo consumidor</h1>
        <label htmlFor="cliente" className="global-element_label">
          Novo consumidor
        </label>
        <input
          type="text"
          name="cliente"
          id="cliente"
          placeholder="Nome do consumidor"
          className="global-element_input"
          value={novoConsumidor}
          onChange={(e) => setNovoConsumidor(e.target.value)}
          required
        />
        <button className="global-element_button">Adicionar</button>
      </form>
      <div className="global-list_container">
        <h2 className="global-list_title">Consumidores</h2>
        <ul className="global-list">
          {listaConsumidores.map((dadosCliente) => (
            <ItemConsumidor key={dadosCliente.id} {...dadosCliente} />
          ))}
        </ul>
      </div>
      <Navegacao />
    </>
  );
}
