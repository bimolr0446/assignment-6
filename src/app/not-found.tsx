import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="w-full max-w-lg text-center">
        {/* 404 */}
        <p className="lg:text-8xl text-4xl font-black tracking-tighter text-[#C8FF00]">
          404
        </p>

        {/* Heading */}
        <h1 className="mt-4 lg:text-3xl text-xl font-black uppercase text-white sm:text-4xl">
          Workout Not Found
        </h1>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-[#8B909B]">
          Sorry, the workout you are looking for does not exist or may have been
          removed.
        </p>

        {/* Button */}
        <Link
          href="/"
          className="mt-7 inline-flex rounded-lg bg-[#C8FF00] px-6 py-3 lg:text-2xl text-[10px] font-black uppercase text-black transition hover:bg-[#b5e600]"
        >
          Back to Workouts
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
