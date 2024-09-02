import React from "react";
import { CgArrowDown } from "react-icons/cg";
import Image from "next/image";
import CartButton from "./CartButton";

interface Menu {
  name: string;
  path: string;
  options?: {
    icon: React.ReactNode;
    submenu: string[];
  };
}
const Menu: Menu[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Category",
    path: "/shop",
    options: {
      icon: <CgArrowDown className="animate-bounce" />,
      submenu: ["Sneakers", "Sneakers", "Sneakers"],
    },
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export default function Header() {
  return (
    <div className="bg-stone-950 py-5 fixed z-50 w-full">
      <div className="flex justify-between max-w-7xl m-auto items-center px-5">
        <Image src="/logo.jpg" alt="logo" width={50} height={50} />
        <ul className="flex gap-5">
          {Menu.map((item, index) => (
            <li
              key={index}
              className="text-white text-sm uppercase flex items-center"
            >
              <a href={item.path}>{item.name}</a>
              {item.options && item.options.icon}
            </li>
          ))}
        </ul>
        <CartButton />
      </div>
    </div>
  );
}
