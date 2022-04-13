import { useNavigate } from "react-router-dom";
import { Botao, Image, Titulo } from "../../components/StyledComponents";

const erro: string = require("../../assets/ErrorIllustration.svg").default;

export default function NotFound() {
  const navigate = useNavigate();

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
