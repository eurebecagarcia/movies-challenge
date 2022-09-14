import { getMovies } from "../../services/getMovies";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Banner from "../../components/banner/banner";
import * as styles from "../home/styles";
import Card from "../../components/card";

export default function Movies() {
  const [banner, setBanner] = useState(undefined);
  const [category, setCategory] = useState("top_rated");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    const { data } = await getMovies(category);
    const bannerData =
      data.results[Math.floor(Math.random() * data.results.length)];
    setBanner(bannerData);
    setMovies(data.results);
  };

  return (
    <div>
      <Banner data={banner} />
      <styles.ContainerGallery>
        <h2>Filmes Populares</h2>
        <styles.Gallery>
          <Card data={movies} />
        </styles.Gallery>
      </styles.ContainerGallery>
    </div>
  );
}
