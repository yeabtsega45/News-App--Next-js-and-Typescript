import Image from "@/node_modules/next/image";
import React from "react";

export interface NewsArticle {
  url: string;
  urlToImage: string;
  title: string;
  source: {
    id?: string;
    name: string;
  };
  description: string;
  publishedAt: string;
}

function NewsItem({ item }: { item: NewsArticle }) {
  const websiteUrl = item.url;
  const website = websiteUrl?.split("https://")?.pop()?.split("/")?.[0] ?? "";

  const date = item.publishedAt;
  const formatDate = date ? date.replace("T", "") : "";
  const formatTime = formatDate.replace("Z", "");

  const sourceId = item.source?.id ?? "";
  const sourceName = item.source?.name ?? "";

  return (
    <a
      href={item.url}
      className="bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-sm hover:scale-105 hover:shadow-lg hover:bg-slate-200 transition-all duration-200 ease-out"
    >
      <div>
        <img
          src={item.urlToImage}
          alt={item.title}
          className="h-56 w-full object-cover rounded-t-lg shadow-md"
        />
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex">
          <img
            src={`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${website}&size=16`}
            alt={sourceId}
            width={16}
            height={16}
          />
          <span>{sourceName}</span>
        </div>
        <div>
          <h2 className="font-bold font-serif">{item.title}</h2>
        </div>
        <p className="text-xs">{item.description}</p>
        <div className="text-lg text-right ml-auto flex space-x-1 pt-5 italic text-gray-700">
          <small>
            <b>Published At: </b>
            {formatTime}
          </small>
        </div>
        <button className="bg-orange-400 h-10 rounded-b-lg dark:text-gray-900 hover:bg-orange-500">
          Read More
        </button>
      </div>
    </a>
  );
}

export default NewsItem;
