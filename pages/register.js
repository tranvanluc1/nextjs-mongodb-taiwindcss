import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import bgLogin from "../utils/images/bg-login.svg";
import axios from "axios";
import { useNotification } from "../hooks/useNotification";

function Register() {
  const [dataUser, setData] = useState({
    username: "",
    email: "",
    password: "",
    cf_password: "",
  });
  const { username, email, password, cf_password } = dataUser;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((pre) => ({ ...pre, [name]: value }));
  };

  const register = async () => {
    try {
      const res = await axios.post("/api/user/register", { ...dataUser });
      if (res.status === 200) {
        useNotification.success(res.data.msg);
        setData({
          username: "",
          email: "",
          password: "",
          cf_password: "",
        });
      }
    } catch (error) {
      useNotification.error(error.response.data.msg);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register()
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="h-screen">
      <div className="container px-6 py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="hidden md:block md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <Image src={bgLogin} className="w-full" alt="Phone image" />
          </div>
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
            <h1 className="text-4xl font-bold text-center mb-5">Đăng Ký</h1>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Tên đăng nhập"
                  name="username"
                  value={username}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email"
                  value={email}
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Mật khẩu"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Nhập lại mật khẩu"
                  name="cf_password"
                  value={cf_password}
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-between items-center mb-6">
                <div className="form-group form-check"></div>
                <a
                  href="#!"
                  className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out"
                >
                  Đã có tài khoản? Đăng nhập
                </a>
              </div>
              <button
                onClick={handleSubmit}
                className="inline-block bg-primary-color px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Đăng ký
              </button>

              <div className="flex  items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p className="text-center font-semibold mx-4 mb-0">OR</p>
              </div>

              <Link
                className="text-center inline-block bg-primary-color px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                href="/login"
              >
                Đăng nhập
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
