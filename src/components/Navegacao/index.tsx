import { Link, useLocation } from "react-router-dom";
import { IconContext } from "react-icons";
// import { RiHistoryFill } from "react-icons/ri"
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
    // {
    //   id: 3,
    //   url: "/historico",
    //   icon: (
    //     <IconContext.Provider
    //       value={{ color: pathname === "/consumidores" ? tema : branco }}
    //     >
    //       <RiHistoryFill size={22} />
    //     </IconContext.Provider>
    //   ),
    // },
    {
      id: 0,
      url: "/consumidores",
      icon: (
        <IconContext.Provider
          value={{ color: pathname === "/consumidores" ? tema : branco }}
        >
          <BsPeopleFill size={22} />
        </IconContext.Provider>
      ),
    },
    {
      id: 1,
      url: "/compras",
      icon: (
        <IconContext.Provider
          value={{ color: pathname === "/compras" ? tema : branco }}
        >
          <BsCartCheckFill size={22} />
        </IconContext.Provider>
      ),
    },
    {
      id: 2,
      url: "/extrato",
      icon: (
        <IconContext.Provider value={{ color: pathname === "/extrato" ? tema : branco }}>
          <BsFileEarmarkTextFill size={22} />
        </IconContext.Provider>
      ),
    },
  ];

  return (
    <div className="navegacao_container">
      {navData.map((item) => (
        <Link
          to={item.url}
          className={`navegacao_link`}
          key={item.id}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
}
