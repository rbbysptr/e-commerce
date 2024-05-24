import { Product } from "@/app/interface";
import { fetchProducts } from "@/action/user";
import ProductHomeCard from "@/components/pages/ProductHomeCard";
import Link from "next/link";


export default async function ProductsHomePage() {
  const products = await fetchProducts();
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center my-8 text-black-900">E-Commerce Products</h1>
        <Link className="btn btn-outline rounded-3xl hover:scale-x-105 hover:-translate-y-1 duration-300" href={"/products"}>
          <h1 className="text-xl ">All Products</h1>
        </Link>
        <main className="flex flex-nowrap overflow-x-scroll gap-5 mt-10">
          {products.map((product: Product) => {
            return <ProductHomeCard product={product} />;
          })}
        </main>
      </div>
    </>
  );
}
