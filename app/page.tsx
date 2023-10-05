"use client";

import { useEffect, useState } from "react";
import NewsGrid from "./NewsGrid";
import { NewsArticle } from "./NewsItem";
import NewsItem from "./NewsItem";
import Menu from "./Menu";

function Homepage() {
  const [items, setItems] = useState<NewsArticle[]>([]);
  const [active, setActive] = useState(1);
  const [category, setCategory] = useState("general");

  //fetch news data
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apikey=ebc6fe1bc46e4acd9105b617c65dfb26`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.articles) {
          throw new Error("No articles found");
        }
        setItems(data.articles);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [category]);

  return (
    <div>
      <Menu active={active} setActive={setActive} setCategory={setCategory} />
      <h1 className="font-serif text-2xl text-center underline decoration-6 decoration-orange-400">
        See The Latest News
      </h1>
      <NewsGrid items={items} />
    </div>
  );
}

export default Homepage;
