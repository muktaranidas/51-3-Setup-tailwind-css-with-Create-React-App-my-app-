import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "Products", path: "/Products" },
    { id: 3, name: "Order", path: "/Order" },
    { id: 4, name: "Contact", path: "/Contact" },
    { id: 5, name: "About", path: "/About" },
  ];
  return (
    <nav className="bg-purple-300 w-full">
      <div
        onClick={() => setOpen(!open)}
        className="h-6 w-6 text-500 md:hidden"
      >
        {open ? <XMarkIcon /> : <Bars3Icon />}
      </div>

      <ul
        className={` bg-purple-300 md:flex w-full justify-center md:static absolute  duration-500 ease-in ${
          open ? "top-6" : "top-[-120px]"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
