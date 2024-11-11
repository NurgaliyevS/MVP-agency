import Head from "next/head";
import { format } from "date-fns";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import Link from "next/link";
import Image from "next/image";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeRaw from "rehype-raw";
import rehypeReact from "rehype-react";
import React from "react";
import Footer from "@/components/Footer";
import remarkGfm from "remark-gfm";
import BlogHeader from "./BlogHeader";

const generateId = (text) => {
  // Handle cases where text might be a React element or non-string
  if (typeof text !== "string") {
    // If text is an array (React children), try to extract string content
    if (Array.isArray(text)) {
      text = text
        .map((child) =>
          typeof child === "string"
            ? child
            : child?.props?.children
            ? child.props.children
            : ""
        )
        .join("");
    } else if (text?.props?.children) {
      // Handle React elements
      text = text.props.children;
    } else {
      // If we can't extract meaningful text, return empty string
      return "";
    }
  }

  // Convert to string explicitly and generate ID
  return String(text)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
};

const renderAst = (content) =>
  unified()
    .use(rehypeParse, { fragment: true })
    .use(rehypeRaw)
    .use(rehypeReact, {
      createElement: React.createElement,
      components: {
        h2: (props) => (
          <section className="article">
            <h2
              id={generateId(props.children[0])}
              className="text-2xl lg:text-4xl font-extrabold tracking-tight mb-4 text-base-content"
              {...props}
            />
          </section>
        ),
        h3: (props) => (
          <section className="article">
            <h3
              id={generateId(props.children[0])}
              className="text-xl lg:text-2xl font-bold tracking-tight mb-2 text-base-content"
              {...props}
            />
          </section>
        ),
        h4: (props) => (
          <section className="article">
            <h4
              id={generateId(props.children[0])}
              className="text-lg lg:text-xl font-bold tracking-tight mb-2 text-base-content"
              {...props}
            />
          </section>
        ),
        h5: (props) => (
          <section className="article">
            <h5
              id={generateId(props.children[0])}
              className="text-base-content/90 font-bold tracking-tight mb-2 text-base-content"
              {...props}
            />
          </section>
        ),
        strong: (props) => <strong className="text-base-content" {...props} />,
        ol: (props) => (
          <ol
            className="list-decimal text-base-content/90 leading-relaxed pl-5"
            {...props}
          />
        ),
        ul: (props) => (
          <ul
            className="list-disc text-base-content/90 leading-relaxed pl-5"
            {...props}
          />
        ),
        li: (props) => (
          <li className="list-item pl-1 marker:mr-2">{props.children}</li>
        ),
        img: (props) => {
          return (
            <img className={`rounded-xl mt-4`} {...props} loading="lazy" />
          );
        },
        p: (props) => {
          const content = props.children.map((child) => {
            if (typeof child === "string") {
              return child.split("\n").map((text, index, array) => (
                <React.Fragment key={index}>
                  {text}
                  {index < array.length - 1 && <br />}
                </React.Fragment>
              ));
            }
            return child;
          });

          return (
            <p className="text-base-content/90 leading-relaxed">{content}</p>
          );
        },
        table: (props) => (
          <div className="overflow-x-auto my-4 text-base-content border rounded-xl">
            <table className="table w-full" {...props} />
          </div>
        ),
        thead: (props) => <thead {...props} />,
        tbody: (props) => <tbody {...props} />,
        tr: (props) => <tr className="border-b" {...props} />,
        th: (props) => (
          <th
            className="bg-base-200 px-4 py-2 text-left font-bold"
            {...props}
          />
        ),
        td: (props) => <td className="px-4 py-2" {...props} />,
        a: (props) => (
          <a className="link link-primary" rel="nofollow" {...props} />
        ),
        hr: (props) => null,
      },
    })
    .processSync(content).result;

const RelatedArticles = ({ currentPost, relatedPosts }) => {
  if (relatedPosts.length === 0) return null;

  return (
    <section className="mt-16 border-t pt-12">
      <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {relatedPosts.map((post) => (
          <article key={post.slug} className="flex flex-col bg-base-200 shadow-xl">
            <figure className="h-56">
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="p-6 flex flex-col">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="badge badge-sm hover:badge-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-lg font-bold mb-2 line-clamp-2">
                <Link
                  href={`/blog/${post.slug}`}
                  className="link link-hover hover:link-primary"
                >
                  {post.title}
                </Link>
              </h3>
              <p className="text-base-content/80 text-sm line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm mt-10">
                <Link
                  href={`/blog/author/${post.author.toLowerCase()}`}
                  className="inline-flex items-center gap-2 group"
                >
                  <Image
                    src="/Sabyr_Nurgaliyev.webp"
                    alt={`Post By ${post.author}`}
                    width={32}
                    height={32}
                    className="rounded-full object-cover"
                  />
                  <span className="group-hover:underline">{post.author}</span>
                </Link>
                <span>{format(new Date(post.date), "MMM d, yyyy")}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default function BlogPost({ post, relatedPosts }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    description: post.excerpt,
  };

  return (
    <div className="mx-auto">
      <Head>
        <title>{`${post.title} | MVPAgency Blog`}</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(", ")} />
        <link
          rel="canonical"
          href={`https://mvpagency.org/blog/${post.slug}`}
        />
        <meta property="og:title" content={`${post.title} | MVPAgency Blog`} />
        <meta property="og:description" content={post.excerpt} />
        <meta
          property="og:url"
          content={`https://mvpagency.org/blog/${post.slug}`}
        />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.date} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <BlogHeader />
      <main className="min-h-screen max-w-6xl mx-auto p-8">
        <div>
          <Link
            href="/blog"
            className="link !no-underline text-base-content/80 hover:text-base-content inline-flex items-center gap-1"
            title={"Back to Blog"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
                clipRule="evenodd"
              ></path>
            </svg>
            Back to Blog
          </Link>
        </div>
        <article>
          <section className="my-12 md:my-20 max-w-screen-md">
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="badge badge-sm md:badge-md hover:badge-primary"
                >
                  {tag}
                </span>
              ))}
              <span itemProp="datePublished">
                {format(new Date(post.date), "MMMM d, yyyy")}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 md:mb-8">
              {post.title}
            </h1>
            <p className="text-base-content/80 md:text-lg max-w-screen-md">
              {post.excerpt}
            </p>
          </section>
          <div className="flex flex-col md:flex-row">
            <section className="max-md:pb-4 md:pl-12 max-md:border-b md:border-l md:order-last md:w-72 shrink-0">
              <p className="text-base-content/80 text-sm mb-2 md:mb-3">
                Posted by
              </p>
              <Link
                href={`/blog/author/sabyr`}
                className="inline-flex items-center gap-2 group"
                title={`Posts By ${post.author}`}
                rel="author"
              >
                <span itemProp="author">
                  <Image
                    src={"/Sabyr_Nurgaliyev.webp"}
                    alt={`Post By ${post.author}`}
                    width={50}
                    height={50}
                    className="w-8 h-8 rounded-full object-cover object-center"
                  />
                </span>
                <span className="group-hover:underline">{post.author}</span>
              </Link>
            </section>
            <section className="w-full max-md:pt-4 md:pr-20 space-y-12 md:space-y-20">
              <Image
                alt={post.alt}
                src={post.image}
                className="rounded-xl"
                width={700}
                height={500}
              />
              {renderAst(post.contentHtml)}
            </section>
          </div>
          <RelatedArticles currentPost={post} relatedPosts={relatedPosts} />
        </article>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), "blog-posts");
  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(".md", "") },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const postsDirectory = path.join(process.cwd(), "blog-posts");
  const filePath = path.join(postsDirectory, `${params.slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .use(remarkGfm)
    .process(content);
  const contentHtml = processedContent.toString();

  // Get all posts to find related ones
  const filenames = fs.readdirSync(postsDirectory);
  const allPosts = filenames
    .filter((filename) => filename !== `${params.slug}.md`)
    .map((filename) => {
      const postPath = path.join(postsDirectory, filename);
      const postContent = fs.readFileSync(postPath, "utf8");
      const { data } = matter(postContent);
      return {
        slug: filename.replace(".md", ""),
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        author: data.author,
        tags: data.tags,
        image: data.image,
        alt: data.alt,
      };
    });

  // Find related posts based on matching tags
  const relatedPosts = allPosts
    .map((post) => ({
      ...post,
      matchingTags: post.tags.filter((tag) => data.tags.includes(tag)).length,
    }))
    .filter((post) => post.matchingTags > 0)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .sort((a, b) => b.matchingTags - a.matchingTags)
    .slice(0, 6); // Limit to 3 related posts

  return {
    props: {
      post: {
        slug: params.slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        author: data.author,
        tags: data.tags,
        image: data.image,
        alt: data.alt,
        contentHtml,
      },
      relatedPosts,
    },
  };
}
