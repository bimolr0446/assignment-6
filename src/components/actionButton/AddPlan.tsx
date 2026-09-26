"use client";
import { WorkoutContext } from "@/context/WorkoutContext";
import { GymType } from "@/types/gymType";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const AddPlanButton = ({ workout }: { workout: GymType }) => {
  const context = useContext(WorkoutContext);
  if (!context) {
    throw new Error(
      "AddPlanButton must be used within WorkoutContext.Provider",
    );
  }
  const { plan, setPlan } = context;
  const handleAddPlan = () => {
    const existingWorkout = plan.find((item) => item.id === workout.id);

    if (existingWorkout) {
      toast.error("This workout is already in today's plan");
      return;
    }

    setPlan([...plan, workout]);

    toast.success("Added to today's plan");
  };
  return (
    <button
      onClick={() => handleAddPlan()}
      className="rounded-md bg-[#c8ff00] px-4 py-2.5 text-[9px] font-bold uppercase text-black transition hover:bg-[#b5e600]"
    >
      + Add to today&apos;s plan
    </button>
  );
};

export default AddPlanButton;
