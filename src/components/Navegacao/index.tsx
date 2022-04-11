import { Link, useLocation } from "react-router-dom";
import { IconContext } from "react-icons";
import {
  BsPeopleFill,
  BsCartCheckFill,
  BsFileEarmarkTextFill,
} from "react-icons/bs";
import "./style.scss";

export default function Navegacao() {
  const { pathname } = useLocation();

  const branco = "#FFFFFF";
  const tema = "#a7c2c9";

  const navData = [
    {
      id: 0,
      url: "/consumidores",
      text: "Consumidores",
      icon: (
        <IconContext.Provider
          value={{ color: pathname === "/consumidores" ? tema : branco }}
        >
          <BsPeopleFill size={20} />
        </IconContext.Provider>
      ),
    },
    {
      id: 1,
      url: "/compras",
      text: "Compras",
      icon: (
        <IconContext.Provider
          value={{ color: pathname === "/compras" ? tema : branco }}
        >
          <BsCartCheckFill size={20} />
        </IconContext.Provider>
      ),
    },
    {
      id: 2,
      url: "/extrato",
      text: "Extrato",
      icon: (
        <IconContext.Provider value={{ color: branco }}>
          <BsFileEarmarkTextFill size={20} />
        </IconContext.Provider>
      ),
    },
  ];

  return (
    <div className="navegacao_container">
      {navData.map((item) => (
        <Link
          to={item.url}
          className={`navegacao_link ${
            pathname === "/consumidores" && item.id === 0
              ? "navegacao_link--active"
              : pathname === "/compras" && item.id === 1
              ? "navegacao_link--active"
              : ""
          }`}
          key={item.id}
        >
          {item.icon}
          <span>{item.text}</span>
        </Link>
      ))}
    </div>
  );
}
