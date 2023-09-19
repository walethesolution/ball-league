"use client";
import { useState } from "react";

interface GamesDivProps {
  teams: string[];
  time?: string;
  scores?: number[];
  players?: string[];
}

const GamesDiv: React.FC<GamesDivProps> = ({
  teams,
  time,
  scores,
  players,
}) => {
  return (
    <div className="w-full h-[150px] bg-[#EBDCCB] flex flex-row items-center justify-center gap-6 font-semibold text-sm px-4 py-4 md:text-base md:gap-9 lg:h-full xl:text-xl xl:gap-14 rounded-lg">
      <div className="flex gap-4 justify-center items-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] xl:w-[100px] xl:h-[100px]  rounded-full bg-gray-400"></div>
          <p>{teams[0]}</p>
        </div>
        <p className="text-xl xl:text-5xl">{scores && scores[0]}</p>
      </div>
      <div className="items-center">
        <p>{time ? time : <p className="font-medium">VS</p>}</p>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <p className="text-xl xl:text-5xl">{scores && scores[1]}</p>
        <div className="flex flex-col items-center gap-4">
          <div
            className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] xl:w-[100px] xl:h-[100px]  rounded-full 
              bg-gray-400"
          ></div>

          <p>{teams[1]}</p>
        </div>
      </div>
    </div>
  );
};

export default GamesDiv;
