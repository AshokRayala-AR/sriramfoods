import Logo from "../../../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import FooterHomeImg from "../../../../assets/images/footer-home.png";
import FooterCategoryImg from "../../../../assets/images/footer-categories.png";
import FooterAcImg from "../../../../assets/images/footer-account.png";
import FooterCartImg from "../../../../assets/images/footer-cart.png";
export default function FooterPage() {
  return (
    <div className="flex flex-col justify-between h-1/6 pt-5 w-full lg:flex-row">
      <div className="flex flex-col gap-2 w-full lg:w-2/6 bg-gradient-to-br from-[#754B34] to-[#4A2E1F] p-8">
        <img src={Logo} alt="" className="w-2/6 lg:w-4/6 mx-auto" />
        <div className="text-sm text-white flex justify-center items-center gap-3">
          <p>Timings:</p>
          <div>
            <p>Sunday to Saturday</p>
            <p>7:30 AM to 11:00 PM</p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-between lg:w-4/6 ">
        <div className="grid grid-cols-2 gap-6 justify-items-center text-sm bg-[#FFF6F1] p-8 lg:grid-cols-4">
          <ul className="text-sm font-md flex flex-col gap-1 ">
            <li>
              <h3 className="text-md font-semibold pb-2 underline">Shop</h3>
            </li>
            <li>Dry Fruits</li>
            <li>Gifting</li>
            <li>Indian Biscotti</li>
            <li>Indian Bakery</li>
            <li>Sweets</li>
            <li>Savories</li>
          </ul>
          <ul className="text-sm font-md flex flex-col gap-1 ">
            <li>
              <h3 className="text-md font-semibold pb-2 underline">Account</h3>
            </li>
            <li>Login</li>
            <li>Track Your Order</li>
          </ul>
          <ul className="text-sm font-md flex flex-col gap-1 ">
            <li>
              <h3 className="text-md font-semibold pb-2 underline">About Us</h3>
            </li>
            <li>Company</li>
            <li>Our Brands</li>
            <li>Global Footprint</li>
            <li>Contact Us</li>
          </ul>
          <ul className="text-sm font-md flex flex-col gap-1 ">
            <li>
              <h3 className="text-md font-semibold pb-2 underline">Legal</h3>
            </li>
            <li>Terms & conditions</li>
            <li>Shipping Policy</li>
            <li>Return and Exchange Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="flex-col justify-center items-center bg-gradient-to-br from-[#4A2E1F] to-[#754B34] text-white p-2 md:flex-row md:justify-between md:items-center">
          <div className="w-full lg:w-2/6">
            <p className="text-sm">Email:Sairamfoods.gmail.com</p>
          </div>
          <div className="w-full lg:w-3/6">
            <p className="text-sm">
              &copy; 2024 Copyright.Sai Ram Foods All Rights Reserved
            </p>
          </div>
        </div>
        <div>
          <ul className="flex items-center justify-around  bg-[#f8b919] sm:hidden">
            <NavLink to="/">
              {/* <div className=""> */}
              {/* <div className="w-10 h-10 border-t-[4px] border-[] rounded-full "> */}
              {/* <div className="w-10 h-10 border-2 border-white rounded-full"> */}
              <div className="w-10 h-10 rounded-full border-4 border-transparent ">
                <img
                  src={FooterHomeImg}
                  alt="FooterHomeImg"
                  className="w-10 bg-transparent"
                />
              </div>
              {/* </div> */}
              {/* </div> */}
              {/* </div> */}
            </NavLink>
            <NavLink to="/">
              <div>
                <div className="w-12 h-12">
                  <div className="w-10 h-10 rounded-full border-4 border-transparent absolute">
                    <img
                      src={FooterCategoryImg}
                      alt="FooterCategoryImg"
                      className="w-10"
                    />
                  </div>
                </div>
              </div>
            </NavLink>
            <NavLink to="/">
              <div>
                <div className="w-12 h-12">
                  <div className="w-10 h-10 rounded-full border-4 border-transparent">
                    <img src={FooterAcImg} alt="FooterAcImg" className="w-10" />
                  </div>
                </div>
              </div>
            </NavLink>
            <NavLink to="/">
              <div>
                <div className="w-12 h-12">
                  <div className="w-10 h-10 rounded-full border-4 border-transparent">
                    <img
                      src={FooterCartImg}
                      alt="FooterCartImg"
                      className="w-10"
                    />
                  </div>
                </div>
              </div>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}
