import { useState, useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { BsEye } from "react-icons/bs";
import ModalProduct from "../Modal/ModalProduct";
import { useAtom } from "jotai";
import { JordanProductsAtom, OpenModalAtom } from "../../atom/atom";
import { Product } from "@/app/types/ProductType";
import { addToCart, cartAtom } from "@/atom/cartAtom";

export default function Catalog() {
  const [open, setOpen] = useAtom<boolean>(OpenModalAtom);
  const [jordanProducts, setJordanProducts] =
    useAtom<Product[]>(JordanProductsAtom);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [, addToCartAction] = useAtom(addToCart);
  const [cart] = useAtom(cartAtom);

  useEffect(() => {
    fetch("/api/hello")
      .then((response) => response.json())
      .then((data) => setJordanProducts(data.sneakers));
  }, []);

  function OpenModal(product: Product) {
    setSelectedProduct(product);
    setOpen(true);
  }

  function handleAddToCart(product: Product) {
    addToCartAction({
      sku: product.sku,
      name: product.name,
      price: product.retail_price_cents / 100,
      size: "S",
      image: product.main_picture_url,
    });

    console.log("Item adicionado ao carrinho. Estado atual do carrinho:", cart);
  }

  return (
    <>
      <div className="m-auto w-full max-w-7xl mt-10 px-5">
        <p className="text-3xl border-l-4 border-stone-500 pl-2">
          Trending Products
        </p>
      </div>
      <div className="grid grid-cols md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl m-auto mt-5 sm:grid-cols-2 grid-cols-2 px-5">
        {jordanProducts.slice(0, 8).map((product) => (
          <div key={product.id} className="flex flex-col rounded-md group">
            <div className="bg-gray-100 group md:px-10 sm:px-6 px-2 cursor-pointer w-full h-full flex flex-col items-start justify-start">
              <div className="background-image flex flex-col pb-5 bg-cover   group-hover:scale-105 transition-all ">
                <img
                  src={product.main_picture_url}
                  alt="sneaker"
                  className="scale-110"
                />
                <div className="w-full flex items-center">
                  <ul className="opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 ease-in-out m-auto gap-2 flex">
                    <li
                      className="bg-white p-1 hover:bg-stone-700 hover:text-white"
                      onClick={() => handleAddToCart(product)}
                    >
                      <CiHeart className="text-2xl" />
                    </li>
                    <li
                      onClick={() => OpenModal(product)}
                      className="bg-white p-1 hover:bg-stone-700 hover:text-white"
                    >
                      <BsEye className="text-2xl" />
                    </li>
                    <li className="bg-white p-1 hover:bg-stone-700 hover:text-white">
                      <BsEye className="text-2xl" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-transparent mt-2">
              <p className="line-clamp-1">{product.name}</p>
              <p className="font-bold text-lg">
                ${product.retail_price_cents / 100}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center mt-10 pb-10 ">
        <a className="m-auto bg-stone-700 cursor-pointer hover:opacity-90 text-white px-8 py-4 flex justify-center items-center">
          View All Products
        </a>
      </div>
      {selectedProduct && <ModalProduct product={selectedProduct} />}
    </>
  );
}
