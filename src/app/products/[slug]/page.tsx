import { Product } from "@/app/interface";
import type { Metadata, ResolvingMetadata } from "next";
import { NavbarDetailAfterLogin } from "@/components/Navbar";
import Link from "next/link";
import AddWishlistButton from "@/components/Button/AddWishlistButton";
import { FaArrowLeft } from "react-icons/fa6";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  const product = await fetchProductBySlug(slug);
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: "E-commerce - " + product.name,
    description: product.description,
    openGraph: {
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
  };
}

async function fetchProductBySlug(slug: string) {
  const response = await fetch(`http://localhost:3000/api/products/${slug}`, {
    cache: "no-store",
  });

  const product = (await response.json()) as Product;
  console.log(product);

  return product;
}

export default async function ProductsDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await fetchProductBySlug(params.slug);

  return (
    <>
      <NavbarDetailAfterLogin />
      <div className="container mx-auto mt-8 relative">
        <Link
          className="hover:scale-x-105 hover:-translate-y-1 duration-300"
          href={`/`}
        >
          <FaArrowLeft size={30} />
        </Link>
        <div className="card card bg-base-20 shadow-xl p-4 relative">
          <figure>
            <img className="" src={product.images[0]} alt="Product" />
          </figure>
          <div className="card-body">
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-lg font-bold mb-4">
              {product.price.toLocaleString("id-ID", {
                style: "currency",
                currency: "IDR",
              })}
            </p>
            <AddWishlistButton product={String(product._id)}
              name={product.name}
            />
          </div>
        </div>
      </div>
    </>
  );
}
