import { ObjectId } from "mongodb";

export type Product = {
  _id: ObjectId;
  name: string;
  slug: string;
  description: string;
  excerpt: string;
  price: number;
  tags: [string];
  thumbnail: string;
  images: [string];
  createdAt: Date;
  updatedAt: Date;
};

export type Wishlist = {
  userId: ObjectId;
  productId: ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export type Pagination = {
  data: Product[];
  currentPage: number;
  currentData: number;
  totalData: number;
  totalPage: number;
  hasMore: boolean;
}

export type MyResponse<T = null> = {
  data?: T;
  error?: string[];
  message: string;
};
