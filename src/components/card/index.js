import React from "react";
import * as styles from "./styles";

export default function Card({ data }) {
  console.log(data);
  return data.slice(0, 8).map((item) => {
    const imagem = `https://image.tmdb.org/t/p/w500/${item?.poster_path}`;
    return (
      <styles.Container>
        <img src={imagem} />
        <h3>{item?.original_title}</h3>
        <p>{item?.overview}</p>
      </styles.Container>
    );
  });
}
