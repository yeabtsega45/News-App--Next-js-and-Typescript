import Image from "@/node_modules/next/image";
import React from "react";

interface Props {
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

function NewsItem(item: Props) {
  const websiteUrl = item.url;
  const website = websiteUrl?.split("https://")?.pop()?.split("/")?.[0] ?? "";

  const date = item.publishedAt;
  const formatDate = date ? date.replace("T", "") : "";
  const formatTime = formatDate.replace("Z", "");

  const sourceId = item.source?.id ?? "";
  const sourceName = item.source?.name ?? "";

  return (
    <a href={item.url}>
      <div>
        <Image
          src={item.urlToImage}
          alt={item.title}
          width={200}
          height={200}
        />
      </div>
      <div>
        <div>
          <img
            src={`https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${website}&size=16`}
            alt={sourceId}
            width={16}
            height={16}
          />
          <span>{sourceName}</span>
        </div>
        <div>
          <h2>{item.title}</h2>
        </div>
        <p>{item.description}</p>
        <div>
          <small>
            <b>Published At: </b>
            {formatTime}
          </small>
        </div>
      </div>
    </a>
  );
}

export default NewsItem;
