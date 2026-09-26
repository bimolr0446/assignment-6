import Image from "next/image";
import { GymType } from "@/types/gymType";

import ViewButton from "../actionButton/ViewButton";
import { useContext, useState } from "react";
import { WorkoutContext } from "@/context/WorkoutContext";

interface PlanCardProps {
  workout: GymType;
  type:'plan' | 'saved'
}

const PlanCard = ({ workout,type}: PlanCardProps) => {
  const context = useContext(WorkoutContext);
  const [isDone, setIsDone]=useState<boolean>(false)
  
  if (!context) {
    throw new Error("PlanCard must be used within WorkoutContext.Provider");
  }
  const { removeFromPlan, removeFromSaved} = context;
  const handleRemove = (id: number) => {
    if (type === 'plan') {
      
      removeFromPlan(id)
    } else {
      removeFromSaved(id)
    }
  }

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-dotted border-gray-700 bg-[#11151b] p-3 md:flex-row md:items-center md:justify-between">
      {/* Left Side */}
      <div className="flex items-center gap-3">
        {/* Image */}
        <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-md sm:h-28 sm:w-36 md:h-30 md:w-40">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="(max-width: 640px) 128px, (max-width: 768px) 144px, 160px"
            className="object-cover"
          />
        </div>

        {/* Workout Info */}
        <div className="min-w-0 space-y-2">
          <h3 className="truncate text-lg font-bold uppercase text-white">
            {workout.name}
          </h3>

          <p className="truncate text-[10px] text-gray-500">
            {workout.equipment}
          </p>

          <div className="mt-1 flex flex-wrap gap-3 text-[9px] text-gray-300">
            <span>◷ {workout.duration} min</span>
            <span>🔥 {workout.caloriesBurned} kcal</span>
            <span>★ {workout.rating}</span>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center justify-between gap-3">
        <ViewButton workout={workout} />

        {type === "plan" && !isDone && (
          <button
            onClick={()=>setIsDone(true)}
            className="cursor-pointer rounded-full bg-[#c8ff00] px-4 py-1.5 text-[9px] font-bold whitespace-nowrap text-black">
            ✓ Mark as Done
          </button>
        )}

        <button
          onClick={() => handleRemove(workout.id)}
          className="cursor-pointer text-2xl text-gray-500 hover:text-white"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default PlanCard;
