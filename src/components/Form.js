import React from "react";
import { MdSend } from "react-icons/md";

export const Form = () => {
  return (
    <div className="">
      <form className="w-100 my-10">
        <textarea
          placeholder="Whats on your mind"
          className="w-full focus:outline-none  focus:ring-2 h-24 rounded-md bg-[#161616] px-6 py-5 resize-none overflow-hidden"
        />
        <div>
          <button className="flex justify-center">
            <MdSend size={25} />
          </button>
        </div>
      </form>
    </div>
  );
};
