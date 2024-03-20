import { useDispatch } from "react-redux";
import { addItem } from "../../header/header-comp/cart/CartSlice";
import { useNavigate } from "react-router-dom";
export default function SquareCardItem({ item }: any) {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  function handleAddCartItem() {
    dispatch(addItem(item));
    navigate('cart')
  }
  return (
    <div className=" relative rounded-lg">
      <img src={item.img} alt="" className="rounded-lg h-full" />
      <div className="absolute bottom-1 right-1 left-1 bg-black opacity-80  text-white flex justify-between items-center px-4 py-3 rounded-lg">
        <p className="">{item.itemOfferAmount}</p>
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
