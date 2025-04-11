import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoMdTime } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";

const Booking = () => {
  return (
    <>
      <section className="mb-14 border-b border-[#9D9D9D]">
        <div className="container mx-auto">
          <div>
            <form className="grid grid-cols-2 md:grid-cols-5">
              <div className="flex items-center gap-1.5 border-r border-[#eee] py-5 px-2.5">
                <FaUserAlt className="text-secondary" />
                <input
                  type="text"
                  placeholder="Name"
                  className=" px-2.5 focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-1.5 border-r border-[#eee] py-5 px-2.5">
                <HiOutlineMail className="text-secondary text-xl" />
                <input
                  type="text"
                  placeholder="Email Address"
                  className=" px-2.5 focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-1.5 border-r border-[#eee] py-5 px-2.5">
                <MdOutlineDateRange className="text-secondary text-xl" />
                <input
                  type="text"
                  placeholder="Date"
                  className=" px-2.5 focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-1.5 border-r border-[#eee] py-5 px-2.5">
                <IoMdTime className="text-secondary text-xl" />
                <input
                  type="text"
                  placeholder="Time"
                  className=" px-2.5 focus:outline-none"
                />
              </div>

              <div className="col-span-2 md:col-span-1">
                <button className="w-full h-full py-4 md:py-0 hover:bg-black hover:text-white cursor-pointer transition-all duration-500">
                  MAKE A RESERVATION
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;
