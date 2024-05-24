import type { Metadata } from "next";
import ProductsHomePage from "./homeproduct/page";
import Footer from "@/components/Footer";

import Navbar from "@/components/Navbar";
import { Carousel } from "@/components/Carousel";
import BottomCarousel from "@/components/bottomCarousel";

export const metadata: Metadata = {
  title: "E-commerce - All Product",
  description: "Get All Product With Good Quality",
};

export default async function Home() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="grid grid-col-3 grid-flow-col gap-2 mt-5">
          <Carousel />
        </div>
        <ProductsHomePage />
      </div>
      <BottomCarousel />
      <Footer />
    </>
  );
}
