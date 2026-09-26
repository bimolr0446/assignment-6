import { GymType } from "@/types/gymType";

import WorkoutCard from "./WorkoutCard";
interface WorkoutLibraryProps {
  gymData: GymType[];
}

const WorkoutLibrary = ({ gymData }: WorkoutLibraryProps) => {
  return (
    <section className="container mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-black uppercase tracking-tight text-white">
          THE LIBRARY
        </h1>

        <p className="mt-2 text-sm text-[#9CA3AF]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {gymData.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
};

export default WorkoutLibrary;
