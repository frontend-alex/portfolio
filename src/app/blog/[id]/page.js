import getFormattedDate from "@/lib/getFormattedDate";
import { getSortedPostsData, getPostData } from "@/lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";

export function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map((post) => ({
    postId: post.id,
  }));
}

export function generateMetadata({ params }) {
  const posts = getSortedPostsData();
  const { postId } = params;

  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
  };
}

export default async function Post({ params }) {
  const posts = getSortedPostsData();
  const { id } = params;


  if (!posts.find((post) => post.id === id)) notFound();

  const { title, date, contentHtml } = await getPostData(id);

  const pubDate = getFormattedDate(date);

  return (
    <div className="max-width-wrapper flex flex-col">
      <div className="h-[100px] bg-transparent w-full"></div>
      <main className="px-6 prose prose-xl prose-slate dark:prose-invert mx-auto">
        <h1 className="text-3xl mt-4 mb-0">{title}</h1>
        <p className="mt-0">{pubDate}</p>
        <article>
          <section dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </article>
      </main>
    </div>
  );
}
