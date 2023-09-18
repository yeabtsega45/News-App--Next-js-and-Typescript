import { categories } from "@/constants";

async function Homepage() {
  //fetch news data
  const news: NewsResponse = await fetchNews(categories.join(","));

  return (
    <div>
      <div>Homepage</div>
    </div>
  );
}

export default Homepage;
