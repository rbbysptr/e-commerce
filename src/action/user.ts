"use server"

import { Product, Pagination } from "@/app/interface";
import { PayloadJose } from "@/helpers/jwt";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function logout() {
  cookies().delete("Authorization");
  redirect("/");
}

export async function isLogin() {
  const authorization = cookies().get("Authorization");
  if (!authorization) return { status: false };

  const token = authorization.value.split(" ")[1];
  await PayloadJose(token);
  return { status: true };
}

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch("http://localhost:3000/api/products?page=1", {
    cache: "no-cache"
  })
  const data: Pagination = await response.json()
  const products = data.data

  return products
}