import Image from "next/image";
import useOnClickOutSide from "../../hooks/useOnClickOutSide";
import UserIcon from "../../utils/icons/user.svg";
import MenuIcon from "../../utils/icons/menu.svg";
import { deleteCookie } from "cookies-next";
import { useContext, useRef, useState } from "react";
import { Context } from "../../context";

export default function Header({ openSidebar, handleSidebar }) {
  const { state, dispatch } = useContext(Context);
  const [isShowMenuRight, setShowMenuRight] = useState(false);
  const menuRef = useRef();

  useOnClickOutSide(menuRef, () => {
    setShowMenuRight(false);
  });

  const logout = () => {
    deleteCookie("refreshtoken", { path: "/api/user/refresh_token" });
    deleteCookie("access_token", { path: "/" });
  };

  return (
    <div
      className={`fixed z-10 top-0 left-0 w-full py-2 px-1 bg-primary-color md:px-3 lg:px-4 transition-all duration-500 `}
    >
      <div className="flex justify-between">
        <div className="flex items-center">
          <div
            className="mr-2 p-[8px] rounded-[50%] cursor-pointer hover:shadow-md hover:bg-secondary-color"
            onClick={handleSidebar}
          >
            <Image src={MenuIcon} alt="" className="w-[20px]" />
          </div>
          <h5 className="text-[24px] text-white">MuaBan24h</h5>
        </div>
        <div className="flex">
          <button className="hidden btn-primary mr-1 md:block bg-[#82B54B] rise">
            Số dư: 0 đ
          </button>
          <button className="btn-primary mr-1 rise">Nạp tiền</button>
          <button
            onClick={() => setShowMenuRight((pre) => !pre)}
            className="relative px-3 py-[6px] hover:bg-secondary-color rounded-md hover:shadow-lg"
          >
            <Image className="w-5 h-5 " src={UserIcon} alt="" />
            <div
              ref={menuRef}
              className={`absolute top-[calc(100%+5px)] left-[calc(0%-160px)] w-[200px] bg-white rounded-lg shadow-md ${
                !isShowMenuRight && "hidden"
              }`}
            >
              <ul>
                <li className="py-2 hover:bg-[#eaeaea]">Tài khoản</li>
                <li className="py-2 hover:bg-[#eaeaea]">Danh sách của tôi</li>
                <li className="py-2 hover:bg-[#eaeaea]">Lịch sử</li>
                <li className="py-2 hover:bg-[#eaeaea]" onClick={logout}>
                  Đăng xuất
                </li>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
