import { useParams } from "react-router-dom";
import ListaConta from "../../components/ListaConta";
import Navegacao from "../../components/Navegacao";
import ICompra from "../../interfaces/compra";
import IConsumidor from "../../interfaces/consumidor";
import IConta from "../../interfaces/conta";
import NotFound from "../NotFound";

export default function Conta(props: {
  setConta: React.Dispatch<React.SetStateAction<string>>;
  setConsumidor: React.Dispatch<React.SetStateAction<string>>;
  setListaConsumidores: React.Dispatch<React.SetStateAction<IConsumidor[]>>;
  setListaCompras: React.Dispatch<React.SetStateAction<ICompra[]>>;
}) {
  const {   
    setConta,
    setConsumidor,
    setListaConsumidores,
    setListaCompras
  } = props;
  const { ID } = useParams();

  // TO DO: Código compartilhado com Historico e ListaConta. Criar um sistema comum
  let historicoContasObj: IConta[] = [];
  const historicoContas = localStorage.getItem("historicoContas");
  if (historicoContas) {
    historicoContasObj = [...JSON.parse(historicoContas)];
  }

  const contaSelecionada = historicoContasObj.find((conta) => conta.id === ID);
  if (!contaSelecionada) {
    return <NotFound />;
  }

  return (
    <>
      <ListaConta
        listaConsumidores={contaSelecionada?.consumidores}
        listaCompras={contaSelecionada?.compras}
        conta={contaSelecionada?.nome}
        setConta={setConta}
        setConsumidor={setConsumidor}
        setListaConsumidores={setListaConsumidores}
        setListaCompras={setListaCompras}
      ></ListaConta>
      <Navegacao></Navegacao>
    </>
  );
}
