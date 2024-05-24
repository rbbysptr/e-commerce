"use client";

import DeleteButtonWishlist from "@/components/Button/DeleteButtonWishlist";
import React, { useEffect, useState } from "react";
import { Product } from "../interface";
import { ObjectId } from "mongodb";
import { NavbarAfterLogin } from "@/components/Navbar";
import WishlistCard from "@/components/pages/WishlistCard";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

type GroupWishList = {
  detail: Product;
  _id: ObjectId;
};

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState<GroupWishList[]>();

  const [updateData, setUpdateData] = useState(false);

  const getWishlist = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/wishlist");
      const result = await response.json();
      setWishlist(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWishlist();
  }, []);

  return (
    <>
      <NavbarAfterLogin updateData={updateData} setUpdateData={setUpdateData} />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8 text-center text-dark-900">
          My Wishlist
        </h1>
        <Link
          className="hover:scale-x-105 hover:-translate-y-1 duration-300"
          href={`/products`}
        >
          <FaArrowLeft size={32} /><br />
        </Link>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {wishlist?.map((data) => (
            <WishlistCard
              key={String(data._id)}
              data={data}
              render={() => getWishlist()}
            />
          ))}
        </div>
      </div>
    </>
  );
}
