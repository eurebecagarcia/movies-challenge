import React from "react";
import * as styles from "./styles";

export default function Banner({ data }) {
  const imagem = `https://image.tmdb.org/t/p/w500/${data?.backdrop_path}`;

  return (
    <styles.Container imagem={imagem}>
      <h1>{data?.original_title || data?.name}</h1>
      <p>{data?.overview}</p>
    </styles.Container>
  );
}
