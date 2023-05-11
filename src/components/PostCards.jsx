import React from 'react'
import Image from 'next/image';
import profile from "../img/profile.jpg";
import { AiOutlineHeart } from "react-icons/ai";

export const PostCards = ({userName, reaction}) => {
  return (
    <div>
        <div className="bg-[#161616] w-full h-[140px] px-6 py-8 rounded-md relative my-8">
      <div className="flex gap-4">
        <div>
          <Image
            src={profile}
            className="object-fit rounded-full"
            width={40}
            height={40}
            alt="Picture of the author"
          />
        </div>
        <div>
          <h1 className="text-sm font-medium text-[#FF9550]">{userName}</h1>
          <span>
            <p className="text-sm font-normal my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              culpa.
            </p>
          </span>
        </div>
      </div>
      {/* Reactions */}
      <div className="absolute bottom-4 left-8 flex items-center gap-2">
        <span className="text-red-600 cursor-pointer">
          <AiOutlineHeart size={20} />
        </span>
        <span className='text-sm'>{reaction}</span>
      </div>
    </div>
    </div>
  )
}
