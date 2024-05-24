import { Product } from "@/app/interface";
import { ObjectId } from "mongodb";
import DeleteButtonWishlist from "../Button/DeleteButtonWishlist";
import Link from "next/link";

type GroupWishList = {
  detail: Product;
  _id: ObjectId;
};

export default function WishlistCard({
  data,
  render,
}: {
  data: GroupWishList;
  render: () => Promise<void>;
}) {
  return (
    <>
      {data && data.detail ? (
        <div
          key={String(data._id)}
          className="border rounded-lg overflow-hidden shadow-md flex"
        >
          <img
            src={data.detail?.images[0]}
            alt={data.detail?.name}
            className="w-32 h-32 object-cover"
          />
          <div className="p-4 flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-semibold mb-2">{data.detail?.name}</h2>
              <p className="text-gray-600 mb-4">{data.detail?.description}</p>
            </div>
            <DeleteButtonWishlist
              productId={String(data.detail._id)}
              name={data.detail.name}
              render={render}
            />
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-lg font-semibold mb-2">
            Oops, you haven't added any wishlist yet.
          </p>
          <p>
            Add your wishlist{" "}
            <Link href="/products">
              <a className="text-blue-500">here</a>
            </Link>{" "}
            now!
          </p>
        </div>
      )}
    </>
  );
}
