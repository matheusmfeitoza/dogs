import React from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import styles from "./Styles/UserHeaderNavStyle.module.css";
//Import SVG's
import { ReactComponent as MinhasFotos } from "../../Assets/feed.svg";
import { ReactComponent as Statics } from "../../Assets/estatisticas.svg";
import { ReactComponent as PostPhoto } from "../../Assets/enviar.svg";
import { ReactComponent as Logout } from "../../Assets/sair.svg";

const UserHeaderNav = () => {
  const { logoutUser } = React.useContext(UserContext);
  const [mobile, setMobile] = React.useState(null);

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end>
        {" "}
        <MinhasFotos />
        {mobile && "Minhas fotos"}
      </NavLink>
      <NavLink to="estatisticas">
        <Statics />
        {mobile && "Estatisticas"}
      </NavLink>
      <NavLink to="postar">
        {" "}
        <PostPhoto />
        {mobile && "Adicionar fotos"}
      </NavLink>
      <button onClick={logoutUser}>
        {" "}
        <Logout />
        {mobile && "sair"}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
