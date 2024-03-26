import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import NothingInCart from "./NothingInCart";
import quanntityIncrement from "../../../../../assets/images/quantity-increment.png";
import quantityDecrement from "../../../../../assets/images/quantity-decrement.png";
import Delete from "../../../../../assets/images/delete.png";
import {
  deleteItem,
  emptyingCart,
  updateCartItemQuantity,
  decrementingCartItemQuantity,
} from "./CartSlice";
const deliveryCharge = 40;
export default function CartAddedItems() {
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalQuantity,setTotalQuantity]= useState(0)
  const [checkedItems, setCheckedItems] = useState([]);
  const addedCartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    const amount = checkedItems.reduce((total, item) => {
      return total + Number(item.itemOfferAmount * item.quantity);
    }, 0);
     
    setTotalAmount(amount);
  }, [checkedItems]);
  useEffect(() => {
    const totalQuantity = checkedItems.reduce((total, item) => {
      return total + Number(item.quantity)
    }, 0)
    setTotalQuantity(totalQuantity)
},[checkedItems])
  useEffect(() => {
    setCheckedItems([...addedCartItems]);
  }, [addedCartItems]);

  function handleCheckedItems(item) {
    const isChecked = checkedItems.some(
      (checkedItem) => checkedItem.itemTitle === item.itemTitle
    );

    if (isChecked) {
      const updatedCheckedItems = checkedItems.filter(
        (checkedItem) => checkedItem.itemTitle !== item.itemTitle
      );
      setCheckedItems(updatedCheckedItems);
    } else {
      setCheckedItems([...checkedItems, item]);
    }
  }

  function handleQuantityIncrement(item) {
    dispatch(updateCartItemQuantity(item));
  }

  function handleQuantityDecrement(item) {
    dispatch(decrementingCartItemQuantity(item));
  }

  function handleDeleteCartItem(item) {
    dispatch(deleteItem(item));
  }

  function handleEmptyingCart() {
    dispatch(emptyingCart());
  }
  if (addedCartItems.length === 0) return <NothingInCart />;
  return (
    <div className="flex flex-col gap-8 w-full font-medium">
      <div className="flex justify-between py-6 mx-6 border-b border-b-slate-500">
        <p className="text-3xl">Shopping Cart</p>
        <button
          className="self-end text-lg border border-slate-400 px-4 rounded-lg"
          onClick={handleEmptyingCart}
        >
          Empty Cart
        </button>
      </div>
      <div className="flex justify-between px-6">
        <div className="flex gap-6 w-full">
          <div className="cartAddedItem flex flex-col gap-6 w-5/6">
            {addedCartItems.map((item) => (
              <div
                key={item.id}
                className="flex pr-16 pl-4 py-4 border border-slate-200 justify-between items-center rounded-md shadow-md"
              >
                <div className="flex items-center justify-center gap-6 ">
                  <div>
                    <input
                      type="checkbox"
                      onChange={() => {
                        handleCheckedItems(item);
                      }}
                      checked={checkedItems.some(
                        (checkedItem) =>
                          checkedItem.itemTitle === item.itemTitle
                      )}
                    />
                  </div>
                  <div className="">
                    <img
                      src={item.img}
                      alt="addeditem"
                      className="max-h-[100px] rounded-lg"
                    />
                  </div>
                  <div className="flex flex-col gap-6">
                    <p className="text-lg">{item.itemTitle} </p>
                    <p className="text-sm">MRP : {item.itemOfferAmount}/-</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center gap-12">
                    <div className="flex flex-col items-start gap-2">
                      <p className="text-md">Weight</p>
                      <select
                        name="weight"
                        className="border border-slate-500 focus:outline-none h-8 px-1 rounded-lg text-sm"
                      >
                        <option value="250" className="text-sm">
                          250g
                        </option>
                        <option value="500" className="text-sm">
                          500g
                        </option>
                        <option value="750" className="text-sm">
                          750g
                        </option>
                        <option value="1000" className="text-sm">
                          1000g
                        </option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2 items-start">
                      <p className="text-md">Quantity</p>

                      <div className="flex gap-2 justify-between">
                        <div>
                          <input
                            type="number"
                            value={item.quantity}
                            className="focus:outline-none appearance-none border border-slate-500 text-center w-14 h-8 px-1 rounded-lg"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <img
                            src={quanntityIncrement}
                            alt=""
                            className="w-4"
                            onClick={() => {
                              handleQuantityIncrement(item);
                            }}
                          />
                          <img
                            src={quantityDecrement}
                            alt=""
                            className="w-4"
                            onClick={() => {
                              handleQuantityDecrement(item);
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <button>
                        <img
                          src={Delete}
                          alt=""
                          className="w-6"
                          onClick={() => {
                            handleDeleteCartItem(item);
                          }}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="payment flex flex-col rounded-md gap-4 min-w-[350px] max-h-[500px]  bg-[#FFD285] p-2"
            style={{ overflowY: "auto" }}
          >
            <div className="flex  w-full">
              <h1 className="text-2xl font-semibold underline">Payment</h1>
            </div>
            <div className="flex flex-col gap-5">
              <table className="text-base border-b border-gray-700">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="py-2">Name</th>
                    <th className="px-6 py-2">Name</th>
                    <th className="px-6 pr-3 py-2">Qnt</th>
                    <th className="px-6 mr-3 py-2">MRP</th>
                  </tr>
                </thead>
                <tbody>
                  {checkedItems.map((item, index) => (
                    <tr key={index} className="text-left">
                      <td className="px-6 py-2">{index + 1}.</td>
                      <td className="px-6 py-2">{item.itemTitle}</td>
                      <td className="px-6 pr-3 py-2">{item.quantity}</td>
                      <td className="px-6 pr-3 py-2">
                        &#8377;{item.itemOfferAmount * item.quantity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex flex-col  gap-2 px-5">
                <div className="flex justify-between">
                  <p>Sub Total </p>
                  <p>&#8377; {totalAmount}</p>
                </div>
                <div className="flex justify-between">
                  <p>Shipping </p>
                  <p>&#8377; {deliveryCharge}</p>
                </div>
                <div className="flex justify-between">
                  <p>Total(Tax inc.)</p>
                  <p>&#8377; {totalAmount + deliveryCharge}</p>
                </div>
                <p>Total Item's : {totalQuantity}</p>
                <div className="flex justify-between w-5/6 mx-auto p-2 rounded-lg border border-slate-900 bg-[#FCA120]">
                  <p>&#8377;{totalAmount + deliveryCharge}</p>
                  <p>
                    <a href="">Proceed to Buy &rarr;</a>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
