"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function page() {
  const { register, handleSubmit } = useForm();

  function handleOnSubmit(data) {
    console.log(data);
  }

  return (
    <div>
      <div className="grid grid-cols-2 ">
        <form onSubmit={handleSubmit(handleOnSubmit)} className="mt-12">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div>
                <label htmlFor="firstName">First Name:</label>
                <input
                  {...register("firstName", { required: true })}
                  placeholder="Enter your name..."
                  type="text"
                  name="firstName"
                  className="mt-2 bg-[#EEEEEE] block border mb-2 border-gray rounded-md w-full py-2 px-5 focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="email">Email:</label>
                <input
                  {...register("email", {
                    required: true,
                  })}
                  placeholder="BTB@gmail.com"
                  type="email"
                  name="email"
                  className="mt-2 bg-[#EEEEEE]  block border mb-2 border-gray rounded-md w-full py-2 px-5 focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="password">Password:</label>
                <input
                  {...register("password", {
                    required: true,
                  })}
                  placeholder="BTB123!!!"
                  type="password"
                  name="password"
                  className="mt-2 bg-[#EEEEEE] block border mb-2 border-gray rounded-md w-full py-2 px-5 focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1"
                />
              </div>
            </div>

            <div>
              <div>
                <label htmlFor="lastName">Last name:</label>
                <input
                  {...register("lastName", { required: true })}
                  placeholder="Enter your name..."
                  type="text"
                  name="lastName"
                  className="mt-2 bg-[#EEEEEE] block border mb-2 border-gray rounded-md w-full py-2 px-5 focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="mobileNo">Mobile No:</label>
                <input
                  {...register("mobileNo", { required: true })}
                  placeholder="+855 79472934"
                  type="text"
                  name="mobileNo"
                  className="mt-2 bg-[#EEEEEE] block border mb-2 border-gray rounded-md w-full py-2 px-5 focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                  {...register("confirmPassword", { required: true })}
                  placeholder="koko123!!!"
                  type="password"
                  name="confirmPassword"
                  className="mt-2 bg-[#EEEEEE] block border mb-2 border-gray rounded-md w-full py-2 px-5 focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1"
                />
              </div>
            </div>
          </div>

          <div className="pt-6">
            <button
              type="submit"
              className="text-white px-8 bg-blue-600 rounded-md py-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none focus:ring-1"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
