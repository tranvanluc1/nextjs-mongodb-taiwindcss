import React from "react";

const DATA_NAV = [
  {
    title: "Business manager",
    list: [
      { name: "Mua BM", link: "" },
      { name: "BM Đã Mua", link: "" },
    ],
  },
  {
    title: "VIA/CLONE",
    list: [
      { name: "Mua Via", link: "" },
      { name: "Mua Clone", link: "" },
      { name: "Danh sách đã mua", link: "" },
    ],
  },
];

function Sidebar({ openSidebar, handleSidebar }) {
  return (
    <nav
      id="sidebar"
      className={`fixed w-full h-full top-[56px] bg-white md:w-[240px] text-black shadow-2xl transition-all duration-500 ${
        !openSidebar && "-translate-x-full md:-translate-x-[240px]"
      } md:block`}
    >
      <div
        className="absolute flex items-center justify-center top-1 right-4 w-4 h-4 rounded-[50%] bg-gray-light cursor-pointer md:hidden"
        onClick={handleSidebar}
      >
        x
      </div>
      {DATA_NAV.map((el, i) => (
        <div className="px-4 pt-4" key={i}>
          <h3 className="mb-2 text-xs text-gray font-bold uppercase">
            {el.title}
          </h3>
          <ul className="mb-8 text-sm font-medium">
            {el.list.map((item, idx) => (
              <li key={idx}>
                <a
                  className="active flex items-center rounded py-3 pl-3 pr-4 hover:bg-gray-light"
                  href=""
                >
                  <span className="select-none">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}

export default Sidebar;
