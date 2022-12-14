import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Provider } from "../context";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  const [openSidebar, setOpenSidebar] = useState(false);

  const [dataUser, setUser] = useState({});
  useEffect(() => {}, []);

  return (
    <Provider>
      <ToastContainer />
      <Header
        user={dataUser}
        openSidebar={openSidebar}
        handleSidebar={() => setOpenSidebar((pre) => !pre)}
      />
      <Sidebar
        openSidebar={openSidebar}
        handleSidebar={() => setOpenSidebar((pre) => !pre)}
      />
      <div
        className={`w-full h-full transition-all duration-500 bg-[#eaeaea] ${
          openSidebar && "md:ml-[240px] md:w-[calc(100%-240px)]"
        } `}
      >
        <Component {...pageProps} user={dataUser} />
      </div>
    </Provider>
  );
}

export default MyApp;
