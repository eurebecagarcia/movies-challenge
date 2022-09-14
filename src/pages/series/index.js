import React, { useEffect, useState } from "react";
import { getSeries } from "../../services/getSeries";
import Banner from "../../components/banner/banner";
import * as styles from "../home/styles";
import Card from "../../components/card";
import { Link } from "react-router-dom";

export default function Series() {
  const [banner, setBanner] = useState(undefined);
  const [series, setSeries] = useState([]);
  const [category, setCategory] = useState("popular");

  useEffect(() => {
    loadSeries();
  }, []);

  const loadSeries = async () => {
    const { data } = await getSeries(category);
    const bannerData =
      data.results[Math.floor(Math.random() * data.results.length)];
    setBanner(bannerData);
    setSeries(data.results);
  };

  return (
    <div>
      <Banner data={banner} />
      <styles.ContainerGallery>
        <h2>Séries Populares</h2>
        <styles.Gallery>
          <Card data={series} />
        </styles.Gallery>
      </styles.ContainerGallery>
    </div>
  );
}
