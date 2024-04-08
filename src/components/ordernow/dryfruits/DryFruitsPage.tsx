import lines1 from "../../../assets/images/lines1.png"
import { DryFruitsData } from "./DryFruitsData";
import { useDispatch } from "react-redux";
import { addItem } from "../../home/header/header-comp/cart/CartSlice";
import { SqCardPropType } from "../../../utils/types/Types";
import { motion } from "framer-motion";

function DryFruitsPage() {

  const dispatch = useDispatch();
  function handleAddCartItem({item} : SqCardPropType) {
    dispatch(addItem(item));
  }

    return(
      <div className="main_head flex flex-col md:p-12 p-4 md:p-12 gap-20">
      <div className="flex flex-col items-center">
        <img src={lines1} alt="designed-arrow" className=" w-4/6 md:w-2/6" />
        <h1 className="text-4xl text-center font-semibold">Dry Fruits</h1>
      </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 md:gap-y-12 px-2 md:px-12 gap-5">
        {DryFruitsData.map((item) => {
          return (
            <div className=" relative rounded-lg object-cover">
            <img src={item.img} alt="" className="rounded-lg md:w-full md:h-full" />
            <div className="absolute bottom-0 md:bottom-1 right-0 md:right-1 left-0 md:left-1 bg-black opacity-80  text-white flex justify-between items-center px-1 md:px-4 py-3 rounded-lg">
            <p className="">&#8377;{item.itemOfferAmount}</p>
            <motion.button onClick={() => {handleAddCartItem({item})}} className="border border-white bg-transparent px-1 md:px-6 md:py-1 rounded-full"
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.95}}>
            {item.btntext}
            </motion.button>
            </div>
        </div>
          )
        })}
        </ul>
    </div>
    )
}

export default DryFruitsPage;