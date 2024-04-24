"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function page() {


  return (
    <div className="w-[100%] h-[100vh] p-10">
      <div className="flex justify-between">
        <Image src={"/assets/icons/logo.svg"} width={150} height={100} />
      </div>
      <div className="w-[100%]  flex mt-10">
        <div className=" w-[50%]">
          {
            <div>
              <form className="max-w-sm mx-auto">
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Login
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  ></label>
                  <input
                    type="password"
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-[384px] bg-blue-500 rounded-lg h-9 text-white"
                >
                  Login
                </button>

                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5"
                >
                  Don't have an account?{" "}
                  <Link href="/register" className="text-blue-500 font-bold">
                    Register
                  </Link>
                </label>
                <div className="divider divider-neutral text-gray-500">
                  Continue with{" "}
                </div>
                {/* <button
                  type="submit"
                  className="w-[384px] bg-blue-500 rounded-lg h-9 text-white"
                >
                  Google
                </button> */}

                <button className=" w-[380px] px-4 py-2 border flex gap-2 justify-center  border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                  <Image
                    className="w-6 h-6 "
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    loading="lazy"
                    alt="google logo"
                    width={100}
                    height={100}
                  />
                  <span className="" >Google</span>
                </button>
              </form>
            </div>
          }
        </div>
        <div className=" w-[50%]">
          <img className="w-[350px] h-[450px]" src="/images/login.png" alt="" />
        </div>
      </div>
    </div>
  );
}
