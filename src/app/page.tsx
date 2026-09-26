
import Banner from "@/components/home/Banner";
import WorkoutLibrary from "@/components/home/WorkoutLibrary";


import { GymType } from "@/types/gymType";
const getGym = async (): Promise<GymType[]> => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  return res.json();
};

const HomePage =async () => {
   const gymData = await getGym();
  return (
    <main>
      <div>
        <Banner></Banner>
        <WorkoutLibrary gymData={gymData}></WorkoutLibrary>
      </div>
    </main>
  );
};

export default HomePage;
