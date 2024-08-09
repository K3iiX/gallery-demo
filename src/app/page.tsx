import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

// FORCE DYNAMIC 
export const dynamic ="force-dynamic";

async function Images() {
  const images = await db.query.images.findMany({
    orderBy:(model, { asc }) => asc(model.id),
  });
  return (
    <div className="flex flex-wrap gap-4">
      {[...images, ...images, ...images].map((image, index) => (
        <div key={image.id + "-" + index} className="w-48">
          <img src={image.url} alt="image" />
          <div>{image.name}</div>
        </div>
      ))}
    </div>
  );
}

// IMAGES DATABASE //
export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2x1 text-center font-semibold text-xl"> Please Sign In Above </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
