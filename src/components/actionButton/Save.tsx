'use client'
import { WorkoutContext } from "@/context/WorkoutContext";
import Link from "next/link";
import React, { useContext } from "react";

const Save = () => {
    const {saved=[]}=useContext(WorkoutContext)?? {}
  return (
    <Link href='/myPlan'>
      <button className="flex gap-2 cursor-pointer">
        Saved
        <span className="text-white  rounded-full px-2 border border-black">
          {saved.length}
        </span>
      </button>
    </Link>
  );
};

export default Save;
