"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import InfiniteScroll from "react-infinite-scroll-component";
import { NavbarAfterLogin } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Pagination, Product } from "../interface";
import ProductCard from "@/components/pages/ProductCard";
import LoadingSpinner from "./loader";
import SearchComponent from "@/components/Search";


export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchKey, setSearchKey] = useState("");
  const [updateData, setUpdateData] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const searchKeyHandler = (event: React.FormEvent<HTMLInputElement>) => {
    setSearchKey(event.currentTarget.value);
  };

  const searchProductHandler = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3000/api/search?=" + searchKey
      );
      const result = (await response.json()) as Product[];

      setProducts(result);
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `http://localhost:3000/api/products?page=${currentPage + 1}`
      );
      const result = (await response.json()) as Pagination;
      setCurrentPage(currentPage + 1);
      setProducts(products.concat(result.data));

      if (result.currentPage >= result.totalPage) {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <NavbarAfterLogin updateData={updateData} setUpdateData={setUpdateData} />
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center my-8 text-black-900">
          Shoes Products
        </h1>
        <div className="flex justify-center mb-5">
          <SearchComponent
            searchKeyHandler={searchKeyHandler}
            searchProductHandler={searchProductHandler}
          />
        </div>
        <InfiniteScroll
          dataLength={products.length}
          next={getProducts}
          style={{ display: "flex", flexWrap: "wrap", gap: 16 }}
          hasMore={hasMore}
          loader={<LoadingSpinner />}
          scrollableTarget="scrollableDiv"
          className="w-full flex-wrap"
        >
          {products.map((product: Product) => (
            <ProductCard
              key={String(product._id)}
              product={product}
              setUpdateData={setUpdateData}
            />
          ))}
        </InfiniteScroll>

        {!hasMore && (
          <div className="text-center my-8 text-red-600 font-semibold">
            <Link href="/products">
              <span>Yay! You have seen it all, click here to go back</span>
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
