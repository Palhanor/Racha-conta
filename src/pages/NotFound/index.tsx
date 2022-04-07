import { useNavigate } from "react-router-dom";
import "../../styles/global.scss"
const erro: string = require("../../assets/ErrorIllustration.svg").default;

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <main>
      <h1 className="global-element_title">Página não encontrada!</h1>
      <img src={erro} alt="Imagem de erro 404" className="global-element_image" />
      <button
        className="global-element_button global-element_button--secondary"
        onClick={() => navigate(-1)}
      >
        Retornar
      </button>
    </main>
  );
}
