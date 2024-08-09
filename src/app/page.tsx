import { db } from "~/server/db";

// FORCE DYNAMIC 
export const dynamic ="force-dynamic";

// IMAGES DATABASE //
export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy:(model, { asc }) => asc(model.id),
  });

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...images, ...images, ...images].map((image, index) => (
        <div key={image.id + "-" + index} className="w-48">
          <img src={image.url} alt="image" />
          <div>{image.name}</div>
        </div>
      ))
      }
      </div>
    </main>
  );
}
