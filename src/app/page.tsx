import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

// FORCE DYNAMIC 
export const dynamic ="force-dynamic";

async function Images() {
  const images = await getMyImages();
  
  return (
    <div className="flex justify-center flex-wrap gap-4">
      {images.map((image) => (
        <div key={image.id} className="flex h-48 w-48 flex-col">
          <Link href={`/img/${image.id}`}>
          <Image 
            src={image.url} 
            style={{objectFit: "contain" }}
            width={192}
            height={192}
            alt={image.name}
          />
          </Link>
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
