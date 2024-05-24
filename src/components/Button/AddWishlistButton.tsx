'use client'

import { errorAlert, successToast } from "@/helpers/sweetAlert";
import { redirect } from "next/navigation";
import { useState } from "react";
import { FaStar } from "react-icons/fa";


export default function AddWishlistButton({ product, name }: { product: string, name: string }) {
   const [updateData, setUpdateData] = useState(false);
   const addToWishlist = async () => {
      try {
         const response = await fetch("http://localhost:3000/api/wishlist/add", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
         });
         const result = await response.json();
         if (result.message == "Invalid token") {
            redirect("/login")
         } else {
            setUpdateData(true)
         }
         successToast(`${name} added to wishlist`);
      } catch (error) {
         errorAlert("Please Login to add product to wishlist",true);
      }
   };
   return (
      <button
         onClick={addToWishlist}
         className="bg-black flex justify-center rounded-full items-center border text-white text-2xl font-semibold w-10 h-10 shadow-md absolute right-1 bottom-1 hover:scale-x-105 hover:-translate-y-1 duration-300"
      >
         <FaStar />
      </button>
   );
}
