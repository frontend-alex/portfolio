import getFormattedDate from "@lib/getFormattedDate";
import { getSortedPostsData } from "@lib/posts";
import Link from "next/link";
import React from "react";

const page = () => {
  const posts = getSortedPostsData();

  return (
    <div className="max-width-wrapper flex flex-col">
      <div className="h-[100px] bg-transparent w-full"></div>

      <div className="flex flex-col gap-14">
        <div className="flex items-center gap-3">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/" className="text-underline">
            Blog
          </Link>
        </div>

        <h1 className="text-3xl lg:text-5xl font-bold">Blog</h1>

        <div className="flex flex-col gap-3">
          {posts.map((post) => {
            const { id, title, date } = post;
            const formatedDate = getFormattedDate(date);
            return (
              <>
                <div className="border-b dark:border-[#252525] pb-3 ">
                  <Link
                    className="flex justify-start items-start flex-col lg:flex-row lg:items-center gap-5"
                    href={`/blog/${id}`}
                    id="hoverElement"
                  >
                    <p className="text-stone-400">• {formatedDate}</p>
                    <h1 className="text-xl lg:text-2xl underline">{title}</h1>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
