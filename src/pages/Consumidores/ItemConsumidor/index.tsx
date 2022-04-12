import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import IConsumidor from "../../../interfaces/consumidor";
import {
  Item,
  ItemNome,
  ItemCusto,
  ItemTexto,
  Inline,
} from "../../../components/Styled";

export default function ItemConsumidor(props: IConsumidor) {
  const { nome, pedidos, id } = props;
  const [custo, setCusto] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    const custoTotal = pedidos.reduce(
      (total, item) => item.preco / item.autores.length + total,
      0
    );
    setCusto(custoTotal);
  }, [pedidos]);

  return (
    <Item onClick={() => navigate(`/consumidor/${id}`)}>
      <Inline mb>
        <ItemNome>{nome}</ItemNome>
        <ItemCusto>R$ {custo.toLocaleString("BRL")}</ItemCusto>
      </Inline>
      <ItemTexto>
        {pedidos.length} Compra{pedidos.length === 1 ? "" : "s"}
      </ItemTexto>
    </Item>
  );
}
