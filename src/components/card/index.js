import React from "react";
import * as styles from "./styles";

export default function Card({ data }) {
  return data.map((item) => {
    const imagem = `https://image.tmdb.org/t/p/w500/${item?.poster_path}`;
    return (
      <styles.Container>
        <img src={imagem} />
        <h3>{item?.original_title || item?.name}</h3>
        <p>{item?.overview}</p>
      </styles.Container>
    );
  });
}
