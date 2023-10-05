import React from "react";
import NewsItem from "./NewsItem";
import { NewsArticle } from "./NewsItem";

interface Props {
  items: NewsArticle[];
}

function NewsGrid({ items }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10">
      {Array.isArray(items) &&
        items.map((item, i) => <NewsItem key={i} item={item} />)}
    </div>
  );
}

export default NewsGrid;
