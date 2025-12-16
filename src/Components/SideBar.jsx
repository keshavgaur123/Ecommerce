import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../Components/CartItem";
import { SideBarContext } from "../Context/SideBarContext";

import { CartContext } from "../Context/CartContext";

export default function SideBar() {
  const { isOpen, handleClose } = useContext(SideBarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  return (
    <div
      className={` ${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4  lg:px-[35px]`}
    >
      <div className=" flex items-center justify-between py-6">
        <div className=" uppercase text-sm font-semibold">
          Shopping bag({itemAmount})
        </div>
        <div
          onClick={handleClose}
          className=" cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className=" flex flex-col  gap-y-2 h-[320px] lg:h-[640px] overflow-y-auto scrollbar-hide overflow-x-hidden border-b">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="   flex flex-col gap-y-3 py-1">
        <div className="  flex w-full items-center justify-between">
          <div className=" uppercase font-semibold">
            <span className="mr-2">Total:</span>

            {parseFloat(total).toFixed(2)}
          </div>
          <div
            onClick={clearCart}
            className=" cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          className=" bg-gray-200 flex  w-full font-medium  p-1 justify-center items-center text-primary"
          to={"/"}
        >
          View Cart
        </Link>
        <Link className=" bg-primary flex  w-full font-medium  p-1 justify-center items-center text-white">
          Check Out
        </Link>
      </div>
    </div>
  );
}
//h-[512px] 400
