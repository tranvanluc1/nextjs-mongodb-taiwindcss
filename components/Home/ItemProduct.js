import Image from "next/image";
import React from "react";
import FlagIcon from "../../utils/icons/flag.svg";
import CheckIcon from "../../utils/icons/check.svg";
import xMarkIcon from "../../utils/icons/x-mark.svg";

function ItemProduct() {
  return (
    <div className="w-full border border-gray rounded-sm sm:w-[48%] md:w-[24%] bg-white rise">
      <div className="bg-primary-color p-3 text-white ">
        Page Cổ - Liên Hệ Zalo 098.464.8383
      </div>
      <div className="p-3">
        <div className="text-center">
          <p className="text-[#e04f1a]">35,000 đ</p>
          <p>
            Còn lại:{" "}
            <span className="w-4 h-4 rounded-[50%] bg-primary-color p-1 text-white">
              18
            </span>
          </p>
        </div>
        <div>
          <ul>
            <li className="py-1 flex">
              <Image className="w-4 mr-2" src={FlagIcon} alt="" />
              Quốc gia: Việt Nam
            </li>
            <li className="py-1 flex">
              <Image className="w-4 mr-2" src={CheckIcon} alt="" />
              Ngày lập: 2008-2021
            </li>
            <li className="py-1 flex">
              <Image className="w-4 mr-2" src={CheckIcon} alt="" />
              Xác thực 2FA: Có
            </li>
            <li className="py-1 flex">
              <Image className="w-4 mr-2" src={CheckIcon} alt="" />
              Bạn bè: Random
            </li>
            <li className="py-1 flex">
              <Image className="w-4 mr-2" src={CheckIcon} alt="" />
              Change thông tin: có
            </li>
            <li className="py-1 flex">
              <Image className="w-4 mr-2" src={xMarkIcon} alt="" />
              Hỗ trợ backup: Không
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center mb-2">
        <button className="btn-primary bg-primary-color rise">Mua</button>
      </div>
    </div>
  );
}

export default ItemProduct;
