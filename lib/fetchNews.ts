import { gql } from "@/node_modules/graphql-request/build/esm/index"

const fetchNews = async (
    category?: Category | string,
    keywords?: string,
    isDynamic?: boolean,
) => {
    //GraphQL query
    const query = gql`
    query MyQuery(
        $access_key: String!
        $categories: String!
        $keywords: String
        ) {
            myQuery(
                access_key: $access_key
                countries: "gb"
                categories: $categories
                sort: "published_desk"
                keywords: $keywords
              ) {
                data {
                    author
                    category
                    country
                    description
                    image
                    language
                    published_at
                    source
                    title
                    url
                }
                pagination {
                    count
                    limit
                    offset
                    total
                }
              }
        }`;
    //Fetch function with Next.js 13 caching
    const res = await fetch("https://oliveiradeazemeis.stepzen.net/api/endpoint/__graphql",{
        method:"POST",
        cache: isDynamic ? "no-cache" : "default",
        next: isDynamic ? {revalidate:0} : {revalidate:20},
        headers: {
            "Content-Type": "application/json",
            Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
        }
    })    
}

export default fetchNews

//stepzen import curl "http://api.mediastack.com/v1/news?access_key=fd89d5ff0fc137f32fc10a434d641c44"