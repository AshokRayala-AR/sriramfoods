import { useDispatch } from "react-redux";
import { addItem } from "../../header/header-comp/cart/CartSlice";

export default function SquareCardItem({ item }: any) {
  const dispatch = useDispatch();
  function handleAddCartItem() {
    dispatch(addItem(item));
  }
  return (
    <div className=" relative rounded-lg">
      <img src={item.img} alt="" className="rounded-lg h-full" />
      <div className="absolute bottom-1 right-1 left-1 bg-black opacity-80  text-white flex justify-between items-center px-4 py-3 rounded-lg">
        <p className="">&#8377;{item.itemOfferAmount}</p>
        <button
          className="border border-white bg-transparent px-6 py-1 rounded-full"
          onClick={handleAddCartItem}
        >
          {item.btntext}
        </button>
      </div>
    </div>
  );
}
