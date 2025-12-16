import React, { useContext, useEffect, useState } from "react";
import { SideBarContext } from "../Context/SideBarContext";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import shop from "/public/shop.png";
import shop2 from "/public/shop2.png";
const Header = () => {
  const [isActive, setIsActive] = useState(true);
  const { isOpen, setIsOpen } = useContext(SideBarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 60) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    });
  });

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={"/"}>
          <div>
            <img src={shop2} className="w-[50px]" alt="" />
          </div>
        </Link>

        <div
          className=" cursor-pointer flex relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <BsBag className=" text-2xl" />
          <div className=" rounded-full flex justify-center ic text-[12px] w-[18px] h-[18px] text-white bg-red-400 absolute -right-2 -bottom-2">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
//src="data:image/png;base64,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"
