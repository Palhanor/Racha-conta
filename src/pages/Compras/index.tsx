import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { consumidores, compras, contaAtual } from "../../states/atom";
import useAdicionaCompra from "../../hooks/compra/useAdicionaCompra";
import mascaraMonetaria from "../../utils/mascaraMonetaria";
import ListaCompras from "./ListaCompras";
import Multiselect from "multiselect-react-dropdown";
import Navegacao from "../../components/Navegacao";
import {
  Botao,
  Input,
  Label,
  Titulo,
  Container,
  ListaContainer,
  ListaTitulo,
} from "../../components/StyledComponents";

export default function Compras() {
  const conta = useRecoilValue(contaAtual);
  const listaConsumidores = useRecoilValue(consumidores);
  const listaCompras = useRecoilValue(compras);
  const [nomeCompra, setNomeCompra] = useState<string>("");
  const [precoCompra, setPrecoCompra] = useState<number | null>(0);
  const [autoresCompra, setAutoresCompra] = useState<string[]>([]);
  const adicionaCompra = useAdicionaCompra();
  const navigate = useNavigate();

  useEffect(() => {
    if (!conta.nome) navigate("/");
  });

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

  function adicionar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      adicionaCompra(nomeCompra, precoCompra, autoresCompra);
      setNomeCompra("");
      setPrecoCompra(0);
    } catch (err) {
      alert(err);
    }
  }

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
              const valueLength = e.target.value.length * 2;
              e.target.setSelectionRange(valueLength, valueLength);
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
        {<ListaCompras listaCompras={listaCompras} />}
      </ListaContainer>
      <Navegacao />
    </>
  );
}
