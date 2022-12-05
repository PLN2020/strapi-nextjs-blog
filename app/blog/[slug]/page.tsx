import Image from 'next/image';
import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm";

export default async function Page({ params }: { params: any }) {
    console.log(params)
    const article = await getArticle(params.slug)
    console.log(article)
    console.log(article.data.attributes.cover.data[0].attributes.url)
    
    return (
        <div>
            <h1>
                {article.data.attributes.title}
            </h1>
            <Image 
                src={article.data.attributes.cover.data[0].attributes.url}
                alt="Featured Image" 
                width={600} 
                height={400} 
            />
            <ReactMarkdown remarkPlugins={[remarkGfm]} className='prose prose-headings:text-blue-600'>
                {article.data.attributes.content}
            </ReactMarkdown>
        </div>
    )
}

async function getArticle(slug: any) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/article/${slug}?populate=*`);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}