import React, { Suspense, useState, useEffect } from "react";

interface Product {
  make: string;
  thumbnail: string;
}

const Products: React.FC<{ productShow: number }> = ({ productShow }) => {
  const [topProducts, setTopProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/hello")
      .then((response) => response.json())
      .then((data) => setTopProducts(data.sneakers));
  }, []);

  useEffect(() => {
    console.log(topProducts);
  }, [topProducts]);

  if (!topProducts[productShow]) {
    return;
  }

  return (
    <div className="max-w-7xl w-full h-full m-auto flex flex-col md:flex-row items-center">
      <div
        className="flex justify-center transition-all duration-1000 ease-in-out items-center bg-center bg-contain md:w-1/2 bg-no-repeat w-full h-full mix-blend-multiply -rotate-2"
        style={{
          backgroundImage: `url(${topProducts[productShow].main_picture_url})`,
        }}
      ></div>
      <div className="flex flex-col justify-start items-start md:w-1/2 w-full md:pl-24 gap-10 md:mb-0 mb-5">
        <h1 className="text-stone-900 md:text-4xl text-6xl font-extrabold transition-all delay-100 ease-in-out">
          {topProducts[productShow].name}
        </h1>
        <div className="bg-stone-900 text-white text-center py-3 px-12 w-full md:w-fit font-semibold cursor-pointer rounded-md hover:rounded-none transition-all delay-100 ease-in-out">
          BUY NOW
        </div>
      </div>
    </div>
  );
};

const Component: React.FC = () => {
  const [productShow, setProductShow] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProductShow((prevProductShow) => (prevProductShow + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-metallic-gradient w-full h-[70vh] shadow-md px-5 flex flex-col justify-center items-center">
      <Suspense
        fallback={
          <div className="max-w-7xl w-full h-full m-auto flex flex-col md:flex-row items-center animate-pulse">
            <div className="w-full h-full bg-gray-300 animate-pulse"></div>
          </div>
        }
      >
        <Products productShow={productShow} />
      </Suspense>

      <div className="flex gap-2 mb-5">
        <div
          className={`h-4 w-4 rounded-full bg-black/20 border-2 border-stone-500/20 ${
            productShow === 0
              ? "bg-black/80 pointer-events-none"
              : "bg-black/20 hover:bg-black/50 cursor-pointer"
          }`}
          onClick={() => setProductShow(0)}
        ></div>
        <div
          className={`h-4 w-4 rounded-full bg-black/20 border-2 border-stone-500/20 ${
            productShow === 1
              ? "bg-black/80 pointer-events-none"
              : "bg-black/20 hover:bg-black/50 cursor-pointer"
          }`}
          onClick={() => setProductShow(1)}
        ></div>
        <div
          className={`h-4 w-4 rounded-full bg-black/20 border-2 border-stone-500/20 ${
            productShow === 2
              ? "bg-black/80 pointer-events-none"
              : "bg-black/20 hover:bg-black/50 cursor-pointer"
          }`}
          onClick={() => setProductShow(2)}
        ></div>
      </div>
    </div>
  );
};

export default function Banner() {
  return <Component />;
}
