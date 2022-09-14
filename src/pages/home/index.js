import React, { useEffect, useState } from "react";
import { getMovies } from "../../services/getMovies";
import Banner from "../../components/banner/banner";
import Card from "../../components/card";
import * as styles from "./styles";
import { getSeries } from "../../services/getSeries";

export default function Home() {
  const [banner, setBanner] = useState(undefined);
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    loadMovies();
    loadSeries();
  }, []);

  const loadMovies = async () => {
    try {
      const { data } = await getMovies("popular");
      const bannerData =
        data.results[Math.floor(Math.random() * data.results.length)];
      setBanner(bannerData);
      setMovies(data.results.slice(0, 8));
    } catch (error) {
      console.log(error);
    }
  };

  const loadSeries = async () => {
    try {
      const { data } = await getSeries("popular");
      setSeries(data.results.slice(0, 8));
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
      <styles.ContainerGallery>
        <h2>Séries Populares</h2>
        <styles.Gallery>
          <Card data={series} />
        </styles.Gallery>
      </styles.ContainerGallery>
    </div>
  );
}
