import Logo from "../../../../assets/images/logo.png";
import Search from "../../../../assets/images/search.png";
import User from "../../../../assets/images/user.png";
import Cart from "../../../../assets/images/shopping-cart.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Example } from "./Example";
export default function HeaderComp() {
  const navigate = useNavigate();
  const orderItems = useSelector((store:any) => {
    return store.cart.items;
  });

  return (
    <div className="relative">
      <div className="flex py-2 px-4 shadow-md bg-slate-50 justify-between items-center md:hidden">
        <div>
          <Example />
        </div>
        <div>
          <img src={Logo} alt="logo" className="w-20" />
        </div>
        <div>
          <img src={Search} alt="search" className="w-5" />
        </div>
      </div>

      <div className=" hidden bg-slate-50 md:flex md:justify-around md:items-center px-5 ">
        <div className=" max-h-[120px] w-1/6 ">
          <img src={Logo} alt="" className="max-h-[120px] " />
        </div>
        <div className="flex md:gap-12 lg:gap-32">
          <ul className="flex justify-end gap-6">
            <li
              className={`hover:cursor-pointer`}
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </li>

            <li
              className={`hover:cursor-pointer`}
              onClick={() => {
                navigate("gifts");
              }}
            >
              Gifts
            </li>
            <li
              className={`hover:cursor-pointer`}
              onClick={() => {
                navigate("about");
              }}
            >
              About Us
            </li>
            <li
              className={`hover:cursor-pointer`}
              onClick={() => {
                navigate("contactus");
              }}
            >
              Contact Us
            </li>
            <li
              className={`hover:cursor-pointer`}
              onClick={() => {
                navigate("shop");
              }}
            >
              OrderNow
            </li>
          </ul>
          <ul className="flex  ">
            <div className="flex justify-center items-center md:gap-6 lg:gap-8">
              <li>
                <img src={Search} alt="" className="w-5 h-5" />
              </li>
              <li>
                <img src={User} alt="" className="w-5 h-5" />
              </li>
              <li className="flex relative">
                <img
                  src={Cart}
                  alt=""
                  className="w-5 h-5"
                  onClick={() => {
                    navigate("cart");
                  }}
                />
                <span className="absolute -right-4 ">{orderItems.length}</span>
              </li>
              <li>
                <button className="px-6 py-1 bg-[#FCA120] rounded-full">
                  Login
                </button>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
