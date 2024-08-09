import { db } from "~/server/db";

export const dynamic ="force-dynamic";

const mockUrls = [
  "https://utfs.io/f/13b46d98-71e3-4f26-8eb7-2c05bc84ab97-l76q3g.png",
  "https://utfs.io/f/97896348-4f75-4559-813a-d26631f406fc-d8htdx.png",
  "https://utfs.io/f/04bc0ff5-8463-4449-9a86-0120c1c91961-433pr8.png",
  "https://utfs.io/f/28f9c26a-2f46-48f6-97e5-9d6209bbc194-4uqyur.png",
  "https://utfs.io/f/b8ff90aa-78ee-41f9-a857-ab67cb77a46c-p3jdxu.png"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

// IMAGES STYLE //
export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);
  
  
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
        <div key={image.id + "-" + index} className="w-48">
          <img src={image.url} alt="image" />
        </div>
      ))
      }
      </div>
    </main>
  );
}
