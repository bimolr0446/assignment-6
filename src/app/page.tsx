
import Banner from "@/components/home/Banner";
import WorkoutLibrary from "@/components/home/WorkoutLibrary";


import { GymType } from "@/types/gymType";
const getGym = async (): Promise<GymType[]> => {
  const res = await fetch("https://api.api-store.workers.dev/api/fitlog");
//  if (!res.ok) {
//    throw new Error("Failed to fetch workout data");
//  }

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
