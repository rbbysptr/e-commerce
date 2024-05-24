"use client";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-grey-100 via-green-200 to-green-100">
      <div className="container mx-auto px-1 py-1 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold">E-Commerce</h2>
            <div className="mb-5">
              <p className="mt-2 text-gray-800">
                GET THE LATEST COLLECTION OF SPORTS SHOES, SNEAKERS & SPORTS EQUIPMENT AT ADIDAS INDONESIA
              </p>
            </div>
            <p className="text-gray-800">
              Welcome to the official adidas Indonesia website where you can buy quality sports gear and accessories. adidas Indonesia Official Online Store provides the best products ranging from sports shoes, and sneakers, to other sports accessories for all your needs. There are a variety of shoes that are suitable for every moment and comfortable to wear while exercising. In the adidas Indonesia Official Online Store, there are various top products such as Ace &; X Football Shoes, adidas Originals, Training Shoes, Tops for Running, Women's Sport Bra, Sports Accessories and many more. adidas Official Online Store is constantly updating its product list so you can buy our latest collection of shoes, clothing, sports accessories. Find your favorite shoes ranging from shoes for men, women, and children only in our official online store.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold">Quick Links</h2>
            <ul className="mt-2">
              <li>
                <Link className="text-gray-800 hover:text-blue-600" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-800 hover:text-blue-600"
                  href="/products"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-800 hover:text-blue-600"
                  href="/about"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold">Contact Us</h2>
            <p className="flex items-center"><FaEnvelope className="mr-2" /> hantu@mail.com</p>
            <p className="flex items-center"><FaWhatsapp className="mr-2" /> +621234567890</p>
            <p className="flex items-center"><FaMapMarkerAlt className="mr-2" />Jl. Harapan mertua No. 123, Kota dimana</p>
          </div>

          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold">Follow Us</h2>
            <div className="flex items-center justify-center md:justify-start mt-2">
              <a
                href="https://www.facebook.com/robby.saputra.5815?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2 hover:scale-x-105 hover:-translate-y-1 duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/rbbysaputraa?igsh=NzBtb29lZjh2MmFp"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-x-105 hover:-translate-y-1 duration-300"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-300" />
        <div className="text-center text-gray-800">
          <p>&copy; 2024 E-commerce. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
