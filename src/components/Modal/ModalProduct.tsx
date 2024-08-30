"use client";

import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import ProductDetailsTable from "../ProductDetailTable/ProductDetailTable";
import { useAtom } from "jotai";
import { OpenModalAtom } from "../../atom/atom";
import { Product } from "@/app/types/ProductType";

export default function ModalProduct({ product }: { product: Product }) {
  const [open, setOpen] = useAtom(OpenModalAtom);
  const productDetails = [
    { label: "Box Condition", value: "teste", type: "text" as const },
    { label: "Type", value: "Shoes", type: "text" as const },
    { label: "Sku", value: "teste", type: "text" as const },
    { label: "Material", value: "rte", type: "text" as const },
    {
      label: "Size Range",
      value: "Shoes",
      type: "select" as const,
      options: product.size_range.map(String),
    },
  ];

  function stripHTML(htmlString: any) {
    const doc = new DOMParser().parseFromString(htmlString, "text/html");
    return doc.body.textContent || "";
  }

  const RightSection = () => {
    return (
      <div className="sm:w-1/2 flex">
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-gray-400 text-2xl">{product.name}</p>
          <p className="text-gray-700 text-xl font-bold">
            ${product.retail_price_cents / 100}
          </p>
          <div>
            <p className="text-gray-500 line-clamp-3 font-light">
              {stripHTML(product.story_html)}
            </p>
            <p></p>
          </div>

          <ProductDetailsTable details={productDetails} />
          <div className="mt-5">
            <button className="bg-stone-800 w-full sm:w-fit hover:opacity-95 duration-300 hover:rounded-none text-white px-5 py-2 rounded-md">
              ADD TO CART
            </button>
            <p className="mt-5 underline cursor-pointer">
              View Fulll Product Details
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in "
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full bg-black/25 items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative  transform  overflow-y-auto overflow-x-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full max-h-[40rem] min-h-[40rem] sm:max-w-4xl sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95 "
          >
            <div className="flex sm:flex-row flex-col gap-6 rounded-md">
              <div className="sm:w-1/2 flex">
                <div className="bg-gray-100 w-full background-image bg-cover flex items-center  ">
                  <img
                    className=""
                    src={product.main_picture_url}
                    alt="sneaker"
                  />
                </div>
              </div>
              <RightSection />
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
