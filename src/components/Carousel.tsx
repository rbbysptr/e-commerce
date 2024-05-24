"use client";

import { useEffect, useState } from "react";
import foto1 from "../../public/banner/promo1.jpg";
import foto2 from "../../public/banner/promo2.jpg";
import foto3 from "../../public/banner/promo3.jpg";
import foto4 from "../../public/banner/promo4.jpg";
import foto5 from "../../public/banner/promo5.jpg";

export function Carousel() {
  const [listBanner, setListBanner] = useState([
    foto2,
    foto1,
    foto3,
    foto4,
    foto5,
  ]);
  const [indexBanner, setIndexBanner] = useState(0);


  const nextHandler = () => {
    const totalBanner = listBanner.length;

    const newIndexBanner = indexBanner + 1;
    if (newIndexBanner > totalBanner - 1) {
      setIndexBanner(0);
    } else {
      setIndexBanner(newIndexBanner);
    }
  };

  const previousHandler = () => {
    const totalBanner = listBanner.length;

    const newIndexBanner = indexBanner - 1;
    if (newIndexBanner < 0) {
      setIndexBanner(totalBanner - 1);
    } else {
      setIndexBanner(newIndexBanner);
    }
  };


  useEffect(() => {
    const interval = setInterval(() => {
      const totalBanner = listBanner.length;
      const newIndexBanner = (indexBanner + 1) % totalBanner;
      setIndexBanner(newIndexBanner);
    }, 3000);

    return () => clearInterval(interval);
  }, [indexBanner, listBanner]);

  return (
    <div
      className="flex row-span-2 col-span-2 h-96 rounded-xl relative  "
      style={{
        backgroundImage: `url(${listBanner[indexBanner].src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <button
        onClick={previousHandler}
        className="absolute btn btn-circle left-5 top-40"
      >
        ❮
      </button>
      <button
        onClick={nextHandler}
        className="absolute btn btn-circle right-5 top-40"
      >
        ❯
      </button>
    </div>
  );
}
