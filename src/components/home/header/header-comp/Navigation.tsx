import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { NavListData } from "./NavListData.ts";
const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { type: "spring", stiffness: 100, velocity: -50 },
    },
  },
  closed: {
    y: 100,
    opacity: 0,

    transition: {
      y: { type: "spring", stiffness: 100 },
    },
  },
};

export const Navigation = ({ closeMenu }: { closeMenu: () => void }) => (
  <motion.ul
    variants={variants}
    className="nav-ul shadow-lg border border-slate-150 absolute h-screen left-0 w-[280px] bg-white"
  >
    {NavListData.map((item, index: number) => (
      <MenuItem item={item} key={index} closeMenu={closeMenu} />
    ))}
  </motion.ul>
);
