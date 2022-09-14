import React, { useEffect, useState } from "react";
import { getMovies } from "../../services/getMovies";
import Banner from "../../components/banner/banner";
import Card from "../../components/card";
import * as styles from "./styles";

export default function Home() {
  const [banner, setBanner] = useState(undefined);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    try {
      const { data } = await getMovies("popular");
      const bannerData =
        data.results[Math.floor(Math.random() * data.results.length)];
      setBanner(bannerData);
      setMovies(data.results);
    } catch (error) {
      console.log(error);
    }
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
