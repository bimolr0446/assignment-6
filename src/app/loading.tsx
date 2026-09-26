const Loading = () => {
  return (
    <main className="min-h-screen bg-[#101216]">
      {/* ================= Banner Skeleton ================= */}
      <section className="container mx-auto">
        <section className="w-full py-6">
          <div className="overflow-hidden rounded-xl border border-[#252830] bg-[#15171C]">
            <div className="grid min-h-55 grid-cols-1 items-center md:grid-cols-2 lg:min-h-100">
              {/* Left Content */}
              <div className="px-5 py-8 sm:px-8 md:px-10 lg:px-12">
                {/* Small Heading */}
                <div className="mx-auto mb-3 h-2.5 w-24 animate-pulse rounded bg-[#252830] md:mx-0" />

                {/* Main Heading */}
                <div className="space-y-2">
                  <div className="mx-auto h-5 w-64 max-w-full animate-pulse rounded bg-[#252830] sm:h-6 md:mx-0 md:h-7 lg:h-9" />

                  <div className="mx-auto h-5 w-48 max-w-full animate-pulse rounded bg-[#252830] sm:h-6 md:mx-0 md:h-7 lg:h-9" />
                </div>

                {/* Description */}
                <div className="mx-auto mt-4 max-w-107.5 space-y-1.5 md:mx-0">
                  <div className="h-2 w-full animate-pulse rounded bg-[#252830]" />
                  <div className="h-2 w-11/12 animate-pulse rounded bg-[#252830]" />
                  <div className="h-2 w-3/4 animate-pulse rounded bg-[#252830]" />
                </div>

                {/* Button */}
                <div className="mx-auto mt-5 h-7 w-24 animate-pulse rounded-sm bg-[#252830] md:mx-0" />
              </div>

              {/* Right Image */}
              <div className="relative flex h-45 items-center justify-center md:h-full">
                <div className="h-42.5 w-42.5 animate-pulse rounded-full bg-[#252830] sm:h-47.5 sm:w-47.5 md:h-50 md:w-50 lg:h-53.75 lg:w-53.75" />
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* ================= Workout Library ================= */}
      <section className="container mx-auto px-4 pb-10">
        {/* Library Heading */}
        <div className="mb-5">
          <div className="h-6 w-40 animate-pulse rounded bg-[#252830]" />

          <div className="mt-2 h-2.5 w-52 animate-pulse rounded bg-[#252830]" />
        </div>

        {/* Workout Cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 12 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-[#252830] bg-[#15171C]"
            >
              {/* Image */}
              <div className="h-36.25 w-full animate-pulse bg-[#252830]" />

              {/* Content */}
              <div className="p-3">
                {/* Muscle Groups */}
                <div className="mb-2 flex gap-1.5">
                  <div className="h-3 w-10 animate-pulse rounded-full bg-[#252830]" />

                  <div className="h-3 w-14 animate-pulse rounded-full bg-[#252830]" />
                </div>

                {/* Name */}
                <div className="h-3 w-28 animate-pulse rounded bg-[#252830]" />

                {/* Equipment */}
                <div className="mt-2 h-2 w-20 animate-pulse rounded bg-[#252830]" />

                {/* Stats */}
                <div className="mt-3 grid grid-cols-3 gap-2 border-t border-[#252830] pt-3">
                  {[1, 2, 3].map((item) => (
                    <div key={item}>
                      <div className="h-2 w-10 animate-pulse rounded bg-[#252830]" />

                      <div className="mt-2 h-2 w-14 animate-pulse rounded bg-[#252830]" />
                    </div>
                  ))}
                </div>

                {/* Sets & Reps */}
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {[1, 2].map((item) => (
                    <div
                      key={item}
                      className="rounded-md bg-[#1D2026] px-2 py-2"
                    >
                      <div className="h-2 w-7 animate-pulse rounded bg-[#252830]" />

                      <div className="mt-2 h-3 w-5 animate-pulse rounded bg-[#252830]" />
                    </div>
                  ))}
                </div>

                {/* Description */}
                <div className="mt-3 space-y-2">
                  <div className="h-2 w-full animate-pulse rounded bg-[#252830]" />

                  <div className="h-2 w-4/5 animate-pulse rounded bg-[#252830]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Loading;
