'use client'
import { GymType } from '@/types/gymType';
import React, { createContext, ReactNode, useState } from 'react';
import { toast } from 'react-toastify';

type WorkoutContextValue = {
  plan: GymType[];
  setPlan: React.Dispatch<React.SetStateAction<GymType[]>>;
  saved: GymType[];
  setSaved: React.Dispatch<React.SetStateAction<GymType[]>>;
  removeFromPlan: (id: string | number) => void;
  removeFromSaved: (id: string | number) => void;
};

export const WorkoutContext = createContext<WorkoutContextValue | undefined>(undefined);


const WorkoutProvider = ({children}:{children:ReactNode}) => {
      const [plan, setPlan] = useState<GymType[]>([]);
    const [saved, setSaved] = useState<GymType[]>([]);


    const removeFromPlan = (id: string | number) => {
        setPlan((prev) => prev.filter((workout) => workout.id !== id));
        toast.success("Workout removed from today's plan");
    };

    const removeFromSaved = (id: string | number) => {
        setSaved((prev) => prev.filter((workout) => workout.id !== id));
        toast.success("Workout removed from saved");
    };
    
    const shareData = {
      plan,
      setPlan,
      saved,
      setSaved,
      removeFromPlan,
      removeFromSaved
    };
    return <WorkoutContext.Provider value={shareData}>
        {children}
    </WorkoutContext.Provider>
};

export default WorkoutProvider;