"use client";
import { BsBag } from "react-icons/bs";
import { cartAtom } from "@/atom/cartAtom";
import { OpenCartAtom } from "@/atom/atom";
import { useAtom } from "jotai";

export default function CartButton() {
  const [cart] = useAtom(cartAtom);
  const [open, setOpen] = useAtom(OpenCartAtom);

  function setOpenModal() {
    setOpen(true);
    console.log(open);
  }

  return (
    <div className="relative hover:scale-105 " onClick={() => setOpenModal()}>
      <BsBag className="text-white text-2xl" />
      <div className="bg-white absolute -right-2 -top-1 rounded-full h-5 w-5 flex justify-center items-center font-semibold text-stone-500 text-sm  ">
        {cart.length}
      </div>
    </div>
  );
}
