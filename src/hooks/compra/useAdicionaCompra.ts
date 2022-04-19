import { useSetRecoilState } from "recoil";
import { compras } from "../../states/atom";
import { v4 as uuidv4 } from "uuid";
import useAdicionaPedidoConsumidor from "../consumidor/useAdicionaPedidoConsumidor";

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
      id: uuidv4(),
    };
    setListaCompras((listaAntiga) => [...listaAntiga, novaCompra]);
    adicionaPedidoConsumidor(novaCompra);
  };
};

export default useAdicionaCompra;
