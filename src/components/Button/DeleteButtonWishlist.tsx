'use client'


import { errorAlert, successAlert, successToast } from "@/helpers/sweetAlert";
import { FaTrashAlt } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri"

export default function DeleteButtonWishlist({ productId, name, render }: { productId: string; name: string; render: () => Promise<void> }) {
  const deteleWishlist = async (productId: string) => {
    try {
      await fetch("http://localhost:3000/api/wishlist/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(productId),
      });
      successAlert(`${name} deleted from wishlist`);
      render()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={() => deteleWishlist(String(productId))}
      className="relative top-0 right-0 text-red-500 hover:text-red-700"
    >
      <FaTrashAlt size={26}/>
    </button>
  )
}