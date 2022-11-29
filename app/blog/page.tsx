import Link from "next/link";

export default async function Page() {
    const articles = await getArticles();
    console.log(articles);

    return (
        <div className="container">
            <h1>Blog Posts</h1>
            {articles && articles.data.map((article: any) => {
                return (
                    <div key={article.id}>
                        <Link href={`/blog/${article.attributes.slug}`}>
                            <h2>{article.attributes.title}</h2>
                        </Link>
                        <div>{article.attributes.excerpt}</div>
                    </div>
                );
            })}
        </div>
    )
}

async function getArticles() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/articles?populate=*`);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}