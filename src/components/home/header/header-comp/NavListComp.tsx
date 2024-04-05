import { NavLink } from "react-router-dom";
import { NavListData } from "./NavListData";

export default function NavListComp() {
  return (
    <ul className="flex justify-center self-center items-center gap-8 h-full">
      {NavListData.map((item: { route: string; navLink: string }, index: number) => (
        <NavLink key={index} to={item.route}>
          {item.navLink}
        </NavLink>
      ))}
    </ul>
  );
}
