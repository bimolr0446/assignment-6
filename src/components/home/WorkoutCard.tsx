import { GymType } from "@/types/gymType";
import Image from "next/image";
import Link from "next/link";

interface GymCardProps {
  workout: GymType;
}

const WorkoutCard = ({ workout }: GymCardProps) => {
  
  return (
    <Link href={`/workout/${workout.id}`}>
      <div className="group overflow-hidden rounded-xl border border-[#252830] bg-[#15171C]">
        {/* Image */}
        <div className="relative h-36.25 w-full overflow-hidden">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            loading="eager"
            sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover transition duration-300 group-hover:scale-105"
          />
        </div>

        {/* Card Content */}
        <div className="p-3">
          {/* Muscle Groups */}
          <div className="mb-2 flex flex-wrap gap-1.5">
            {workout.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#C8FF00] px-2 py-0.5 text-[8px] font-bold uppercase text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Name */}
          <h2 className="truncate text-[13px] font-black uppercase text-white">
            {workout.name}
          </h2>

          {/* Equipment */}
          <p className="mt-1 text-[9px] text-[#6B7280]">{workout.equipment}</p>

          {/* Stats */}
          <div className="mt-3 grid grid-cols-3 gap-2 border-t border-[#252830] pt-3">
            {/* Duration */}
            <div>
              <p className="text-[8px] text-[#6B7280]">Duration</p>

              <p className="mt-0.5 text-[9px] font-medium text-[#D1D5DB]">
                ◷ {workout.duration} min
              </p>
            </div>

            {/* Calories */}
            <div>
              <p className="text-[8px] text-[#6B7280]">Calories</p>

              <p className="mt-0.5 text-[9px] font-medium text-[#D1D5DB]">
                🔥 {workout.caloriesBurned} kcal
              </p>
            </div>

            {/* Rating */}
            <div>
              <p className="text-[8px] text-[#6B7280]">Rating</p>

              <p className="mt-0.5 text-[9px] font-medium text-[#D1D5DB]">
                ★ {workout.rating}
              </p>
            </div>
          </div>

          {/* Sets & Reps */}
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="rounded-md bg-[#1D2026] px-2 py-2">
              <p className="text-[8px] uppercase text-[#6B7280]">Sets</p>

              <p className="text-xs font-bold text-white">{workout.sets}</p>
            </div>

            <div className="rounded-md bg-[#1D2026] px-2 py-2">
              <p className="text-[8px] uppercase text-[#6B7280]">Reps</p>

              <p className="text-xs font-bold text-white">{workout.reps}</p>
            </div>
          </div>

          {/* Description */}
          <p className="mt-3 line-clamp-2 text-[9px] leading-4 text-[#8B909B] ">
            {workout.description}
          </p>

          {/* Button */}
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
