import Image from "next/image";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="shadow-sm shadow-gray-500">
      <section className="container mx-auto mt-3 flex items-center justify-between p-3">
        <div className="flex items-center gap-2">
          <Image width={20} height={20} alt="FitLog logo" src={logo} />

          <p className="text-sm font-bold sm:text-xl">FITLOG</p>
        </div>

        <p className="lg:text-2xl text-[12px] font-medium text-[#6B7280]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
