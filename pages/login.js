import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import bgLogin from "../utils/images/bg-login.svg";
import { useNotification } from "../hooks/useNotification";
import { useRouter } from "next/router";
import { setCookie } from "cookies-next";

function Login() {
  const router = useRouter();
  const [dataUser, setData] = useState({ username: "", password: "" });
  const { username, password } = dataUser;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((pre) => ({ ...pre, [name]: value }));
  };

  const login = async () => {
    try {
      const res = await axios.post("/api/user/login", { ...dataUser });
      if (res.status === 200) {
        useNotification.success(res.data.msg);
        setCookie("access_token", res.data.access_token);
        setCookie("user", JSON.stringify(res.data.user));

        router.push("/");
      }
    } catch (error) {
      useNotification.error(error.response.data.msg);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <section className="h-screen">
      <div className="container px-6 py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="hidden md:block md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <Image src={bgLogin} className="w-full" alt="Phone image" />
          </div>
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <h1 className="text-4xl font-bold text-center mb-5">Đăng Nhập</h1>
            <form>
              <div className="mb-5">
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Tên đăng nhập"
                  name="username"
                  value={username}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Mật khẩu"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-between items-center mb-6">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    id="exampleCheck3"
                    checked
                    onChange={() => {
                      console.log("check");
                    }}
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="exampleCheck2"
                  >
                    Nhớ mật khẩu
                  </label>
                </div>
                <a
                  href="#!"
                  className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                >
                  Quên mật khẩu?
                </a>
              </div>
              <button
                onClick={handleSubmit}
                className="inline-block bg-primary-color px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Đăng nhập
              </button>

              <div className="flex  items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">OR</p>
              </div>

              <Link
                className="text-center inline-block bg-primary-color px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                href={"/register"}
              >
                Đăng ký
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
