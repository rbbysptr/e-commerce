
import { getCollection } from "../config";
import { Pagination, Product } from "@/app/interface";

type NewProduct = Omit<Product, "_id">

export default class Products {
   static collection() {
      return getCollection('Products')
   }

   static async findAll(page: number) {
      const dataPerpage = 8;
      const skipData = dataPerpage * page;

      const aggTotalData = [
         {
            $group: {
               _id: null,
               count: {
                  $count: {},
               },
            },
         },
      ];

      const agg = [
         {
            $skip: skipData,
         },
         {
            $limit: dataPerpage,
         },
      ];

      const totalData = await this.collection().aggregate(aggTotalData).toArray();

      const products = (await this.collection().aggregate(agg).toArray()) as Product[];

      let currentPage = page + 1;
      let totalPage = Math.ceil(totalData[0].count / dataPerpage)
      const result: Pagination = {
         data: products,
         currentPage: currentPage,
         hasMore: currentPage < totalPage,
         currentData: products.length,
         totalData: totalData[0].count,
         totalPage: totalPage,
      };
      return result;
   }

   static async findBySlug(slug: string) {
      const product = await this.collection().findOne({ slug });

      return product;
   }

   static async addProduct(newProduct: NewProduct) {
      newProduct.createdAt = new Date();
      newProduct.updatedAt = new Date();

      await this.collection().insertOne(newProduct);

      return { message: "Success add new product" };
   }

   static async getProductByName(searchKey: string) {
      const products = (await this.collection()
         .find({ name: { $regex: searchKey, $options: "i" } })
         .toArray()) as Product[];

      return products;
   }

   static async getProductPreview() {
      const agg = [
         {
            $limit: 5,
         },
      ];
      const products = (await this.collection().aggregate(agg).toArray()) as Product[];
      return products;
   }
}