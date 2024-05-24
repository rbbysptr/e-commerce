import { FaSearch } from "react-icons/fa";

export default function SearchComponent({searchKeyHandler, searchProductHandler}: {searchKeyHandler: (event: React.FormEvent<HTMLInputElement>) => void, searchProductHandler: (event: React.MouseEvent<HTMLElement>) => void}) {

  return (
    <form className="w-96 flex" action="">
            <input
              className="border-none bg-gray-100 p-2 w-full rounded-xl"
              type="text"
              name="search"
              id=""
              placeholder="Search.."
              onChange={searchKeyHandler}
            />
            <button
              onClick={searchProductHandler}
              className="ml-2 hover:scale-x-105 hover:-translate-y-1 duration-300"
            >
              <FaSearch />
            </button>
          </form>
  );
}
