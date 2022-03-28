import { Link } from "react-router-dom";
import { FaUserTie, FaClipboardList } from "react-icons/fa";
import { MdOutlinePowerSettingsNew, MdExitToApp } from "react-icons/md";
import "./style.css";

export default function Navegacao() {
  return (
    <div className="navegacao_container">
      <Link to="../" className="navegacao_link">
        <MdOutlinePowerSettingsNew size={20} />
        <span>Iniciar</span>
      </Link>
      <Link to="/clientes" className="navegacao_link">
        <FaUserTie size={20} />
        <span>Clientes</span>
      </Link>
      <Link to="/pedidos" className="navegacao_link">
        <FaClipboardList size={20} />
        <span>Pedidos</span>
      </Link>
      <Link to="/sair" className="navegacao_link">
        <MdExitToApp size={20} />
        <span>Sair</span>
      </Link>
    </div>
  );
}
