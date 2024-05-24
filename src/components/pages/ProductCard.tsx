'use client'

import { Product } from "@/app/interface";
import Link from "next/link";

import { Dispatch, SetStateAction } from "react";

import AddWishlistButton from "../Button/AddWishlistButton";


interface ProductCardProps {
  product: Product;
  setUpdateData: Dispatch<SetStateAction<boolean>>;
}

export default function ProductCard({ product, setUpdateData }: ProductCardProps) {

  return (

    <div className="card w-[24%] bg-base-100 shadow-xl mb-4 hover:scale-x-105 hover:-translate-y-1 duration-300">
      <figure>
        <img src={product.images[0]} alt="Products!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.description}</p>
        <div className="card-actions justify-start">
          <Link
            className="btn btn-outline rounded-2xl"
            href={`/products/${product.slug}`}
          >
            <h1 className="text-l">See Detail</h1>
          </Link>
          <AddWishlistButton
            product={String(product._id)}
            name={product.name}

          />
        </div>
      </div>
    </div>

  );
}
