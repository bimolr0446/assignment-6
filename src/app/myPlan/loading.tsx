const Loading = () => {
  return (
    <section className="container mx-auto px-2 md:px-3">
      {/* Header Skeleton */}
      <section className="my-2 md:my-12">
        <div className="h-7 w-32 animate-pulse rounded bg-gray-700 md:h-14 md:w-60" />

        <div className="mt-4 h-3 w-64 animate-pulse rounded bg-gray-700 md:h-6 md:w-120" />
      </section>

      {/* Stats Skeleton */}
      <section className="mb-2 grid grid-cols-3 overflow-hidden rounded-xl border border-[#252830] bg-[#15171C]">
        {/* Exercises */}
        <div className="p-2 md:p-5">
          <div className="h-2.5 w-16 animate-pulse rounded bg-gray-700" />

          <div className="mt-2 h-7 w-10 animate-pulse rounded bg-gray-700 md:h-9" />
        </div>

        {/* Minutes */}
        <div className="border-l border-[#252830] p-2 md:p-5">
          <div className="h-2.5 w-14 animate-pulse rounded bg-gray-700" />

          <div className="mt-2 h-7 w-10 animate-pulse rounded bg-gray-700 md:h-9" />
        </div>

        {/* Calories */}
        <div className="border-l border-[#252830] p-2 md:p-5">
          <div className="h-2.5 w-14 animate-pulse rounded bg-gray-700" />

          <div className="mt-2 h-7 w-10 animate-pulse rounded bg-gray-700 md:h-9" />
        </div>
      </section>

      {/* Tabs + Cards */}
      <section className="mt-15">
        <div className="relative">
          {/* Tabs Skeleton */}
          <div className="flex h-12 items-center gap-3 rounded-xl bg-[#15171C] px-4">
            <div className="h-6 w-32 animate-pulse rounded bg-gray-700" />
            <div className="h-6 w-20 animate-pulse rounded bg-gray-700" />
          </div>

          {/* Cards */}
          <div className="mt-4 space-y-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="flex animate-pulse flex-col gap-4 rounded-xl border border-dotted border-gray-700 bg-[#11151b] p-3 md:flex-row md:items-center md:justify-between"
              >
                {/* Left */}
                <div className="flex items-center gap-3">
                  {/* Image */}
                  <div className="h-24 w-32 shrink-0 rounded-md bg-gray-700 sm:h-28 sm:w-36 md:h-30 md:w-40" />

                  {/* Info */}
                  <div className="space-y-3">
                    <div className="h-5 w-32 rounded bg-gray-700" />

                    <div className="h-2.5 w-20 rounded bg-gray-700" />

                    <div className="flex gap-3">
                      <div className="h-2.5 w-14 rounded bg-gray-700" />
                      <div className="h-2.5 w-20 rounded bg-gray-700" />
                      <div className="h-2.5 w-10 rounded bg-gray-700" />
                    </div>
                  </div>
                </div>

                {/* Right */}
                <div className="flex items-center justify-between gap-3">
                  <div className="h-7 w-14 rounded-full bg-gray-700" />

                  <div className="h-7 w-24 rounded-full bg-gray-700" />

                  <div className="h-7 w-5 rounded bg-gray-700" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Loading;
