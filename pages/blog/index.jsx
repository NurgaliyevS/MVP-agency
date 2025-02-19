import ArticleCard from '@/components/ArticleCard';
import Pagination from '@/components/Pagination';
import { BlogClient } from 'seobot';

export async function generateMetadata() {
  const title = 'SeoBot Blog';
  const description = 'Get the inside scoop on SeoBot - the AI-powered SEO solution for content creation, optimization, and automated traffic growth on Autopilot.';
  return {
    title,
    description,
    metadataBase: new URL('https://seobotai.com'),
    alternates: {
      canonical: '/blog',
    },
    openGraph: {
      type: 'website',
      title,
      description,
      // images: [],
      url: 'https://seobotai.com/blog',
    },
    twitter: {
      title,
      description,
      // card: 'summary_large_image',
      // images: [],
    },
  };
}

async function getPosts(page) {
  const key = process.env.SEOBOT_API_KEY;
  if (!key) throw Error('SEOBOT_API_KEY enviroment variable must be set. You can use the DEMO key a8c58738-7b98-4597-b20a-0bb1c2fe5772 for testing - please set it in the root .env.local file');

  const client = new BlogClient(key);
  return client.getArticles(page, 10);
}

export const fetchCache = 'force-no-store';

export default async function Blog({ searchParams: { page } }) {
  const pageNumber = Math.max((page || 0) - 1, 0);
  const { total, articles } = await getPosts(pageNumber);
  const posts = articles || [];
  const lastPage = Math.ceil(total / 10);

  return (
    <section className="max-w-3xl my-8 lg:mt-10 mx-auto px-4 md:px-8 dark:text-white tracking-normal">
      <h1 className="text-4xl my-4 font-black">SeoBot Blog</h1>
      <ul>
        {posts.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </ul>
      {lastPage > 1 && <Pagination slug="/blog" pageNumber={pageNumber} lastPage={lastPage} />}
    </section>
  );
}
