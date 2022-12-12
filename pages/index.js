import Image from "next/image";
import { useState } from "react";
import ItemProduct from "../components/Home/ItemProduct";
import globalIcon from "../utils/icons/global.svg";
import streetViewIcon from "../utils/icons/street-view.svg";

const DATA_NATION = [
  {
    title: "Tất cả",
    value: "All",
  },
  {
    title: "Việt Nam",
    value: "VN",
  },
  {
    title: "United States",
    value: "USA",
  },
  {
    title: "Philippines",
    value: "Philippines",
  },
];

const DATA_TYPE_ACCOUNT = [
  {
    title: "Tất cả",
    value: "All",
  },
  {
    title: "VIA",
    value: "VIA",
  },
  {
    title: "Clone",
    value: "Clone",
  },
];

export default function Home() {
  const [filter, setFilter] = useState({
    nation: DATA_NATION[0].value,
    type: DATA_TYPE_ACCOUNT[0].value,
    showAll: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  return (
    <div className="mt-[50px] py-[30px]">
      <div className="container rounded-sm bg-white shadow-md">
        <div className="bg-[#F9FAFC] px-3 py-2">Thông báo</div>
        <div className="px-3 py-2">
          <div className="px-3 py-2 border-l-2 bg-[#F9FAFC] shadow-md border-[#82B54B] mb-2">
            Liên hệ <span className="text-primary-color">0984648383</span> hoặc{" "}
            <span className="text-primary-color">0984648383</span> để được hỗ
            trợ.
          </div>
          <div className="px-3 py-2 border-l-2 bg-[#F9FAFC] shadow-md border-[#82B54B] mb-2">
            Tất cả Via/Clone được bảo hành trong 24h nếu login lần đầu sai pass,
            checkpoint, bảo hành HẠN CHẾ QC (nếu trước ngày mua).
          </div>
          <div className="px-3 py-2 border-l-2 bg-[#F9FAFC] shadow-md border-[#82B54B] mb-2">
            Ace mua VIA về bắt buộc phải đăng nhập qua link m.facebook.com hoặc
            mbasic.facebook.com rồi mới chuyển về facebook.com để không bị
            checkpoint nhé!. trợ.
          </div>
        </div>
      </div>
      <div className="container pt-[30px] flex gap-10">
        <div className="bg-white max-w-[200px] rounded-sm outline-4 flex shadow-md">
          <div className="p-3 rounded-sm">
            <Image src={globalIcon} className="w-[30px]" alt="" />
          </div>
          <select
            className="flex-1 bg-white outline-none rounded-sm border-l-0"
            name="nation"
            value={filter.nation}
            onChange={handleChange}
          >
            {DATA_NATION.map((el, i) => (
              <option value={el.value} key={i}>
                {el.title}
              </option>
            ))}
          </select>
        </div>
        <div className="bg-white max-w-[200px] rounded-sm outline-4 flex shadow-md">
          <div className="p-3 rounded-sm">
            <Image src={streetViewIcon} className="w-[30px]" alt="" />
          </div>
          <select
            className="flex-1 bg-white outline-none rounded-sm border-l-0"
            name="type"
            value={filter.type}
            onChange={handleChange}
          >
            {DATA_TYPE_ACCOUNT.map((el, i) => (
              <option value={el.value} key={i}>
                {el.title}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="container pt-[15px] flex gap-2 flex-wrap">
        <ItemProduct />
        <ItemProduct />
        <ItemProduct />
        <ItemProduct />
        <ItemProduct />
      </div>
    </div>
  );
}
