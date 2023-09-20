"use client";

import { useEffect, useState } from "react";
import NewsGrid from "./NewsGrid";

function Homepage() {
  const [items, setItems] = useState([]);
  const [active, setActive] = useState(1);
  const [category, setCategory] = useState("general");

  //fetch news data
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apikey=ebc6fe1bc46e4acd9105b617c65dfb26`
    )
      .then((res) => res.json())
      .then((data) => setItems(data.articles));
  }, [category]);

  return (
    <div>
      <h1>See The Latest News</h1>
      <NewsGrid items={items} />
    </div>
  );
}

export default Homepage;
