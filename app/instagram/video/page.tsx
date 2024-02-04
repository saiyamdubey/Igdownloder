"use client";

// https://www.instagram.com/p/Cx8FpSlyXAC/

import React, { useState } from "react";
import { GoPaste } from "react-icons/go";
import { Download } from "@/app/instagram/video/videodown";

type Props = {};

function Searchbar({}: Props) {
  const [inputValue, setInputValue] = useState("");

  const pasteOrClear = () => {
    if (inputValue === "") {
      navigator.clipboard.readText().then((text) => setInputValue(text));
    } else {
      setInputValue("");
    }
  };
  return (
    <>
      <div className="flex justify-center items-center m-auto ">
        <div className="mt-10 input-group flex items-center">
          <button
            className="flex button--submit border-2 min-h-10 mr-2 rounded-r-[3px] px-4 py-2 bg-gray-700 text-white text-base  cursor-pointer transition-colors duration-500  border-black ease-in-out  focus:border-gray-700 "
            onClick={() => pasteOrClear()}
          >
            <GoPaste className="mt-1 mr-3" />
            {inputValue === "" ? " Paste" : "Clear"}
          </button>
          <input
            className="input pl-4 w-[40rem] py-2 placeholder:text-base placeholder:font-mono border-2 border-black"
            id="Email"
            name="Email"
            type="email"
            value={inputValue}
            placeholder="https://www.instagram.com/p/Cx8FpSlyXAC/"
            onChange={(e) => setInputValue(e.target.value)}
          ></input>

          <input
            onClick={() => Download(inputValue)}
            className="button--submit border-2 min-h-10 rounded-r-[3px] px-4 py-2 bg-black text-white text-base cursor-pointer    border-black ease-in-out   bg-gradient-to-r from-blue-700 via-purple-500 via-pink-500 to-red-500 hover:from-yellow-600 hover:via-yellow-500 hover:to-green-600"
            value="Download"
            type="submit"
          ></input>
        </div>
      </div>
    </>
  );
}

export default Searchbar;
