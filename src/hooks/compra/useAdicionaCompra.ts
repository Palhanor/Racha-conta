import { useSetRecoilState } from "recoil";
import { compras } from "../../states/atom";
import { nanoid } from "nanoid";
import useAdicionaPedidoConsumidor from "../consumidor/useAdicionaPedidoConsumidor";
import { idSize } from "../../utils/idFormat";

const useAdicionaCompra = () => {
  const setListaCompras = useSetRecoilState(compras);
  const adicionaPedidoConsumidor = useAdicionaPedidoConsumidor();
  return (nome: string, preco: number | null, autores: string[]) => {
    if (autores.length === 0)
      throw new Error("Adicione ao menos um autor para a compra");
    if (!preco) throw new Error("Adicione um preço para a compra");
    const novaCompra = {
      nome: nome,
      preco: (preco as number) / 100,
      autores: [...autores],
      id: nanoid(idSize),
    };
    setListaCompras((listaAntiga) => [...listaAntiga, novaCompra]);
    adicionaPedidoConsumidor(novaCompra);
  };
};

export default useAdicionaCompra;
