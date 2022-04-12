import Navegacao from "../../components/Navegacao";
import { Titulo, Lista } from "../../components/Styled";
import IConta from "../../interfaces/conta";

export default function Historico() {
  let historicoContasObj: IConta[] = [];
  const historicoContas = localStorage.getItem("historicoContas");
  if (historicoContas) {
    historicoContasObj = [...JSON.parse(historicoContas)];
  }

  return (
    <>
      {historicoContasObj.length > 0 ? (
        <>
          <Titulo>Histórico</Titulo>
          <Lista>
            {historicoContasObj.map((conta) => (
              <li key={conta.id}>
                <span>{conta.nome}</span>
                <br />
                <span>Consumidores</span>
                <Lista>
                  {conta.consumidores.map((consumidor) => (
                    <li key={consumidor.id}>{consumidor.nome}</li>
                  ))}
                </Lista>
                <span>Compras</span>
                <Lista>
                  {conta.compras.map((compra) => (
                    <li key={compra.id}>
                      {compra.nome} - R$ {compra.preco.toLocaleString("BRL")}
                    </li>
                  ))}
                </Lista>
              </li>
            ))}
          </Lista>
        </>
      ) : (
        <Titulo>Histórico vazio</Titulo>
      )}
      <Navegacao />
    </>
  );
}
