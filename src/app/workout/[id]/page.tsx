import AddPlanButton from "@/components/actionButton/AddPlan";
import AddSaveButton from "@/components/actionButton/AddSaveButton";
import Image from "next/image";

import React from "react";

const getGymData = async (id: string |number) => {
  const res = await fetch(`https://api.api-store.workers.dev/api/fitlog/${id}`);

  // if (!res.ok) {
  //   throw new Error("Failed to fetch workout data");
  // }

  return res.json();
};

interface WorkoutPageProps {
  params: Promise<{ id: string }>;
}

const WorkDetailsPage = async ({ params }: WorkoutPageProps) => {
  const { id } = await params;

  const workout = await getGymData(id);

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="overflow-hidden rounded-xl border border-[#252830] bg-[#0f1115] p-2 sm:p-4">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* ================= IMAGE ================= */}
          <div className="relative h-90 overflow-hidden rounded-lg sm:h-107.5 lg:h-full lg:min-h-125">
            <Image
              loading="eager"
              src={workout.image}
              alt={workout.name}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
              priority
            />
          </div>

          {/* ================= DETAILS ================= */}
          <div className="flex flex-col px-2 py-3 sm:px-4 sm:py-5">
            {/* Category */}
            <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#c8ff00]">
              {workout.category}
            </p>

            {/* Title */}
            <h1 className="mt-2 text-3xl font-black uppercase leading-none tracking-tight text-white sm:text-4xl">
              {workout.name}
            </h1>

            {/* Description */}
            <p className="mt-3 max-w-2xl text-[10px] leading-5 text-[#8b909b] sm:text-xs">
              {workout.description}
            </p>

            {/* Tags */}
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="rounded-full bg-[#c8ff00] px-3 py-1 text-[8px] font-bold uppercase text-black">
                {workout.category}
              </span>

              <span className="rounded-full bg-[#c8ff00] px-3 py-1 text-[8px] font-bold uppercase text-black">
                {workout.difficulty}
              </span>
            </div>

            {/* ================= SPECS ================= */}
            <div className="mt-5 overflow-hidden rounded-xl border border-[#252830] bg-[#171a20]">
              {/* Equipment */}
              <div className="flex items-center justify-between border-b border-[#252830] px-4 py-3">
                <span className="text-[8px] font-medium uppercase tracking-wider text-[#858a95]">
                  Equipment
                </span>

                <span className="text-[9px] text-white">
                  {workout.equipment}
                </span>
              </div>

              {/* Difficulty */}
              <div className="flex items-center justify-between border-b border-[#252830] px-4 py-3">
                <span className="text-[8px] font-medium uppercase tracking-wider text-[#858a95]">
                  Difficulty
                </span>

                <span className="text-[9px] text-white">
                  {workout.difficulty}
                </span>
              </div>

              {/* Sets */}
              <div className="flex items-center justify-between border-b border-[#252830] px-4 py-3">
                <span className="text-[8px] font-medium uppercase tracking-wider text-[#858a95]">
                  Sets
                </span>

                <span className="text-[9px] text-white">{workout.sets}</span>
              </div>

              {/* Reps */}
              <div className="flex items-center justify-between border-b border-[#252830] px-4 py-3">
                <span className="text-[8px] font-medium uppercase tracking-wider text-[#858a95]">
                  Reps
                </span>

                <span className="text-[9px] text-white">{workout.reps}</span>
              </div>

              {/* Duration */}
              <div className="flex items-center justify-between border-b border-[#252830] px-4 py-3">
                <span className="text-[8px] font-medium uppercase tracking-wider text-[#858a95]">
                  Duration
                </span>

                <span className="text-[9px] text-white">
                  {workout.duration}
                </span>
              </div>

              {/* Calories */}
              <div className="flex items-center justify-between border-b border-[#252830] px-4 py-3">
                <span className="text-[8px] font-medium uppercase tracking-wider text-[#858a95]">
                  Calories
                </span>

                <span className="text-[9px] text-white">
                  {workout.calories} kcal
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-between px-4 py-3">
                <span className="text-[8px] font-medium uppercase tracking-wider text-[#858a95]">
                  Rating
                </span>

                <span className="text-[9px] text-white">{workout.rating}</span>
              </div>
            </div>

            {/* ================= INSTRUCTIONS ================= */}
            <div className="mt-5">
              <h2 className="text-sm font-black uppercase tracking-wide text-white">
                Instructions
              </h2>

              <div className="mt-3 space-y-2">
                {workout.instructions
                  ?.slice(0, 4)
                  .map((instruction: string, index: number) => (
                    <div
                      key={index}
                      className="flex gap-3 text-[9px] leading-4 text-[#8b909b]"
                    >
                      <span className="font-bold text-white">{index + 1}.</span>

                      <p>{instruction}</p>
                    </div>
                  ))}
              </div>
            </div>

            {/* ================= BUTTONS ================= */}
            <div className="mt-6 flex flex-wrap gap-2">
              {/* Plan Button */}
              <AddPlanButton workout={workout}></AddPlanButton>
              {/* Save for later */}
              <AddSaveButton workout={workout}></AddSaveButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkDetailsPage;
