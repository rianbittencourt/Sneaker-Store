"use client";
import { useAtom } from "jotai";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { OpenCartAtom } from "@/atom/atom";
import { useEffect } from "react";
import { cartAtom } from "@/atom/cartAtom";
import { IoTrashOutline } from "react-icons/io5";
import { removeFromCart } from "@/atom/cartAtom";
import IconEmptyCart from "./Icons/IconEmptyCart";

export default function CartRight() {
  const [open, setOpen] = useAtom(OpenCartAtom);
  const [cart] = useAtom(cartAtom);
  const [, remove] = useAtom(removeFromCart);

  useEffect(() => {
    console.log("teste", cart);
  });

  function ProductCardCard() {
    return (
      <div className="flex flex-col gap-2 ">
        {cart.map((product) => (
          <div key={product.sku} className="flex gap-2 ">
            <div className="h-20  bg-gray-100 p-1 w-[50%]  ">
              <img src={product.image} alt="sneaker" />
            </div>
            <div className="w-full">
              <h1 className="text-sm font-light">{product.name}</h1>
              <p className="text-sm font-light ">${product.price}</p>
              <p className="text-sm font-light ">Size: L</p>
            </div>
            <div className="flex justify-end w-full">
              <IoTrashOutline
                className="cursor-pointer hover:text-red-500 duration-100 hover:scale-125 text-lg"
                onClick={() => remove(product.sku)}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }

  function EmptyCart() {
    return (
      <div className="flex justify-center flex-col items-center">
        <IconEmptyCart />
        <p className="text-sm text-stone-600"> Your cart is currently empty.</p>
      </div>
    );
  }

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-[9000]">
      <div className="fixed inset-0" />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                <div className="flex min-h-0 flex-1 flex-col overflow-y-scroll py-6">
                  <div className="px-4 sm:px-6">
                    <div className="flex items-start justify-between">
                      <DialogTitle className="text-base font-semibold leading-6  text-gray-900">
                        Your Cart
                      </DialogTitle>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          onClick={() => setOpen(false)}
                          className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                          <span className="absolute -inset-2.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative mt-6 flex-1 px-4 sm:px-6 ">
                    {cart.length > 0 ? <ProductCardCard /> : <EmptyCart />}
                  </div>
                </div>
                {cart.length > 0 && (
                  <div className="flex flex-col gap-2 flex-shrink-0 justify-end px-4 py-4 bg-gray-100">
                    <div className="flex justify-between px-2">
                      <div>
                        <p>Total Item</p>
                        <p className="font-bold">{cart.length}</p>
                      </div>
                      <div>
                        <p>Subtotal</p>
                        <p className="font-bold">
                          ${cart.reduce((acc, item) => acc + item.price, 0)}
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="rounded-md bg-stone-900 px-3 py-4 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400"
                    >
                      View Cart
                    </button>
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md bg-indigo-600 px-3 py-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Chekout
                    </button>
                  </div>
                )}
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
