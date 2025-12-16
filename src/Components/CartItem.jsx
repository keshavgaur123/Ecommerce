import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../Context/CartContext";

function CartItem({ item }) {
  const { id, title, image, price, amount } = item;
  const { removeFromCart, incrimentAmount, decrimentAmount } =
    useContext(CartContext);

  return (
    <div className="flex justify-center items-center gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500 ">
      <div className=" min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>
      </div>
      <div className="w-full flex flex-col">
        <div className="flex justify-between mb-2">
          <Link
            className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            to={`/product/${id}`}
          >
            {title}
          </Link>
          <div className="text-xl cursor-pointer">
            <IoMdClose
              onClick={() => removeFromCart(id)}
              className="text-gray-500 hover:text-red-500 transition"
            />
          </div>
        </div>
        <div className="flex gap-x-2 h-[36px] text-sm">
          <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium  ">
            <div className="flex-1  h-full flex justify-center items-center cursor-pointer ">
              <IoMdRemove onClick={() => decrimentAmount(id)} />
            </div>
            <div className="h-full flex items-center justify-center px-2">
              {amount}
            </div>
            <div className="flex-1 h-full flex justify-center items-center cursor-pointer">
              <IoMdAdd onClick={() => incrimentAmount(id)} />
            </div>
          </div>

          <div className="flex-1 flex items-center  justify-around">
            ${price}
          </div>
          <div className=" flex-1 justify-end flex items-center text-primary font-medium">{`$ ${parseFloat(
            price * amount
          ).toFixed()}`}</div>
        </div>
      </div>
    </div>
  );
}
export default CartItem;
