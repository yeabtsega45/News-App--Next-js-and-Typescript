import React from "react";
import NewsItem from "./NewsItem";

interface Props {
  item: NewsItem[];
}

function NewsGrid({ items }: Props) {
  return (
    <div>
      {items.map((item, i) => (
        <NewsItem key={i} item={item} />
      ))}
    </div>
  );
}

export default NewsGrid;
