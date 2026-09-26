
const WorkoutCardSkeleton = () => {
  return (
    <div className="animate-pulse overflow-hidden rounded-xl border border-[#252830] bg-[#15171C] container mx-auto">
      {/* Image */}
      <div className="relative h-36.25 w-full bg-[#252830]" />

      {/* Card Content */}
      <div className="p-3">
        {/* Muscle Groups */}
        <div className="mb-2 flex flex-wrap gap-1.5">
          <div className="h-4 w-14 rounded-full bg-[#252830]" />
          <div className="h-4 w-16 rounded-full bg-[#252830]" />
          <div className="h-4 w-12 rounded-full bg-[#252830]" />
        </div>

        {/* Name */}
        <div className="h-4 w-3/4 rounded bg-[#252830]" />

        {/* Equipment */}
        <div className="mt-2 h-3 w-1/2 rounded bg-[#252830]" />

        {/* Stats */}
        <div className="mt-3 grid grid-cols-3 gap-2 border-t border-[#252830] pt-3">
          {/* Duration */}
          <div>
            <div className="h-2 w-12 rounded bg-[#252830]" />
            <div className="mt-1.5 h-3 w-16 rounded bg-[#252830]" />
          </div>

          {/* Calories */}
          <div>
            <div className="h-2 w-12 rounded bg-[#252830]" />
            <div className="mt-1.5 h-3 w-20 rounded bg-[#252830]" />
          </div>

          {/* Rating */}
          <div>
            <div className="h-2 w-10 rounded bg-[#252830]" />
            <div className="mt-1.5 h-3 w-14 rounded bg-[#252830]" />
          </div>
        </div>

        {/* Sets & Reps */}
        <div className="mt-3 grid grid-cols-2 gap-2">
          {/* Sets */}
          <div className="rounded-md bg-[#1D2026] px-2 py-2">
            <div className="h-2 w-8 rounded bg-[#252830]" />
            <div className="mt-2 h-4 w-6 rounded bg-[#252830]" />
          </div>

          {/* Reps */}
          <div className="rounded-md bg-[#1D2026] px-2 py-2">
            <div className="h-2 w-8 rounded bg-[#252830]" />
            <div className="mt-2 h-4 w-10 rounded bg-[#252830]" />
          </div>
        </div>

        {/* Description */}
        <div className="mt-3 space-y-2">
          <div className="h-2 w-full rounded bg-[#252830]" />
          <div className="h-2 w-4/5 rounded bg-[#252830]" />
        </div>
      </div>
    </div>
  );
};

export default WorkoutCardSkeleton;

