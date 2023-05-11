import { MdSend } from "react-icons/md";

export const Form = () => {

  return (
      <div className="relative w-100 my-10 flex flex-col gap-4">
        <textarea
          placeholder="What's on your mind"
          className="w-full focus:outline-none  focus:ring-2 text-sm h-[110px] rounded-md bg-[#161616] px-6 py-5 resize-none overflow-hidden"
        />
        <div className="mb-10">
          <button className="absolute right-4">
            <MdSend size={25} />
          </button>
        </div>
      </div>
  );
};
