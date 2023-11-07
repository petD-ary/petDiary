import React from "react";

interface NavType {
  icon: string;
  navItem: string;
}
const NavBtn = ({ icon, navItem }: NavType) => {
  return (
    <div className="w-16 py-3 mx-auto my-0 rounded-xl bg-white text-center text-xs">
      <div className="w-6 h-6 mx-auto mb-1 rounded-2xl bg-grayColor-200 "></div>
      <div className="tracking-tighter">{navItem}</div>
    </div>
  );
};

export default NavBtn;
