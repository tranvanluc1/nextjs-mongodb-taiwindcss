import "../styles/globals.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      <Header
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
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
