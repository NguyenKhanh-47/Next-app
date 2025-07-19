// app/posts/page.tsx
import Link from "next/link";
import RandomDogClient from "./RandomDogClient";
import PostFormClient from "./PostFormClient";
import { Suspense } from "react";
import SlowWidget from "./SlowWidget";
// import CheckLoginClient from "./CheckLoginClient";

type Post = { id: number; title: string; body: string };

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  });
  const data = await res.json();
  return data.slice(0, 6);
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <>
      {/* <CheckLoginClient /> */}
      {/* Nội dung load ngay */}
      <div className="p-8 space-y-12">
        {/* Server-rendered content */}
        <section>
          <h1 className="text-3xl font-bold mb-6">📝 Bài viết (server-side)</h1>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {posts.map((post) => (
              <Link key={post.id} href={`/posts/${post.id}`}>
                <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:-translate-y-1 transition-transform duration-200 cursor-pointer">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 min-h-[3em] line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2 min-h-[4.5em]">
                    {post.body}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Nội dung load sau */}
        <section>
          <Suspense
            fallback={<p className="text-gray-500">Đang tải widget...</p>}
          >
            <SlowWidget />
          </Suspense>
        </section>

        {/* Form gửi bài viết mới */}
        <section>
          <PostFormClient />
        </section>

        {/* Client-side component */}
        <section>
          <RandomDogClient />
        </section>
      </div>
    </>
  );
}
