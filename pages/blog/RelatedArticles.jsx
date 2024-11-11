import Link from "next/link";
import Image from "next/image";
import React from "react";
import { format } from "date-fns";

const RelatedArticles = ({ currentPost, relatedPosts }) => {
  if (relatedPosts.length === 0) return null;

  return (
    <section className="mt-16 border-t pt-12">
      <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {relatedPosts.map((post) => (
          <article
            key={post.slug}
            className="flex flex-col bg-base-200 shadow-xl"
          >
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

export default RelatedArticles;
