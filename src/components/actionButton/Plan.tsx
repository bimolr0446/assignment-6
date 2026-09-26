'use client'
import { WorkoutContext } from '@/context/WorkoutContext';
import Link from 'next/link';
import React, { useContext } from 'react';

const Plan = () => {
    const { plan = [] } = useContext(WorkoutContext) ?? {};
    {/*ata copilot theke suggest korce tai add korci*/}
    return (
      <Link href='/myPlan'>
        <button className="flex gap-2 cursor-pointer">
          Plan{" "}
          <span className="text-black bg-[#CCFF00] rounded-full px-2">
            {plan.length}
          </span>
        </button>
      </Link>
    );
};

export default Plan;