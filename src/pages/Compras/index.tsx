/* IMPORTS */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import mascaraMonetaria from "../../utils/mascaraMonetaria";
import ListaCompras from "./components/ListaCompras";
import Multiselect from "multiselect-react-dropdown";
import Navegacao from "../../components/Navegacao";
import useCompras from "../../hooks/useCompras";
import useConsumidores from "../../hooks/useConsumidores";
import useConta from "../../hooks/useConta";
import {
  Botao,
  Input,
  Label,
  Titulo,
  Container,
  ListaContainer,
  ListaTitulo,
} from "../../components/StyledComponents";

/* COMPONENTE */
export default function Compras() {
  /* ESTADOS DO COMPONENTE */
  const [nomeCompra, setNomeCompra] = useState<string>("");
  const [precoCompra, setPrecoCompra] = useState<number | null>(0);
  const [autoresCompra, setAutoresCompra] = useState<string[]>([]);

  /* HOOK DO REACT ROUTER */
  const navigate = useNavigate();

  /* HOOK PERSONALIZADO */
  const { contaExiste } = useConta();
  const { listaCompras, adicionaCompra } = useCompras();
  const { listaConsumidores } = useConsumidores();

  /* REDIRECIONADOR */
  useEffect(() => {
    if (!contaExiste) navigate("/");
    // console.log("Lista de compras: ", listaCompras)
  }, [listaCompras, contaExiste, navigate]);

  /* ESTILO DO COMPOENNTE MULTISELECT */
  const multiselectStyle = {
    searchBox: {
      // Input e container das tags
      cursor: "pointer",
      color: "#426D77",
      border: "1px solid #426D77",
      borderRadius: "5px",
      marginBottom: "1rem",
      padding: ".5rem",
      fontFamily: "Marcellus SC",
    },
    chips: {
      // Tag contendo o valor selecionado
      background: "#426D77",
      borderRadius: "5px",
    },
    optionContainer: {
      // Lista contendo os valores para selecionar
      marginTop: "-1rem",
    },
  };

  /* ADICIONAR COM NA LISTA */
  function adicionar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      adicionaCompra({
        nome: nomeCompra,
        preco: precoCompra as number,
        autores: [...autoresCompra],
        id: "",
      });
      setNomeCompra("");
      setPrecoCompra(0);
    } catch (err) {
      alert(err);
    }
  }

  /* JSX */
  return (
    <>
      <Container top>
        <form onSubmit={adicionar}>
          <Titulo secondary>Nova compra</Titulo>
          <Multiselect
            isObject={false}
            style={multiselectStyle}
            placeholder="Selecione os compradores"
            onRemove={(e) => setAutoresCompra(e)}
            onSelect={(e) => setAutoresCompra(e)}
            options={listaConsumidores.map((consumidor) => consumidor.nome)}
          />
          <Label htmlFor="nomeCompra">Nome da compra</Label>
          <Input
            type="text"
            name="nomeCompra"
            id="nomeCompra"
            placeholder="Nome da compra"
            required
            value={nomeCompra}
            onChange={(e) => setNomeCompra(e.target.value)}
          />
          <Label htmlFor="precoCompra">Preço da compra</Label>
          <Input
            type="text"
            name="precoCompra"
            id="precoCompra"
            onFocus={(e) => {
              const tamanhoTexto: number = e.target.value.length * 2;
              e.target.setSelectionRange(tamanhoTexto, tamanhoTexto);
            }}
            required
            value={mascaraMonetaria.adicionaMascaraMonetaria(precoCompra)}
            onChange={(e) =>
              setPrecoCompra(
                mascaraMonetaria.removeMascaraMonetaria(e.target.value)
              )
            }
          />
          <Botao>Adicionar</Botao>
        </form>
      </Container>
      <ListaContainer>
        <ListaTitulo>Compras</ListaTitulo>
        <ListaCompras listaCompras={listaCompras} /> {/* COMPONENTE */}
      </ListaContainer>
      <Navegacao /> {/* COMPONENTE */}
    </>
  );
}
