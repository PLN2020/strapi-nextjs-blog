import React from "react";
import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm";

async function getArticles() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/articles`);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default async function Page() {
    const articles = await getArticles();
    console.log(articles);

    return (
        <div className="container">
            <h1>Blog Posts</h1>
            {articles && articles.data.map((article: any) => {
                return (
                    <div key={article.id}>
                        <div>{article.attributes.title}</div>
                        <div>{article.attributes.excerpt}</div>
                        <div>{article.attributes.content}</div>
                        <ReactMarkdown remarkPlugins={[remarkGfm]} className='prose prose-headings:text-blue-600'>
                            {article.attributes.content}
                        </ReactMarkdown>
                        <br/>
                        {article.attributes.slug}
                    </div>
                );
            })}
        </div>
    )
}