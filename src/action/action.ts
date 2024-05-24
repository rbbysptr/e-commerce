'use server'

import { revalidatePath } from "next/cache"

export async function deleteProductWishlist(id:string){
    const res = await fetch("http://localhost:3000/api/products/" + id,{
        method: "DELETE"
    })

    const result = await res.json()

    if(res.ok){
        revalidatePath("/wishlist")
    }
    
}