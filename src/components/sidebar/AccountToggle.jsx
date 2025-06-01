import React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
const AccountToggle = () => {
  return (
    <div className="relative border-b mb-4 mt-2 pb-4 border-stone-300">
      <button className="flex p-0.5 hover:bg-stone-200 rounded transition-colors ralative gap-2 w-full items-center">
        <img
          src="https://api.dicebear.com/9.x/notionists/svg"
          className="size-8 rounded shrink-0 bg-violet-500"
          alt="avatar"
        />

        <div className="text-start">
          <span className="text-sm font-bold block"> BP is Loading</span>
          <span className="text-xs block text-stone-500">bp@here.dev</span>
        </div>

                <FiChevronDown className="absolute right-2 top-[30%] text-xs translate-y-[calc-(-50%-4px)] " />
        <FiChevronUp className="absolute right-2 bottom-[36%] text-xs translate-y-[calc-(-50%-4px)]" />
      </button>
    </div>
  );
};

export default AccountToggle;
