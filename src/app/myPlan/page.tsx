"use client";

import PlanCard from "@/components/home/PlanCard";
import { WorkoutContext } from "@/context/WorkoutContext";
import { GymType } from "@/types/gymType";
import Link from "next/link";
import { useContext, useState } from "react";

const MyPlanPage = () => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error("MyPlanPage must be used within WorkoutContext.Provider");
  }

  const { plan, saved } = context;

  const [sortBy, setSortBy] = useState("duration");

  const sortWorkout = (workout: GymType[]) => {
    const workouts = [...workout];
    if (sortBy === "duration") {
      workouts.sort((a, b) => a.duration - b.duration);
    } else if (sortBy === "calories") {
      workouts.sort((a, b) => a.caloriesBurned - b.caloriesBurned);
    } else if (sortBy === "rating") {
      workouts.sort((a, b) => a.rating - b.rating);
    }
    return workouts;
  };
  const sortedPlan = sortWorkout(plan);
  const sortedSaved = sortWorkout(saved);


  const [activeTab, setActiveTab] = useState<'plan' | 'save'>('plan');

const activeWorkouts = activeTab === "plan" ? plan : saved;

const totalMinutes = activeWorkouts.reduce(
  (total, workout) => total + workout.duration,
  0,
);

const totalCalories = activeWorkouts.reduce(
  (total, workout) => total + workout.caloriesBurned,
  0,
);


  return (
    <section className="container mx-auto md:px-3 px-2">
      <section>
        <section className="md:my-12 my-2">
          <h1 className="md:text-6xl text-xl my-2 font-black uppercase tracking-tight text-white">
            MY PLAN
          </h1>

          <p className="md:mt-4  md:text-2xl text-[8px] text-[#9CA3AF]">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </section>
        <section className="grid grid-cols-3 overflow-hidden rounded-xl border border-[#252830] bg-[#15171C] mb-2">
          {/* Exercises */}
          <div className="md:p-5 p-2">
            <p className="text-[10px] font-medium text-[#6B7280]">Exercises</p>

            <p className="md:mt-2 md:text-3xl sm:text-xl font-black leading-none text-[#C8FF00]">
              {activeWorkouts.length}
            </p>
          </div>

          {/* Minutes */}
          <div className="border-l border-[#252830] md:p-5 ms:p-3 p-2">
            <p className="text-[10px] font-medium text-[#6B7280]">Minutes</p>

            <p className="md:mt-2 md:text-3xl sm:text-xl font-black leading-none text-white">
              {totalMinutes}
            </p>
          </div>

          {/* Calories */}
          <div className="border-l border-[#252830] md:p-5 sm:p-3 p-2">
            <p className="text-[10px] font-medium text-[#6B7280]">Calories</p>

            <p className="md:mt-2 md:text-3xl sm:text-xl font-black leading-none text-white">
              {totalCalories}
            </p>
          </div>
        </section>
      </section>
      <section className="mt-15 ">
        <div className="lg:relative relative">
          <div className="tabs tabs-box">
            <input
              type="radio"
              name="my_tabs_6"
              className="tab"
              aria-label={`Taday's Plan (${sortedPlan.length})`}
              defaultChecked
              onChange={() => setActiveTab("plan")}
            />

            <div className="tab-content bg-base-100 border-base-300 p-4 ">
              {sortedPlan.length === 0 ? (
                <div className="flex min-h-50 flex-col items-center justify-center rounded-xl border border-dotted border-gray-700">
                  <h2 className="text-lg font-bold uppercase text-white">
                    NOTHING HERE YET
                  </h2>

                  <p className="mt-1 text-xs text-gray-500">
                    Browse the library and add a lift to get today moving.
                  </p>

                  <Link href="/">
                    <button className="mt-4 rounded-full bg-[#c8ff00] px-5 py-2 text-xs font-bold text-black transition hover:bg-[#b5e600]">
                      Go to workouts
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-3">
                  {sortedPlan.map((workout) => (
                    <PlanCard type="plan" key={workout.id} workout={workout} />
                  ))}
                </div>
              )}
            </div>

            <input
              type="radio"
              name="my_tabs_6"
              className="tab"
              aria-label={`Saved ${sortedSaved.length}`}
              onChange={() => setActiveTab("save")}
            />

            <div className="tab-content bg-base-100 border-base-300 p-4">
              {sortedSaved.length === 0 ? (
                <div className="flex min-h-50 flex-col items-center justify-center rounded-xl border border-dotted border-gray-700">
                  <h2 className="text-lg font-bold uppercase text-white">
                    NOTHING HERE YET
                  </h2>

                  <p className="mt-1 text-xs text-gray-500">
                    Browse the library and save a lift for later.
                  </p>

                  <Link href="/">
                    <button className="mt-4 rounded-full bg-[#c8ff00] px-5 py-2 text-xs font-bold text-black transition hover:bg-[#b5e600]">
                      Go to workouts
                    </button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-3">
                  {sortedSaved.map((workout) => (
                    <PlanCard type="saved" key={workout.id} workout={workout} />
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-1 items-center absolute md:top-1 top-[-40] md:right-2">
            <p className="text-sm text-gray-400 w-25">Sort by :</p>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="select select-sm"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>
      </section>
    </section>
  );
};

export default MyPlanPage;
