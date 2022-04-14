import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navegacao from "../../components/Navegacao";
import ListaConta from "../../components/ListaConta";
import { useRecoilValue } from "recoil";
import { nomeConta } from "../../states/atom";
// TO DO: import { randomUUID } from "crypto";

export default function Extrato() {

  const conta = useRecoilValue(nomeConta);
  const navigate = useNavigate();

  useEffect(() => {
    if (!conta) navigate("/");
  });

  return (
    <>
      <ListaConta></ListaConta>
      <Navegacao />
    </>
  );
}
