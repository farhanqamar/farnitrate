import React from "react";
import { FiChevronRight } from "react-icons/fi";
const Account = () => {
  return (
    <>
      <div className="mr-[56px] mt-10 px-[50px] w-[550px]">
        <div className="text-left py-8 text-3xl font-extrabold">
          <h2>Welcome Back!</h2>

          <form className="flex flex-col pb-[20px] py-8 border-b-[1px] border-[#ffff]">
            <label className="label mb-[5px]">Emaill address</label>
            <input className="bg-white p-[12px]"></input>
            <label className="label mt-[25px] mb-[5px]">Password</label>
            <input className="bg-white  p-[12px]"></input>
            <div className="relative">
              <button className="bg-[#F6C934] text-[13px] tracking-wide  text-black bold flex items-center justify-between px-[50px] mt-[30px]">
                LOGIC
                <FiChevronRight className="h-[50px] text-[black] text-[35px] px-2" />
              </button>
            </div>

            <button className="custom-button text-left my-[20px]">Forgot Your Password</button>
          </form>
          <h3 className="text-[25px] py-[30px] font-extrabold">Don't have an account yet?</h3>
          <a className="custom-button text-[22px]" href="#">Create An Account</a>
        </div>
        <div />
      </div>
    </>
  );
};

export default Account;
