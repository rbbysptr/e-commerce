"use client"
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Link from "next/link";
import { isLogin, logout } from "@/action/user";
import { FaShop } from "react-icons/fa6";
import { FaHome, FaShoppingCart, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { errorAlert2, successToast } from "@/helpers/sweetAlert";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-dark-100 via-black-200 to-black-100">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex items-center justify-start mr-auto">
            <div className="flex items-center justify-start hover:scale-x-105 hover:-translate-y-1 duration-300">
              <Link
                href={"/"}
                className="ml-2 font-bold text-lg text-black-800"
              >
                <FaHome size={28}/>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4"></div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Link
              href="/wishlist"
              className="text-gray-800 hover:text-gray-900 hover:scale-x-105 hover:-translate-y-1 duration-300"
            >
              <FaShoppingCart size={28}/>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

type PropsNavLogin = {
  updateData: boolean;
  setUpdateData: Dispatch<SetStateAction<boolean>>;
};

export function NavbarAfterLogin({ updateData, setUpdateData }: PropsNavLogin) {
  const [hasLogin, setHasLogin] = useState(false);

  useEffect(() => {
    (async () => {
      const result = await isLogin();
      setHasLogin(result.status);
    })();
  }, [updateData]);


  const logoutWithConfirmation = () => {
    errorAlert2("Are you serious logout?", true).then((result) => {
      if (result.isConfirmed) {
        logout(); 
      }
    });
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-black-100 via-black-200 to-dark-100">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex items-center justify-center sm:justify-start flex-grow ">
              <div className="flex items-center hover:scale-x-105 hover:-translate-y-1 duration-300">
                <Link href={"/"} className="ml-2 font-bold text-lg">
                  <FaHome size={28} />
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4"></div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 hover:scale-x-105 hover:-translate-y-1 duration-300">
              <Link href="/wishlist">
                <FaShop size={28} />
              </Link>
              {hasLogin ? (
                <>
                  <div
                    onClick={logoutWithConfirmation}
                    className="text-gray-900 rounded-md px-3 py-2 text-sm font-medium hover:bg-red-200 transition-colors duration-300 ml-5"
                    style={{ color: "red" }}
                  >
                    <FaSignOutAlt size={28} />
                  </div>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="text-gray-800 rounded-md px-3 py-2 text-sm font-medium  hover:bg-green-200 transition-colors duration-300 ml-5 hover:scale-x-105 hover:-translate-y-1 duration-300"
                  >
                    <FaSignInAlt size={28} />
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}


export function NavbarDetailAfterLogin() {
  const [hasLogin, setHasLogin] = useState(false);
  useEffect(() => {
    (async () => {
      const result = await isLogin();
      setHasLogin(result.status);
    })();
  }, []);
  const logout = () => {
    errorAlert2("Are you serious logout?", true)
  };
  return (
    <>
      <nav className="bg-gradient-to-r from-dark-100 via-dark-200 to-dark-100"> 
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex items-center justify-center sm:justify-start flex-grow">
              <div className="flex items-center hover:scale-x-105 hover:-translate-y-1 duration-300">
                <Link href={"/"} className="ml-2 font-bold text-lg">
                  <FaHome size={28} />
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4"></div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 hover:scale-x-105 hover:-translate-y-1 duration-300">
              <Link href="/wishlist">
                <FaShop size={28} />
              </Link>
              {hasLogin ? (
                <>
                  <div
                    onClick={() => {
                      logout();
                    }}
                    className="text-gray-900 rounded-md px-3 py-2 text-sm font-medium hover:bg-red-200 transition-colors duration-300 ml-5"
                    style={{ color: "red" }}
                  >
                    <FaSignOutAlt size={28} />
                  </div>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="text-gray-800 rounded-md px-3 py-2 text-sm font-medium  hover:bg-dark-200 transition-colors duration-300 ml-5 hover:scale-x-105 hover:-translate-y-1 duration-300"
                  >
                    <FaSignInAlt />
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
