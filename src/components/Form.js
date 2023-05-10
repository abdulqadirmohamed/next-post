import React from "react";
import { MdSend } from "react-icons/md";

export const Form = () => {
  return (
    <div>
      <form className="w-100 my-10">
        <textarea
          name=""
          placeholder="Whats on your mind"
          id=""
        
          className="w-full focus:outline-none  focus:ring-2 h-24 rounded-md bg-[#161616] px-6 py-5 resize-none overflow-hidden"
        />
        <button className="flex justify-end">
          {" "}
          <MdSend />
        </button>
      </form>
    </div>
  );
};
