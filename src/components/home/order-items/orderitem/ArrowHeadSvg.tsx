import { useDispatch } from "react-redux";
import { addItem } from "../../header/header-comp/cart/CartSlice";
import { ArrowPropType } from "../../../../utils/types/Types";
export default function ArrowDownHead({
  quantity,
  setQuantity,
}: ArrowPropType) {
  function handleDeleteItem() {
    setQuantity(quantity - 1);
  }
  return (
    <svg
      onClick={handleDeleteItem}
      className={`w-6 h-6 `}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      ></path>
    </svg>
  );
}
export function ArrowUpHead({ item, quantity, setQuantity }: ArrowPropType) {
  const dispatch = useDispatch();
  function handleAddItem() {
    dispatch(addItem(item));
    setQuantity(quantity + 1);
  }
  return (
    <svg
      onClick={handleAddItem}
      className={`w-6 h-6 transform rotate-180`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24 "
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      ></path>
    </svg>
  );
}
