import React from "react";
import { Link } from "react-router-dom";
import * as styles from "./styles";
import { AiOutlineSearch } from "react-icons/ai";
import Logo from "../../assets/logo.png";

export default function Header() {
  return (
    <styles.Menu>
      <img src={Logo} />
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/movies">
          <li>Filmes</li>
        </Link>
        <Link to="/series">
          <li>Séries</li>
        </Link>
      </ul>
      <styles.InputBox>
        <input type="text" placeholder="Pesquisa" />
        <AiOutlineSearch
          style={{ cursor: "pointer", background: "transparent" }}
        />
      </styles.InputBox>
    </styles.Menu>
  );
}
