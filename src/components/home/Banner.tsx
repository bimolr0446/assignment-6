import Image from "next/image";
import BannerLogo from "@/assets/banner.png";

const Banner = () => {
  return (
    <section className="container mx-auto">
      <section className="w-full py-6">
        <div className=" rounded-xl border border-[#252830] bg-[#15171c]">
          <div className="grid min-h-55 grid-cols-1 items-center md:grid-cols-2">
            {/* Left Content */}
            <div className="px-5 py-8 sm:px-8 md:px-10 lg:px-12">
              <p className="mb-3 text-[9px] font-bold uppercase tracking-wider text-[#c8ff00]">
                Workout Library
              </p>

              <h1 className=" text-3xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-4xl md:text-[38px] lg:text-[42px]">
                Train With Intent. Log
                <br />
                Every Set.
              </h1>

              <p className="mt-4 max-w-107.5 text-[10px] leading-4 text-[#8b909b] sm:text-xs">
                FitLog is a dark, no-nonsense gym companion: pick a lift, lock
                it into today&apos;s plan, and watch the week&apos;s work add
                up.
              </p>

              <button
                className="rounded-sm
                mt-5
                border-2
                border-[#c8ff00]
                bg-[#c8ff00]
                px-3
                py-1.5
                text-[9px]
                font-bold
                uppercase
                text-black
                transition
                duration-200
                hover:bg-transparent
                hover:text-[#c8ff00]
              "
              >
                Browse Workout
              </button>
            </div>

            {/* Right Image */}
            <div className="relative flex h-45 items-center justify-center md:h-full">
              <Image
                src={BannerLogo}
                alt="Workout illustration"
                width={220}
                height={220}
                className="
                h-42.5
                w-auto
                object-contain
                sm:h-47.5
                md:h-50
                lg:h-53.75
              "
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Banner;
