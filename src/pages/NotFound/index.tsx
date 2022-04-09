import { useNavigate } from "react-router-dom";
import "../../styles/global.scss";
import * as Exattrs from "./Exattrs";
const erro: string = require("../../assets/ErrorIllustration.svg").default;

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <main>
      <h1 {...Exattrs.titulo}>Página não encontrada!</h1>
      <img src={erro} alt="Imagem de erro 404" {...Exattrs.imagem} />
      <button {...Exattrs.botao} onClick={() => navigate(-1)}>
        Retornar
      </button>
    </main>
  );
}
