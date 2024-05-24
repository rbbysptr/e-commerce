"use client"
import { Product } from "@/app/interface";
import Link from "next/link";

type ProductCardProps = {
  product: Product;
};

export default function ProductHomeCard({ product }: ProductCardProps) {
  const truncatedDescription = product.description.substring(0, 100) + "...";

  return (
    <>
      <div className="card w-[30%] min-h-[20%] bg-base-100 shadow-xl mb-4 hover:scale-x-105 hover:-translate-y-1 duration-300">
        <figure>
          <img src={product.images[0]} alt="Products" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <p>{truncatedDescription}</p>
          <div className="card-actions justify-start">
            <Link className="btn btn-outline rounded-2xl mx-auto" href={`/products/${product.slug}`}>
              <h1 className="text-l">See Detail</h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
