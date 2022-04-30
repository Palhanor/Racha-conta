/* IMPORTS */
import { useNavigate } from "react-router-dom";
import { Botao, Image, Titulo } from "../../components/StyledComponents";
// Problema de importação
const erro: string = require("../../assets/ErrorIllustration.svg").default;

/* COMPOENTE */
export default function NotFound() {
  /* HOOK DO REACT ROUTER */
  const navigate = useNavigate();

  /* JSX */
  return (
    <main>
      <Titulo>Página não encontrada!</Titulo>
      <Image src={erro} alt="Imagem de erro 404" />
      <Botao secondary onClick={() => navigate(-1)}>
        Retornar
      </Botao>
    </main>
  );
}
