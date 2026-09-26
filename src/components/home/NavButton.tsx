"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavButton = () => {
  const pathname = usePathname();

  return (
    <div className="lg:flex gap-5">
      <li>
        <Link
          href="/"
          className={
            pathname === "/" ? "text-[#C2F800] bg-[#1A2312] rounded-3xl" : ""
          }
        >
          Workouts
        </Link>
      </li>

      <li>
        <Link
          href="/myPlan"
          className={
            pathname === "/myPlan"
              ? "text-[#C2F800] bg-[#1A2312] rounded-3xl"
              : ""
          }
        >
          My Plan
        </Link>
      </li>
    </div>
  );
};

export default NavButton;
