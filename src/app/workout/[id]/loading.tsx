const Loading = () => {
  return (
    <main className="min-h-screen bg-[#101216]">
      <section className="container mx-auto px-3 py-5 sm:px-4 lg:py-8">
        <div className="overflow-hidden rounded-xl border border-[#252830] bg-[#15171C] p-2 sm:p-3">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-8">
            {/* ================= IMAGE ================= */}
            <div className="relative h-100 overflow-hidden rounded-lg bg-[#252830] animate-pulse sm:h-125 lg:h-160">
              <div className="absolute inset-0 bg-[#252830]" />
            </div>

            {/* ================= DETAILS ================= */}
            <div className="flex flex-col justify-center px-2 py-4 sm:px-4 lg:px-5">
              {/* Title */}
              <div className="h-9 w-64 animate-pulse rounded bg-[#252830] sm:h-11 sm:w-80" />

              {/* Description */}
              <div className="mt-4 space-y-2">
                <div className="h-3 w-full animate-pulse rounded bg-[#252830]" />
                <div className="h-3 w-11/12 animate-pulse rounded bg-[#252830]" />
                <div className="h-3 w-3/4 animate-pulse rounded bg-[#252830]" />
              </div>

              {/* Badge */}
              <div className="mt-5 flex gap-2">
                <div className="h-5 w-5 animate-pulse rounded-full bg-[#252830]" />

                <div className="h-5 w-20 animate-pulse rounded-full bg-[#252830]" />
              </div>

              {/* ================= INFO TABLE ================= */}
              <div className="mt-6 overflow-hidden rounded-lg border border-[#252830]">
                {Array.from({ length: 7 }).map((_, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b border-[#252830] px-4 py-4 last:border-b-0"
                  >
                    {/* Label */}
                    <div className="h-2.5 w-20 animate-pulse rounded bg-[#252830]" />

                    {/* Value */}
                    <div className="h-2.5 w-16 animate-pulse rounded bg-[#252830]" />
                  </div>
                ))}
              </div>

              {/* ================= INSTRUCTIONS ================= */}
              <div className="mt-6">
                {/* Heading */}
                <div className="h-4 w-28 animate-pulse rounded bg-[#252830]" />

                {/* Instruction items */}
                <div className="mt-4 space-y-4">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div key={index} className="flex items-start gap-3">
                      {/* Number */}
                      <div className="h-3 w-3 shrink-0 animate-pulse rounded bg-[#252830]" />

                      {/* Text */}
                      <div className="h-3 flex-1 animate-pulse rounded bg-[#252830]" />
                    </div>
                  ))}
                </div>
              </div>

              {/* ================= BUTTONS ================= */}
              <div className="mt-6 flex flex-wrap gap-3">
                <div className="h-9 w-36 animate-pulse rounded-md bg-[#252830]" />

                <div className="h-9 w-28 animate-pulse rounded-md bg-[#252830]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Loading;
